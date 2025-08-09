(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const st={},Zr=[],Qn=()=>{},Pm=()=>!1,va=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Mc=n=>n.startsWith("onUpdate:"),Jt=Object.assign,Sc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Lm=Object.prototype.hasOwnProperty,Ze=(n,e)=>Lm.call(n,e),Ie=Array.isArray,Jr=n=>xa(n)==="[object Map]",Fh=n=>xa(n)==="[object Set]",ze=n=>typeof n=="function",Et=n=>typeof n=="string",$i=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",Bh=n=>(ht(n)||ze(n))&&ze(n.then)&&ze(n.catch),zh=Object.prototype.toString,xa=n=>zh.call(n),Dm=n=>xa(n).slice(8,-1),Gh=n=>xa(n)==="[object Object]",yc=n=>Et(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ns=xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ma=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Um=/-(\w)/g,Wi=Ma(n=>n.replace(Um,(e,t)=>t?t.toUpperCase():"")),Im=/\B([A-Z])/g,br=Ma(n=>n.replace(Im,"-$1").toLowerCase()),Hh=Ma(n=>n.charAt(0).toUpperCase()+n.slice(1)),za=Ma(n=>n?`on${Hh(n)}`:""),Bi=(n,e)=>!Object.is(n,e),Ga=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ol=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Nm=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let xu;const Sa=()=>xu||(xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ec(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Et(i)?zm(i):Ec(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Et(n)||ht(n))return n}const Om=/;(?![^(]*\))/g,Fm=/:([^]+)/,Bm=/\/\*[^]*?\*\//g;function zm(n){const e={};return n.replace(Bm,"").split(Om).forEach(t=>{if(t){const i=t.split(Fm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function en(n){let e="";if(Et(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=en(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Gm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hm=xc(Gm);function Vh(n){return!!n||n===""}const kh=n=>!!(n&&n.__v_isRef===!0),dn=n=>Et(n)?n:n==null?"":Ie(n)||ht(n)&&(n.toString===zh||!ze(n.toString))?kh(n)?dn(n.value):JSON.stringify(n,Wh,2):String(n),Wh=(n,e)=>kh(e)?Wh(n,e.value):Jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ha(i,s)+" =>"]=r,t),{})}:Fh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ha(t))}:$i(e)?Ha(e):ht(e)&&!Ie(e)&&!Gh(e)?String(e):e,Ha=(n,e="")=>{var t;return $i(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tn;class Vm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=tn,!e&&tn&&(this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=tn;try{return tn=this,e()}finally{tn=t}}}on(){++this._on===1&&(this.prevScope=tn,tn=this)}off(){this._on>0&&--this._on===0&&(tn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function km(){return tn}let rt;const Va=new WeakSet;class Xh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tn&&tn.active&&tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Va.has(this)&&(Va.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mu(this),jh(this);const e=rt,t=Hn;rt=this,Hn=!0;try{return this.fn()}finally{$h(this),rt=e,Hn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ac(e);this.deps=this.depsTail=void 0,Mu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Va.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fl(this)&&this.run()}get dirty(){return Fl(this)}}let qh=0,Os,Fs;function Yh(n,e=!1){if(n.flags|=8,e){n.next=Fs,Fs=n;return}n.next=Os,Os=n}function Tc(){qh++}function bc(){if(--qh>0)return;if(Fs){let e=Fs;for(Fs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Os;){let e=Os;for(Os=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function jh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $h(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ac(i),Wm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Fl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Kh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Kh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ys)||(n.globalVersion=Ys,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Fl(n))))return;n.flags|=2;const e=n.dep,t=rt,i=Hn;rt=n,Hn=!0;try{jh(n);const r=n.fn(n._value);(e.version===0||Bi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{rt=t,Hn=i,$h(n),n.flags&=-3}}function Ac(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ac(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Wm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Hn=!0;const Zh=[];function xi(){Zh.push(Hn),Hn=!1}function Mi(){const n=Zh.pop();Hn=n===void 0?!0:n}function Mu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=rt;rt=void 0;try{e()}finally{rt=t}}}let Ys=0;class Xm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!rt||!Hn||rt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==rt)t=this.activeLink=new Xm(rt,this),rt.deps?(t.prevDep=rt.depsTail,rt.depsTail.nextDep=t,rt.depsTail=t):rt.deps=rt.depsTail=t,Jh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=rt.depsTail,t.nextDep=void 0,rt.depsTail.nextDep=t,rt.depsTail=t,rt.deps===t&&(rt.deps=i)}return t}trigger(e){this.version++,Ys++,this.notify(e)}notify(e){Tc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bc()}}}function Jh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Jh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Bl=new WeakMap,pr=Symbol(""),zl=Symbol(""),js=Symbol("");function zt(n,e,t){if(Hn&&rt){let i=Bl.get(n);i||Bl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new wc),r.map=i,r.key=t),r.track()}}function _i(n,e,t,i,r,s){const o=Bl.get(n);if(!o){Ys++;return}const a=l=>{l&&l.trigger()};if(Tc(),e==="clear")o.forEach(a);else{const l=Ie(n),c=l&&yc(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===js||!$i(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(js)),e){case"add":l?c&&a(o.get("length")):(a(o.get(pr)),Jr(n)&&a(o.get(zl)));break;case"delete":l||(a(o.get(pr)),Jr(n)&&a(o.get(zl)));break;case"set":Jr(n)&&a(o.get(pr));break}}bc()}function wr(n){const e=Ke(n);return e===n?e:(zt(e,"iterate",js),Un(n)?e:e.map(Ut))}function ya(n){return zt(n=Ke(n),"iterate",js),n}const qm={__proto__:null,[Symbol.iterator](){return ka(this,Symbol.iterator,Ut)},concat(...n){return wr(this).concat(...n.map(e=>Ie(e)?wr(e):e))},entries(){return ka(this,"entries",n=>(n[1]=Ut(n[1]),n))},every(n,e){return ri(this,"every",n,e,void 0,arguments)},filter(n,e){return ri(this,"filter",n,e,t=>t.map(Ut),arguments)},find(n,e){return ri(this,"find",n,e,Ut,arguments)},findIndex(n,e){return ri(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ri(this,"findLast",n,e,Ut,arguments)},findLastIndex(n,e){return ri(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ri(this,"forEach",n,e,void 0,arguments)},includes(...n){return Wa(this,"includes",n)},indexOf(...n){return Wa(this,"indexOf",n)},join(n){return wr(this).join(n)},lastIndexOf(...n){return Wa(this,"lastIndexOf",n)},map(n,e){return ri(this,"map",n,e,void 0,arguments)},pop(){return Ts(this,"pop")},push(...n){return Ts(this,"push",n)},reduce(n,...e){return Su(this,"reduce",n,e)},reduceRight(n,...e){return Su(this,"reduceRight",n,e)},shift(){return Ts(this,"shift")},some(n,e){return ri(this,"some",n,e,void 0,arguments)},splice(...n){return Ts(this,"splice",n)},toReversed(){return wr(this).toReversed()},toSorted(n){return wr(this).toSorted(n)},toSpliced(...n){return wr(this).toSpliced(...n)},unshift(...n){return Ts(this,"unshift",n)},values(){return ka(this,"values",Ut)}};function ka(n,e,t){const i=ya(n),r=i[e]();return i!==n&&!Un(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Ym=Array.prototype;function ri(n,e,t,i,r,s){const o=ya(n),a=o!==n&&!Un(n),l=o[e];if(l!==Ym[e]){const f=l.apply(n,s);return a?Ut(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Ut(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Su(n,e,t,i){const r=ya(n);let s=t;return r!==n&&(Un(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Ut(a),l,n)}),r[e](s,...i)}function Wa(n,e,t){const i=Ke(n);zt(i,"iterate",js);const r=i[e](...t);return(r===-1||r===!1)&&Lc(t[0])?(t[0]=Ke(t[0]),i[e](...t)):r}function Ts(n,e,t=[]){xi(),Tc();const i=Ke(n)[e].apply(n,t);return bc(),Mi(),i}const jm=xc("__proto__,__v_isRef,__isVue"),Qh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter($i));function $m(n){$i(n)||(n=String(n));const e=Ke(this);return zt(e,"has",n),e.hasOwnProperty(n)}class ed{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?s_:rd:s?id:nd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ie(e);if(!r){let l;if(o&&(l=qm[t]))return l;if(t==="hasOwnProperty")return $m}const a=Reflect.get(e,t,Ht(e)?e:i);return($i(t)?Qh.has(t):jm(t))||(r||zt(e,"get",t),s)?a:Ht(a)?o&&yc(t)?a:a.value:ht(a)?r?sd(a):Cc(a):a}}class td extends ed{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Xi(s);if(!Un(i)&&!Xi(i)&&(s=Ke(s),i=Ke(i)),!Ie(e)&&Ht(s)&&!Ht(i))return l?!1:(s.value=i,!0)}const o=Ie(e)&&yc(t)?Number(t)<e.length:Ze(e,t),a=Reflect.set(e,t,i,Ht(e)?e:r);return e===Ke(r)&&(o?Bi(i,s)&&_i(e,"set",t,i):_i(e,"add",t,i)),a}deleteProperty(e,t){const i=Ze(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&_i(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!$i(t)||!Qh.has(t))&&zt(e,"has",t),i}ownKeys(e){return zt(e,"iterate",Ie(e)?"length":pr),Reflect.ownKeys(e)}}class Km extends ed{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Zm=new td,Jm=new Km,Qm=new td(!0);const Gl=n=>n,go=n=>Reflect.getPrototypeOf(n);function e_(n,e,t){return function(...i){const r=this.__v_raw,s=Ke(r),o=Jr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Gl:e?Qo:Ut;return!e&&zt(s,"iterate",l?zl:pr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function vo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function t_(n,e){const t={get(r){const s=this.__v_raw,o=Ke(s),a=Ke(r);n||(Bi(r,a)&&zt(o,"get",r),zt(o,"get",a));const{has:l}=go(o),c=e?Gl:n?Qo:Ut;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&zt(Ke(r),"iterate",pr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Ke(s),a=Ke(r);return n||(Bi(r,a)&&zt(o,"has",r),zt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Ke(a),c=e?Gl:n?Qo:Ut;return!n&&zt(l,"iterate",pr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Jt(t,n?{add:vo("add"),set:vo("set"),delete:vo("delete"),clear:vo("clear")}:{add(r){!e&&!Un(r)&&!Xi(r)&&(r=Ke(r));const s=Ke(this);return go(s).has.call(s,r)||(s.add(r),_i(s,"add",r,r)),this},set(r,s){!e&&!Un(s)&&!Xi(s)&&(s=Ke(s));const o=Ke(this),{has:a,get:l}=go(o);let c=a.call(o,r);c||(r=Ke(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Bi(s,u)&&_i(o,"set",r,s):_i(o,"add",r,s),this},delete(r){const s=Ke(this),{has:o,get:a}=go(s);let l=o.call(s,r);l||(r=Ke(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&_i(s,"delete",r,void 0),c},clear(){const r=Ke(this),s=r.size!==0,o=r.clear();return s&&_i(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=e_(r,n,e)}),t}function Rc(n,e){const t=t_(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ze(t,r)&&r in i?t:i,r,s)}const n_={get:Rc(!1,!1)},i_={get:Rc(!1,!0)},r_={get:Rc(!0,!1)};const nd=new WeakMap,id=new WeakMap,rd=new WeakMap,s_=new WeakMap;function o_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function a_(n){return n.__v_skip||!Object.isExtensible(n)?0:o_(Dm(n))}function Cc(n){return Xi(n)?n:Pc(n,!1,Zm,n_,nd)}function l_(n){return Pc(n,!1,Qm,i_,id)}function sd(n){return Pc(n,!0,Jm,r_,rd)}function Pc(n,e,t,i,r){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=a_(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Qr(n){return Xi(n)?Qr(n.__v_raw):!!(n&&n.__v_isReactive)}function Xi(n){return!!(n&&n.__v_isReadonly)}function Un(n){return!!(n&&n.__v_isShallow)}function Lc(n){return n?!!n.__v_raw:!1}function Ke(n){const e=n&&n.__v_raw;return e?Ke(e):n}function c_(n){return!Ze(n,"__v_skip")&&Object.isExtensible(n)&&Ol(n,"__v_skip",!0),n}const Ut=n=>ht(n)?Cc(n):n,Qo=n=>ht(n)?sd(n):n;function Ht(n){return n?n.__v_isRef===!0:!1}function Bs(n){return u_(n,!1)}function u_(n,e){return Ht(n)?n:new f_(n,e)}class f_{constructor(e,t){this.dep=new wc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ke(e),this._value=t?e:Ut(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Un(e)||Xi(e);e=i?e:Ke(e),Bi(e,t)&&(this._rawValue=e,this._value=i?e:Ut(e),this.dep.trigger())}}function fi(n){return Ht(n)?n.value:n}const h_={get:(n,e,t)=>e==="__v_raw"?n:fi(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ht(r)&&!Ht(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function od(n){return Qr(n)?n:new Proxy(n,h_)}class d_{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new wc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ys-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&rt!==this)return Yh(this,!0),!0}get value(){const e=this.dep.track();return Kh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function p_(n,e,t=!1){let i,r;return ze(n)?i=n:(i=n.get,r=n.set),new d_(i,r,t)}const xo={},ea=new WeakMap;let ar;function m_(n,e=!1,t=ar){if(t){let i=ea.get(t);i||ea.set(t,i=[]),i.push(n)}}function __(n,e,t=st){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:Un(S)||r===!1||r===0?Di(S,1):Di(S);let u,f,h,_,g=!1,p=!1;if(Ht(n)?(f=()=>n.value,g=Un(n)):Qr(n)?(f=()=>c(n),g=!0):Ie(n)?(p=!0,g=n.some(S=>Qr(S)||Un(S)),f=()=>n.map(S=>{if(Ht(S))return S.value;if(Qr(S))return c(S);if(ze(S))return l?l(S,2):S()})):ze(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){xi();try{h()}finally{Mi()}}const S=ar;ar=u;try{return l?l(n,3,[_]):n(_)}finally{ar=S}}:f=Qn,e&&r){const S=f,R=r===!0?1/0:r;f=()=>Di(S(),R)}const m=km(),d=()=>{u.stop(),m&&m.active&&Sc(m.effects,u)};if(s&&e){const S=e;e=(...R)=>{S(...R),d()}}let y=p?new Array(n.length).fill(xo):xo;const v=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const R=u.run();if(r||g||(p?R.some((w,A)=>Bi(w,y[A])):Bi(R,y))){h&&h();const w=ar;ar=u;try{const A=[R,y===xo?void 0:p&&y[0]===xo?[]:y,_];y=R,l?l(e,3,A):e(...A)}finally{ar=w}}}else u.run()};return a&&a(v),u=new Xh(f),u.scheduler=o?()=>o(v,!1):v,_=S=>m_(S,!1,u),h=u.onStop=()=>{const S=ea.get(u);if(S){if(l)l(S,4);else for(const R of S)R();ea.delete(u)}},e?i?v(!0):y=u.run():o?o(v.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Di(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ht(n))Di(n.value,e,t);else if(Ie(n))for(let i=0;i<n.length;i++)Di(n[i],e,t);else if(Fh(n)||Jr(n))n.forEach(i=>{Di(i,e,t)});else if(Gh(n)){for(const i in n)Di(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Di(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lo(n,e,t,i){try{return i?n(...i):n()}catch(r){Ea(r,e,t)}}function ti(n,e,t,i){if(ze(n)){const r=lo(n,e,t,i);return r&&Bh(r)&&r.catch(s=>{Ea(s,e,t)}),r}if(Ie(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ti(n[s],e,t,i));return r}}function Ea(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||st;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){xi(),lo(s,null,10,[n,l,c]),Mi();return}}g_(n,t,r,i,o)}function g_(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const $t=[];let qn=-1;const es=[];let Pi=null,Xr=0;const ad=Promise.resolve();let ta=null;function v_(n){const e=ta||ad;return n?e.then(this?n.bind(this):n):e}function x_(n){let e=qn+1,t=$t.length;for(;e<t;){const i=e+t>>>1,r=$t[i],s=$s(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Dc(n){if(!(n.flags&1)){const e=$s(n),t=$t[$t.length-1];!t||!(n.flags&2)&&e>=$s(t)?$t.push(n):$t.splice(x_(e),0,n),n.flags|=1,ld()}}function ld(){ta||(ta=ad.then(ud))}function M_(n){Ie(n)?es.push(...n):Pi&&n.id===-1?Pi.splice(Xr+1,0,n):n.flags&1||(es.push(n),n.flags|=1),ld()}function yu(n,e,t=qn+1){for(;t<$t.length;t++){const i=$t[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;$t.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function cd(n){if(es.length){const e=[...new Set(es)].sort((t,i)=>$s(t)-$s(i));if(es.length=0,Pi){Pi.push(...e);return}for(Pi=e,Xr=0;Xr<Pi.length;Xr++){const t=Pi[Xr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Pi=null,Xr=0}}const $s=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ud(n){try{for(qn=0;qn<$t.length;qn++){const e=$t[qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),lo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qn<$t.length;qn++){const e=$t[qn];e&&(e.flags&=-2)}qn=-1,$t.length=0,cd(),ta=null,($t.length||es.length)&&ud()}}let Zn=null,fd=null;function na(n){const e=Zn;return Zn=n,fd=n&&n.type.__scopeId||null,e}function S_(n,e=Zn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Lu(-1);const s=na(e);let o;try{o=n(...r)}finally{na(s),i._d&&Lu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Qi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(xi(),ti(l,t,8,[n.el,a,n,e]),Mi())}}const y_=Symbol("_vte"),E_=n=>n.__isTeleport;function Uc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Uc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function hd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function zs(n,e,t,i,r=!1){if(Ie(n)){n.forEach((g,p)=>zs(g,e&&(Ie(e)?e[p]:e),t,i,r));return}if(Gs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&zs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Fc(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===st?a.refs={}:a.refs,f=a.setupState,h=Ke(f),_=f===st?()=>!1:g=>Ze(h,g);if(c!=null&&c!==l&&(Et(c)?(u[c]=null,_(c)&&(f[c]=null)):Ht(c)&&(c.value=null)),ze(l))lo(l,a,12,[o,u]);else{const g=Et(l),p=Ht(l);if(g||p){const m=()=>{if(n.f){const d=g?_(l)?f[l]:u[l]:l.value;r?Ie(d)&&Sc(d,s):Ie(d)?d.includes(s)||d.push(s):g?(u[l]=[s],_(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,_(l)&&(f[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,pn(m,t)):m()}}}Sa().requestIdleCallback;Sa().cancelIdleCallback;const Gs=n=>!!n.type.__asyncLoader,dd=n=>n.type.__isKeepAlive;function T_(n,e){pd(n,"a",e)}function b_(n,e){pd(n,"da",e)}function pd(n,e,t=Kt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ta(e,i,t),t){let r=t.parent;for(;r&&r.parent;)dd(r.parent.vnode)&&A_(i,e,t,r),r=r.parent}}function A_(n,e,t,i){const r=Ta(e,n,i,!0);md(()=>{Sc(i[e],r)},t)}function Ta(n,e,t=Kt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{xi();const a=co(t),l=ti(e,t,n,o);return a(),Mi(),l});return i?r.unshift(s):r.push(s),s}}const Ti=n=>(e,t=Kt)=>{(!Js||n==="sp")&&Ta(n,(...i)=>e(...i),t)},w_=Ti("bm"),Ks=Ti("m"),R_=Ti("bu"),C_=Ti("u"),P_=Ti("bum"),md=Ti("um"),L_=Ti("sp"),D_=Ti("rtg"),U_=Ti("rtc");function I_(n,e=Kt){Ta("ec",n,e)}const N_=Symbol.for("v-ndc");function si(n,e,t,i){let r;const s=t,o=Ie(n);if(o||Et(n)){const a=o&&Qr(n);let l=!1,c=!1;a&&(l=!Un(n),c=Xi(n),n=ya(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Qo(Ut(n[u])):Ut(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ht(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Hl=n=>n?Nd(n)?Fc(n):Hl(n.parent):null,Hs=Jt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Hl(n.parent),$root:n=>Hl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>gd(n),$forceUpdate:n=>n.f||(n.f=()=>{Dc(n.update)}),$nextTick:n=>n.n||(n.n=v_.bind(n.proxy)),$watch:n=>ig.bind(n)}),Xa=(n,e)=>n!==st&&!n.__isScriptSetup&&Ze(n,e),O_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Xa(i,e))return o[e]=1,i[e];if(r!==st&&Ze(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ze(c,e))return o[e]=3,s[e];if(t!==st&&Ze(t,e))return o[e]=4,t[e];Vl&&(o[e]=0)}}const u=Hs[e];let f,h;if(u)return e==="$attrs"&&zt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==st&&Ze(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ze(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Xa(r,e)?(r[e]=t,!0):i!==st&&Ze(i,e)?(i[e]=t,!0):Ze(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==st&&Ze(n,o)||Xa(e,o)||(a=s[0])&&Ze(a,o)||Ze(i,o)||Ze(Hs,o)||Ze(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ze(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Eu(n){return Ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Vl=!0;function F_(n){const e=gd(n),t=n.proxy,i=n.ctx;Vl=!1,e.beforeCreate&&Tu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:_,updated:g,activated:p,deactivated:m,beforeDestroy:d,beforeUnmount:y,destroyed:v,unmounted:S,render:R,renderTracked:w,renderTriggered:A,errorCaptured:L,serverPrefetch:M,expose:b,inheritAttrs:F,components:G,directives:ee,filters:U}=e;if(c&&B_(c,i,null),o)for(const Y in o){const q=o[Y];ze(q)&&(i[Y]=q.bind(t))}if(r){const Y=r.call(t,t);ht(Y)&&(n.data=Cc(Y))}if(Vl=!0,s)for(const Y in s){const q=s[Y],te=ze(q)?q.bind(t,t):ze(q.get)?q.get.bind(t,t):Qn,ie=!ze(q)&&ze(q.set)?q.set.bind(t):Qn,ce=wg({get:te,set:ie});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>ce.value,set:le=>ce.value=le})}if(a)for(const Y in a)_d(a[Y],i,t,Y);if(l){const Y=ze(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(q=>{W_(q,Y[q])})}u&&Tu(u,n,"c");function H(Y,q){Ie(q)?q.forEach(te=>Y(te.bind(t))):q&&Y(q.bind(t))}if(H(w_,f),H(Ks,h),H(R_,_),H(C_,g),H(T_,p),H(b_,m),H(I_,L),H(U_,w),H(D_,A),H(P_,y),H(md,S),H(L_,M),Ie(b))if(b.length){const Y=n.exposed||(n.exposed={});b.forEach(q=>{Object.defineProperty(Y,q,{get:()=>t[q],set:te=>t[q]=te,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Qn&&(n.render=R),F!=null&&(n.inheritAttrs=F),G&&(n.components=G),ee&&(n.directives=ee),M&&hd(n)}function B_(n,e,t=Qn){Ie(n)&&(n=kl(n));for(const i in n){const r=n[i];let s;ht(r)?"default"in r?s=Xo(r.from||i,r.default,!0):s=Xo(r.from||i):s=Xo(r),Ht(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Tu(n,e,t){ti(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function _d(n,e,t,i){let r=i.includes(".")?Pd(t,i):()=>t[i];if(Et(n)){const s=e[n];ze(s)&&Ya(r,s)}else if(ze(n))Ya(r,n.bind(t));else if(ht(n))if(Ie(n))n.forEach(s=>_d(s,e,t,i));else{const s=ze(n.handler)?n.handler.bind(t):e[n.handler];ze(s)&&Ya(r,s,n)}}function gd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ia(l,c,o,!0)),ia(l,e,o)),ht(e)&&s.set(e,l),l}function ia(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ia(n,s,t,!0),r&&r.forEach(o=>ia(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=z_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const z_={data:bu,props:Au,emits:Au,methods:Ds,computed:Ds,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:Ds,directives:Ds,watch:H_,provide:bu,inject:G_};function bu(n,e){return e?n?function(){return Jt(ze(n)?n.call(this,this):n,ze(e)?e.call(this,this):e)}:e:n}function G_(n,e){return Ds(kl(n),kl(e))}function kl(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function qt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ds(n,e){return n?Jt(Object.create(null),n,e):e}function Au(n,e){return n?Ie(n)&&Ie(e)?[...new Set([...n,...e])]:Jt(Object.create(null),Eu(n),Eu(e??{})):e}function H_(n,e){if(!n)return e;if(!e)return n;const t=Jt(Object.create(null),n);for(const i in e)t[i]=qt(n[i],e[i]);return t}function vd(){return{app:null,config:{isNativeTag:Pm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let V_=0;function k_(n,e){return function(i,r=null){ze(i)||(i=Jt({},i)),r!=null&&!ht(r)&&(r=null);const s=vd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:V_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Rg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ze(u.install)?(o.add(u),u.install(c,...f)):ze(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const _=c._ceVNode||ei(i,r);return _.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(_,u,h),l=!0,c._container=u,u.__vue_app__=c,Fc(_.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ti(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ts;ts=c;try{return u()}finally{ts=f}}};return c}}let ts=null;function W_(n,e){if(Kt){let t=Kt.provides;const i=Kt.parent&&Kt.parent.provides;i===t&&(t=Kt.provides=Object.create(i)),t[n]=e}}function Xo(n,e,t=!1){const i=Sg();if(i||ts){let r=ts?ts._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ze(e)?e.call(i&&i.proxy):e}}const xd={},Md=()=>Object.create(xd),Sd=n=>Object.getPrototypeOf(n)===xd;function X_(n,e,t,i=!1){const r={},s=Md();n.propsDefaults=Object.create(null),yd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:l_(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function q_(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ke(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ba(n.emitsOptions,h))continue;const _=e[h];if(l)if(Ze(s,h))_!==s[h]&&(s[h]=_,c=!0);else{const g=Wi(h);r[g]=Wl(l,a,g,_,n,!1)}else _!==s[h]&&(s[h]=_,c=!0)}}}else{yd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ze(e,f)&&((u=br(f))===f||!Ze(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Wl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ze(e,f))&&(delete s[f],c=!0)}c&&_i(n.attrs,"set","")}function yd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ns(l))continue;const c=e[l];let u;r&&Ze(r,u=Wi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ba(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ke(t),c=a||st;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Wl(r,l,f,c[f],n,!Ze(c,f))}}return o}function Wl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ze(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ze(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=co(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===br(t))&&(i=!0))}return i}const Y_=new WeakMap;function Ed(n,e,t=!1){const i=t?Y_:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ze(n)){const u=f=>{l=!0;const[h,_]=Ed(f,e,!0);Jt(o,h),_&&a.push(..._)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ht(n)&&i.set(n,Zr),Zr;if(Ie(s))for(let u=0;u<s.length;u++){const f=Wi(s[u]);wu(f)&&(o[f]=st)}else if(s)for(const u in s){const f=Wi(u);if(wu(f)){const h=s[u],_=o[f]=Ie(h)||ze(h)?{type:h}:Jt({},h),g=_.type;let p=!1,m=!0;if(Ie(g))for(let d=0;d<g.length;++d){const y=g[d],v=ze(y)&&y.name;if(v==="Boolean"){p=!0;break}else v==="String"&&(m=!1)}else p=ze(g)&&g.name==="Boolean";_[0]=p,_[1]=m,(p||Ze(_,"default"))&&a.push(f)}}const c=[o,a];return ht(n)&&i.set(n,c),c}function wu(n){return n[0]!=="$"&&!Ns(n)}const Ic=n=>n==="_"||n==="__"||n==="_ctx"||n==="$stable",Nc=n=>Ie(n)?n.map(jn):[jn(n)],j_=(n,e,t)=>{if(e._n)return e;const i=S_((...r)=>Nc(e(...r)),t);return i._c=!1,i},Td=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ic(r))continue;const s=n[r];if(ze(s))e[r]=j_(r,s,i);else if(s!=null){const o=Nc(s);e[r]=()=>o}}},bd=(n,e)=>{const t=Nc(e);n.slots.default=()=>t},Ad=(n,e,t)=>{for(const i in e)(t||!Ic(i))&&(n[i]=e[i])},$_=(n,e,t)=>{const i=n.slots=Md();if(n.vnode.shapeFlag&32){const r=e.__;r&&Ol(i,"__",r,!0);const s=e._;s?(Ad(i,e,t),t&&Ol(i,"_",s,!0)):Td(e,i)}else e&&bd(n,e)},K_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=st;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Ad(r,e,t):(s=!e.$stable,Td(e,r)),o=e}else e&&(bd(n,e),o={default:1});if(s)for(const a in r)!Ic(a)&&o[a]==null&&delete r[a]},pn=ug;function Z_(n){return J_(n)}function J_(n,e){const t=Sa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:_=Qn,insertStaticContent:g}=n,p=(E,D,N,K=null,V=null,Q=null,ne=void 0,T=null,x=!!D.dynamicChildren)=>{if(E===D)return;E&&!bs(E,D)&&(K=Se(E),le(E,V,Q,!0),E=null),D.patchFlag===-2&&(x=!1,D.dynamicChildren=null);const{type:P,ref:W,shapeFlag:O}=D;switch(P){case Aa:m(E,D,N,K);break;case as:d(E,D,N,K);break;case qo:E==null&&y(D,N,K,ne);break;case Tt:G(E,D,N,K,V,Q,ne,T,x);break;default:O&1?R(E,D,N,K,V,Q,ne,T,x):O&6?ee(E,D,N,K,V,Q,ne,T,x):(O&64||O&128)&&P.process(E,D,N,K,V,Q,ne,T,x,be)}W!=null&&V?zs(W,E&&E.ref,Q,D||E,!D):W==null&&E&&E.ref!=null&&zs(E.ref,null,Q,E,!0)},m=(E,D,N,K)=>{if(E==null)i(D.el=a(D.children),N,K);else{const V=D.el=E.el;D.children!==E.children&&c(V,D.children)}},d=(E,D,N,K)=>{E==null?i(D.el=l(D.children||""),N,K):D.el=E.el},y=(E,D,N,K)=>{[E.el,E.anchor]=g(E.children,D,N,K,E.el,E.anchor)},v=({el:E,anchor:D},N,K)=>{let V;for(;E&&E!==D;)V=h(E),i(E,N,K),E=V;i(D,N,K)},S=({el:E,anchor:D})=>{let N;for(;E&&E!==D;)N=h(E),r(E),E=N;r(D)},R=(E,D,N,K,V,Q,ne,T,x)=>{D.type==="svg"?ne="svg":D.type==="math"&&(ne="mathml"),E==null?w(D,N,K,V,Q,ne,T,x):M(E,D,V,Q,ne,T,x)},w=(E,D,N,K,V,Q,ne,T)=>{let x,P;const{props:W,shapeFlag:O,transition:X,dirs:ae}=E;if(x=E.el=o(E.type,Q,W&&W.is,W),O&8?u(x,E.children):O&16&&L(E.children,x,null,K,V,qa(E,Q),ne,T),ae&&Qi(E,null,K,"created"),A(x,E,E.scopeId,ne,K),W){for(const ue in W)ue!=="value"&&!Ns(ue)&&s(x,ue,null,W[ue],Q,K);"value"in W&&s(x,"value",null,W.value,Q),(P=W.onVnodeBeforeMount)&&Xn(P,K,E)}ae&&Qi(E,null,K,"beforeMount");const oe=Q_(V,X);oe&&X.beforeEnter(x),i(x,D,N),((P=W&&W.onVnodeMounted)||oe||ae)&&pn(()=>{P&&Xn(P,K,E),oe&&X.enter(x),ae&&Qi(E,null,K,"mounted")},V)},A=(E,D,N,K,V)=>{if(N&&_(E,N),K)for(let Q=0;Q<K.length;Q++)_(E,K[Q]);if(V){let Q=V.subTree;if(D===Q||Dd(Q.type)&&(Q.ssContent===D||Q.ssFallback===D)){const ne=V.vnode;A(E,ne,ne.scopeId,ne.slotScopeIds,V.parent)}}},L=(E,D,N,K,V,Q,ne,T,x=0)=>{for(let P=x;P<E.length;P++){const W=E[P]=T?Li(E[P]):jn(E[P]);p(null,W,D,N,K,V,Q,ne,T)}},M=(E,D,N,K,V,Q,ne)=>{const T=D.el=E.el;let{patchFlag:x,dynamicChildren:P,dirs:W}=D;x|=E.patchFlag&16;const O=E.props||st,X=D.props||st;let ae;if(N&&er(N,!1),(ae=X.onVnodeBeforeUpdate)&&Xn(ae,N,D,E),W&&Qi(D,E,N,"beforeUpdate"),N&&er(N,!0),(O.innerHTML&&X.innerHTML==null||O.textContent&&X.textContent==null)&&u(T,""),P?b(E.dynamicChildren,P,T,N,K,qa(D,V),Q):ne||q(E,D,T,null,N,K,qa(D,V),Q,!1),x>0){if(x&16)F(T,O,X,N,V);else if(x&2&&O.class!==X.class&&s(T,"class",null,X.class,V),x&4&&s(T,"style",O.style,X.style,V),x&8){const oe=D.dynamicProps;for(let ue=0;ue<oe.length;ue++){const pe=oe[ue],Ee=O[pe],re=X[pe];(re!==Ee||pe==="value")&&s(T,pe,Ee,re,V,N)}}x&1&&E.children!==D.children&&u(T,D.children)}else!ne&&P==null&&F(T,O,X,N,V);((ae=X.onVnodeUpdated)||W)&&pn(()=>{ae&&Xn(ae,N,D,E),W&&Qi(D,E,N,"updated")},K)},b=(E,D,N,K,V,Q,ne)=>{for(let T=0;T<D.length;T++){const x=E[T],P=D[T],W=x.el&&(x.type===Tt||!bs(x,P)||x.shapeFlag&198)?f(x.el):N;p(x,P,W,null,K,V,Q,ne,!0)}},F=(E,D,N,K,V)=>{if(D!==N){if(D!==st)for(const Q in D)!Ns(Q)&&!(Q in N)&&s(E,Q,D[Q],null,V,K);for(const Q in N){if(Ns(Q))continue;const ne=N[Q],T=D[Q];ne!==T&&Q!=="value"&&s(E,Q,T,ne,V,K)}"value"in N&&s(E,"value",D.value,N.value,V)}},G=(E,D,N,K,V,Q,ne,T,x)=>{const P=D.el=E?E.el:a(""),W=D.anchor=E?E.anchor:a("");let{patchFlag:O,dynamicChildren:X,slotScopeIds:ae}=D;ae&&(T=T?T.concat(ae):ae),E==null?(i(P,N,K),i(W,N,K),L(D.children||[],N,W,V,Q,ne,T,x)):O>0&&O&64&&X&&E.dynamicChildren?(b(E.dynamicChildren,X,N,V,Q,ne,T),(D.key!=null||V&&D===V.subTree)&&wd(E,D,!0)):q(E,D,N,W,V,Q,ne,T,x)},ee=(E,D,N,K,V,Q,ne,T,x)=>{D.slotScopeIds=T,E==null?D.shapeFlag&512?V.ctx.activate(D,N,K,ne,x):U(D,N,K,V,Q,ne,x):z(E,D,x)},U=(E,D,N,K,V,Q,ne)=>{const T=E.component=Mg(E,K,V);if(dd(E)&&(T.ctx.renderer=be),yg(T,!1,ne),T.asyncDep){if(V&&V.registerDep(T,H,ne),!E.el){const x=T.subTree=ei(as);d(null,x,D,N),E.placeholder=x.el}}else H(T,E,D,N,V,Q,ne)},z=(E,D,N)=>{const K=D.component=E.component;if(lg(E,D,N))if(K.asyncDep&&!K.asyncResolved){Y(K,D,N);return}else K.next=D,K.update();else D.el=E.el,K.vnode=D},H=(E,D,N,K,V,Q,ne)=>{const T=()=>{if(E.isMounted){let{next:O,bu:X,u:ae,parent:oe,vnode:ue}=E;{const Ce=Rd(E);if(Ce){O&&(O.el=ue.el,Y(E,O,ne)),Ce.asyncDep.then(()=>{E.isUnmounted||T()});return}}let pe=O,Ee;er(E,!1),O?(O.el=ue.el,Y(E,O,ne)):O=ue,X&&Ga(X),(Ee=O.props&&O.props.onVnodeBeforeUpdate)&&Xn(Ee,oe,O,ue),er(E,!0);const re=Cu(E),Ge=E.subTree;E.subTree=re,p(Ge,re,f(Ge.el),Se(Ge),E,V,Q),O.el=re.el,pe===null&&cg(E,re.el),ae&&pn(ae,V),(Ee=O.props&&O.props.onVnodeUpdated)&&pn(()=>Xn(Ee,oe,O,ue),V)}else{let O;const{el:X,props:ae}=D,{bm:oe,m:ue,parent:pe,root:Ee,type:re}=E,Ge=Gs(D);er(E,!1),oe&&Ga(oe),!Ge&&(O=ae&&ae.onVnodeBeforeMount)&&Xn(O,pe,D),er(E,!0);{Ee.ce&&Ee.ce._def.shadowRoot!==!1&&Ee.ce._injectChildStyle(re);const Ce=E.subTree=Cu(E);p(null,Ce,N,K,E,V,Q),D.el=Ce.el}if(ue&&pn(ue,V),!Ge&&(O=ae&&ae.onVnodeMounted)){const Ce=D;pn(()=>Xn(O,pe,Ce),V)}(D.shapeFlag&256||pe&&Gs(pe.vnode)&&pe.vnode.shapeFlag&256)&&E.a&&pn(E.a,V),E.isMounted=!0,D=N=K=null}};E.scope.on();const x=E.effect=new Xh(T);E.scope.off();const P=E.update=x.run.bind(x),W=E.job=x.runIfDirty.bind(x);W.i=E,W.id=E.uid,x.scheduler=()=>Dc(W),er(E,!0),P()},Y=(E,D,N)=>{D.component=E;const K=E.vnode.props;E.vnode=D,E.next=null,q_(E,D.props,K,N),K_(E,D.children,N),xi(),yu(E),Mi()},q=(E,D,N,K,V,Q,ne,T,x=!1)=>{const P=E&&E.children,W=E?E.shapeFlag:0,O=D.children,{patchFlag:X,shapeFlag:ae}=D;if(X>0){if(X&128){ie(P,O,N,K,V,Q,ne,T,x);return}else if(X&256){te(P,O,N,K,V,Q,ne,T,x);return}}ae&8?(W&16&&Me(P,V,Q),O!==P&&u(N,O)):W&16?ae&16?ie(P,O,N,K,V,Q,ne,T,x):Me(P,V,Q,!0):(W&8&&u(N,""),ae&16&&L(O,N,K,V,Q,ne,T,x))},te=(E,D,N,K,V,Q,ne,T,x)=>{E=E||Zr,D=D||Zr;const P=E.length,W=D.length,O=Math.min(P,W);let X;for(X=0;X<O;X++){const ae=D[X]=x?Li(D[X]):jn(D[X]);p(E[X],ae,N,null,V,Q,ne,T,x)}P>W?Me(E,V,Q,!0,!1,O):L(D,N,K,V,Q,ne,T,x,O)},ie=(E,D,N,K,V,Q,ne,T,x)=>{let P=0;const W=D.length;let O=E.length-1,X=W-1;for(;P<=O&&P<=X;){const ae=E[P],oe=D[P]=x?Li(D[P]):jn(D[P]);if(bs(ae,oe))p(ae,oe,N,null,V,Q,ne,T,x);else break;P++}for(;P<=O&&P<=X;){const ae=E[O],oe=D[X]=x?Li(D[X]):jn(D[X]);if(bs(ae,oe))p(ae,oe,N,null,V,Q,ne,T,x);else break;O--,X--}if(P>O){if(P<=X){const ae=X+1,oe=ae<W?D[ae].el:K;for(;P<=X;)p(null,D[P]=x?Li(D[P]):jn(D[P]),N,oe,V,Q,ne,T,x),P++}}else if(P>X)for(;P<=O;)le(E[P],V,Q,!0),P++;else{const ae=P,oe=P,ue=new Map;for(P=oe;P<=X;P++){const me=D[P]=x?Li(D[P]):jn(D[P]);me.key!=null&&ue.set(me.key,P)}let pe,Ee=0;const re=X-oe+1;let Ge=!1,Ce=0;const we=new Array(re);for(P=0;P<re;P++)we[P]=0;for(P=ae;P<=O;P++){const me=E[P];if(Ee>=re){le(me,V,Q,!0);continue}let Ae;if(me.key!=null)Ae=ue.get(me.key);else for(pe=oe;pe<=X;pe++)if(we[pe-oe]===0&&bs(me,D[pe])){Ae=pe;break}Ae===void 0?le(me,V,Q,!0):(we[Ae-oe]=P+1,Ae>=Ce?Ce=Ae:Ge=!0,p(me,D[Ae],N,null,V,Q,ne,T,x),Ee++)}const Te=Ge?eg(we):Zr;for(pe=Te.length-1,P=re-1;P>=0;P--){const me=oe+P,Ae=D[me],je=D[me+1],ot=me+1<W?je.el||je.placeholder:K;we[P]===0?p(null,Ae,N,ot,V,Q,ne,T,x):Ge&&(pe<0||P!==Te[pe]?ce(Ae,N,ot,2):pe--)}}},ce=(E,D,N,K,V=null)=>{const{el:Q,type:ne,transition:T,children:x,shapeFlag:P}=E;if(P&6){ce(E.component.subTree,D,N,K);return}if(P&128){E.suspense.move(D,N,K);return}if(P&64){ne.move(E,D,N,be);return}if(ne===Tt){i(Q,D,N);for(let O=0;O<x.length;O++)ce(x[O],D,N,K);i(E.anchor,D,N);return}if(ne===qo){v(E,D,N);return}if(K!==2&&P&1&&T)if(K===0)T.beforeEnter(Q),i(Q,D,N),pn(()=>T.enter(Q),V);else{const{leave:O,delayLeave:X,afterLeave:ae}=T,oe=()=>{E.ctx.isUnmounted?r(Q):i(Q,D,N)},ue=()=>{O(Q,()=>{oe(),ae&&ae()})};X?X(Q,oe,ue):ue()}else i(Q,D,N)},le=(E,D,N,K=!1,V=!1)=>{const{type:Q,props:ne,ref:T,children:x,dynamicChildren:P,shapeFlag:W,patchFlag:O,dirs:X,cacheIndex:ae}=E;if(O===-2&&(V=!1),T!=null&&(xi(),zs(T,null,N,E,!0),Mi()),ae!=null&&(D.renderCache[ae]=void 0),W&256){D.ctx.deactivate(E);return}const oe=W&1&&X,ue=!Gs(E);let pe;if(ue&&(pe=ne&&ne.onVnodeBeforeUnmount)&&Xn(pe,D,E),W&6)de(E.component,N,K);else{if(W&128){E.suspense.unmount(N,K);return}oe&&Qi(E,null,D,"beforeUnmount"),W&64?E.type.remove(E,D,N,be,K):P&&!P.hasOnce&&(Q!==Tt||O>0&&O&64)?Me(P,D,N,!1,!0):(Q===Tt&&O&384||!V&&W&16)&&Me(x,D,N),K&&J(E)}(ue&&(pe=ne&&ne.onVnodeUnmounted)||oe)&&pn(()=>{pe&&Xn(pe,D,E),oe&&Qi(E,null,D,"unmounted")},N)},J=E=>{const{type:D,el:N,anchor:K,transition:V}=E;if(D===Tt){se(N,K);return}if(D===qo){S(E);return}const Q=()=>{r(N),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(E.shapeFlag&1&&V&&!V.persisted){const{leave:ne,delayLeave:T}=V,x=()=>ne(N,Q);T?T(E.el,Q,x):x()}else Q()},se=(E,D)=>{let N;for(;E!==D;)N=h(E),r(E),E=N;r(D)},de=(E,D,N)=>{const{bum:K,scope:V,job:Q,subTree:ne,um:T,m:x,a:P,parent:W,slots:{__:O}}=E;Ru(x),Ru(P),K&&Ga(K),W&&Ie(O)&&O.forEach(X=>{W.renderCache[X]=void 0}),V.stop(),Q&&(Q.flags|=8,le(ne,E,D,N)),T&&pn(T,D),pn(()=>{E.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},Me=(E,D,N,K=!1,V=!1,Q=0)=>{for(let ne=Q;ne<E.length;ne++)le(E[ne],D,N,K,V)},Se=E=>{if(E.shapeFlag&6)return Se(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const D=h(E.anchor||E.el),N=D&&D[y_];return N?h(N):D};let De=!1;const Ne=(E,D,N)=>{E==null?D._vnode&&le(D._vnode,null,null,!0):p(D._vnode||null,E,D,null,null,null,N),D._vnode=E,De||(De=!0,yu(),cd(),De=!1)},be={p,um:le,m:ce,r:J,mt:U,mc:L,pc:q,pbc:b,n:Se,o:n};return{render:Ne,hydrate:void 0,createApp:k_(Ne)}}function qa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function er({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Q_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function wd(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Li(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&wd(o,a)),a.type===Aa&&(a.el=o.el),a.type===as&&!a.el&&(a.el=o.el)}}function eg(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Rd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rd(e)}function Ru(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const tg=Symbol.for("v-scx"),ng=()=>Xo(tg);function Ya(n,e,t){return Cd(n,e,t)}function Cd(n,e,t=st){const{immediate:i,deep:r,flush:s,once:o}=t,a=Jt({},t),l=e&&i||!e&&s!=="post";let c;if(Js){if(s==="sync"){const _=ng();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Qn,_.resume=Qn,_.pause=Qn,_}}const u=Kt;a.call=(_,g,p)=>ti(_,u,g,p);let f=!1;s==="post"?a.scheduler=_=>{pn(_,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(_,g)=>{g?_():Dc(_)}),a.augmentJob=_=>{e&&(_.flags|=4),f&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const h=__(n,e,a);return Js&&(c?c.push(h):l&&h()),h}function ig(n,e,t){const i=this.proxy,r=Et(n)?n.includes(".")?Pd(i,n):()=>i[n]:n.bind(i,i);let s;ze(e)?s=e:(s=e.handler,t=e);const o=co(this),a=Cd(r,s.bind(i),t);return o(),a}function Pd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const rg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Wi(e)}Modifiers`]||n[`${br(e)}Modifiers`];function sg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||st;let r=t;const s=e.startsWith("update:"),o=s&&rg(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Et(u)?u.trim():u)),o.number&&(r=t.map(Nm)));let a,l=i[a=za(e)]||i[a=za(Wi(e))];!l&&s&&(l=i[a=za(br(e))]),l&&ti(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ti(c,n,6,r)}}function Ld(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ze(n)){const l=c=>{const u=Ld(c,e,!0);u&&(a=!0,Jt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ht(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>o[l]=null):Jt(o,s),ht(n)&&i.set(n,o),o)}function ba(n,e){return!n||!va(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ze(n,e[0].toLowerCase()+e.slice(1))||Ze(n,br(e))||Ze(n,e))}function Cu(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:_,ctx:g,inheritAttrs:p}=n,m=na(n);let d,y;try{if(t.shapeFlag&4){const S=r||i,R=S;d=jn(c.call(R,S,u,f,_,h,g)),y=a}else{const S=e;d=jn(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),y=e.props?a:og(a)}}catch(S){Vs.length=0,Ea(S,n,1),d=ei(as)}let v=d;if(y&&p!==!1){const S=Object.keys(y),{shapeFlag:R}=v;S.length&&R&7&&(s&&S.some(Mc)&&(y=ag(y,s)),v=ls(v,y,!1,!0))}return t.dirs&&(v=ls(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&Uc(v,t.transition),d=v,na(m),d}const og=n=>{let e;for(const t in n)(t==="class"||t==="style"||va(t))&&((e||(e={}))[t]=n[t]);return e},ag=(n,e)=>{const t={};for(const i in n)(!Mc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function lg(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Pu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!ba(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Pu(i,o,c):!0:!!o;return!1}function Pu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ba(t,s))return!0}return!1}function cg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Dd=n=>n.__isSuspense;function ug(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):M_(n)}const Tt=Symbol.for("v-fgt"),Aa=Symbol.for("v-txt"),as=Symbol.for("v-cmt"),qo=Symbol.for("v-stc"),Vs=[];let vn=null;function _t(n=!1){Vs.push(vn=n?null:[])}function fg(){Vs.pop(),vn=Vs[Vs.length-1]||null}let Zs=1;function Lu(n,e=!1){Zs+=n,n<0&&vn&&e&&(vn.hasOnce=!0)}function hg(n){return n.dynamicChildren=Zs>0?vn||Zr:null,fg(),Zs>0&&vn&&vn.push(n),n}function gt(n,e,t,i,r,s){return hg(ve(n,e,t,i,r,s,!0))}function Ud(n){return n?n.__v_isVNode===!0:!1}function bs(n,e){return n.type===e.type&&n.key===e.key}const Id=({key:n})=>n??null,Yo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Et(n)||Ht(n)||ze(n)?{i:Zn,r:n,k:e,f:!!t}:n:null);function ve(n,e=null,t=null,i=0,r=null,s=n===Tt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Id(e),ref:e&&Yo(e),scopeId:fd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Zn};return a?(Oc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Et(t)?8:16),Zs>0&&!o&&vn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&vn.push(l),l}const ei=dg;function dg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===N_)&&(n=as),Ud(n)){const a=ls(n,e,!0);return t&&Oc(a,t),Zs>0&&!s&&vn&&(a.shapeFlag&6?vn[vn.indexOf(n)]=a:vn.push(a)),a.patchFlag=-2,a}if(Ag(n)&&(n=n.__vccOpts),e){e=pg(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=en(a)),ht(l)&&(Lc(l)&&!Ie(l)&&(l=Jt({},l)),e.style=Ec(l))}const o=Et(n)?1:Dd(n)?128:E_(n)?64:ht(n)?4:ze(n)?2:0;return ve(n,e,t,i,r,o,s,!0)}function pg(n){return n?Lc(n)||Sd(n)?Jt({},n):n:null}function ls(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?gg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Id(c),ref:e&&e.ref?t&&s?Ie(s)?s.concat(Yo(e)):[s,Yo(e)]:Yo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Tt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ls(n.ssContent),ssFallback:n.ssFallback&&ls(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Uc(u,l.clone(u)),u}function mg(n=" ",e=0){return ei(Aa,null,n,e)}function _g(n,e){const t=ei(qo,null,n);return t.staticCount=e,t}function jn(n){return n==null||typeof n=="boolean"?ei(as):Ie(n)?ei(Tt,null,n.slice()):Ud(n)?Li(n):ei(Aa,null,String(n))}function Li(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ls(n)}function Oc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Oc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Sd(e)?e._ctx=Zn:r===3&&Zn&&(Zn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:Zn},t=32):(e=String(e),i&64?(t=16,e=[mg(e)]):t=8);n.children=e,n.shapeFlag|=t}function gg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=en([e.class,i.class]));else if(r==="style")e.style=Ec([e.style,i.style]);else if(va(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Xn(n,e,t,i=null){ti(n,e,7,[t,i])}const vg=vd();let xg=0;function Mg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||vg,s={uid:xg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ed(i,r),emitsOptions:Ld(i,r),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=sg.bind(null,s),n.ce&&n.ce(s),s}let Kt=null;const Sg=()=>Kt||Zn;let ra,Xl;{const n=Sa(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ra=e("__VUE_INSTANCE_SETTERS__",t=>Kt=t),Xl=e("__VUE_SSR_SETTERS__",t=>Js=t)}const co=n=>{const e=Kt;return ra(n),n.scope.on(),()=>{n.scope.off(),ra(e)}},Du=()=>{Kt&&Kt.scope.off(),ra(null)};function Nd(n){return n.vnode.shapeFlag&4}let Js=!1;function yg(n,e=!1,t=!1){e&&Xl(e);const{props:i,children:r}=n.vnode,s=Nd(n);X_(n,i,s,e),$_(n,r,t||e);const o=s?Eg(n,e):void 0;return e&&Xl(!1),o}function Eg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,O_);const{setup:i}=t;if(i){xi();const r=n.setupContext=i.length>1?bg(n):null,s=co(n),o=lo(i,n,0,[n.props,r]),a=Bh(o);if(Mi(),s(),(a||n.sp)&&!Gs(n)&&hd(n),a){if(o.then(Du,Du),e)return o.then(l=>{Uu(n,l)}).catch(l=>{Ea(l,n,0)});n.asyncDep=o}else Uu(n,o)}else Od(n)}function Uu(n,e,t){ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=od(e)),Od(n)}function Od(n,e,t){const i=n.type;n.render||(n.render=i.render||Qn);{const r=co(n);xi();try{F_(n)}finally{Mi(),r()}}}const Tg={get(n,e){return zt(n,"get",""),n[e]}};function bg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Tg),slots:n.slots,emit:n.emit,expose:e}}function Fc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(od(c_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Hs)return Hs[t](n)},has(e,t){return t in e||t in Hs}})):n.proxy}function Ag(n){return ze(n)&&"__vccOpts"in n}const wg=(n,e)=>p_(n,e,Js),Rg="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ql;const Iu=typeof window<"u"&&window.trustedTypes;if(Iu)try{ql=Iu.createPolicy("vue",{createHTML:n=>n})}catch{}const Fd=ql?n=>ql.createHTML(n):n=>n,Cg="http://www.w3.org/2000/svg",Pg="http://www.w3.org/1998/Math/MathML",di=typeof document<"u"?document:null,Nu=di&&di.createElement("template"),Lg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?di.createElementNS(Cg,n):e==="mathml"?di.createElementNS(Pg,n):t?di.createElement(n,{is:t}):di.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>di.createTextNode(n),createComment:n=>di.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>di.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Nu.innerHTML=Fd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Nu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Dg=Symbol("_vtc");function Ug(n,e,t){const i=n[Dg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ou=Symbol("_vod"),Ig=Symbol("_vsh"),Ng=Symbol(""),Og=/(^|;)\s*display\s*:/;function Fg(n,e,t){const i=n.style,r=Et(t);let s=!1;if(t&&!r){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&jo(i,a,"")}else for(const o in e)t[o]==null&&jo(i,o,"");for(const o in t)o==="display"&&(s=!0),jo(i,o,t[o])}else if(r){if(e!==t){const o=i[Ng];o&&(t+=";"+o),i.cssText=t,s=Og.test(t)}}else e&&n.removeAttribute("style");Ou in n&&(n[Ou]=s?i.display:"",n[Ig]&&(i.display="none"))}const Fu=/\s*!important$/;function jo(n,e,t){if(Ie(t))t.forEach(i=>jo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Bg(n,e);Fu.test(t)?n.setProperty(br(i),t.replace(Fu,""),"important"):n[i]=t}}const Bu=["Webkit","Moz","ms"],ja={};function Bg(n,e){const t=ja[e];if(t)return t;let i=Wi(e);if(i!=="filter"&&i in n)return ja[e]=i;i=Hh(i);for(let r=0;r<Bu.length;r++){const s=Bu[r]+i;if(s in n)return ja[e]=s}return e}const zu="http://www.w3.org/1999/xlink";function Gu(n,e,t,i,r,s=Hm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(zu,e.slice(6,e.length)):n.setAttributeNS(zu,e,t):t==null||s&&!Vh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":$i(t)?String(t):t)}function Hu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Fd(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Vh(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function zg(n,e,t,i){n.addEventListener(e,t,i)}function Gg(n,e,t,i){n.removeEventListener(e,t,i)}const Vu=Symbol("_vei");function Hg(n,e,t,i,r=null){const s=n[Vu]||(n[Vu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Vg(e);if(i){const c=s[e]=Xg(i,r);zg(n,a,c,l)}else o&&(Gg(n,a,o,l),s[e]=void 0)}}const ku=/(?:Once|Passive|Capture)$/;function Vg(n){let e;if(ku.test(n)){e={};let i;for(;i=n.match(ku);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):br(n.slice(2)),e]}let $a=0;const kg=Promise.resolve(),Wg=()=>$a||(kg.then(()=>$a=0),$a=Date.now());function Xg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ti(qg(i,t.value),e,5,[i])};return t.value=n,t.attached=Wg(),t}function qg(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Wu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Yg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Ug(n,i,o):e==="style"?Fg(n,t,i):va(e)?Mc(e)||Hg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jg(n,e,i,o))?(Hu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gu(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Et(i))?Hu(n,Wi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Gu(n,e,i,o))};function jg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Wu(e)&&ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Wu(e)&&Et(t)?!1:e in n}const $g=Jt({patchProp:Yg},Lg);let Xu;function Kg(){return Xu||(Xu=Z_($g))}const Zg=(...n)=>{const e=Kg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Qg(i);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Jg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Jg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Qg(n){return Et(n)?document.querySelector(n):n}const e0="modulepreload",t0=function(n){return"/"+n},qu={},n0=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=t0(l),l in qu)return;qu[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":e0,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,_)=>{f.addEventListener("load",h),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function pi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Bd(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},cs={duration:.5,overwrite:!1,delay:0},Bc,It,lt,Pn=1e8,et=1/Pn,Yl=Math.PI*2,i0=Yl/4,r0=0,zd=Math.sqrt,s0=Math.cos,o0=Math.sin,Lt=function(e){return typeof e=="string"},pt=function(e){return typeof e=="function"},Si=function(e){return typeof e=="number"},zc=function(e){return typeof e>"u"},ni=function(e){return typeof e=="object"},rn=function(e){return e!==!1},Gc=function(){return typeof window<"u"},Mo=function(e){return pt(e)||Lt(e)},Gd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,jl=/(?:-?\.?\d|\.)+/gi,Hd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ka=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vd=/[+-]=-?[.\d]+/,kd=/[^,'"\[\]\s]+/gi,a0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,Yn,$l,Hc,En={},sa={},Wd,Xd=function(e){return(sa=us(e,En))&&cn},Vc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Qs=function(e,t){return!t&&console.warn(e)},qd=function(e,t){return e&&(En[e]=t)&&sa&&(sa[e]=t)||En},eo=function(){return 0},l0={suppressEvents:!0,isStart:!0,kill:!1},$o={suppressEvents:!0,kill:!1},c0={suppressEvents:!0},kc={},zi=[],Kl={},Yd,mn={},Za={},Yu=30,Ko=[],Wc="",Xc=function(e){var t=e[0],i,r;if(ni(t)||pt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Ko.length;r--&&!Ko[r].targetTest(t););i=Ko[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new gp(e[r],i)))||e.splice(r,1);return e},mr=function(e){return e._gsap||Xc(Ln(e))[0]._gsap},jd=function(e,t,i){return(i=e[t])&&pt(i)?e[t]():zc(i)&&e.getAttribute&&e.getAttribute(t)||i},sn=function(e,t){return(e=e.split(",")).forEach(t)||e},vt=function(e){return Math.round(e*1e5)/1e5||0},St=function(e){return Math.round(e*1e7)/1e7||0},ns=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},u0=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},oa=function(){var e=zi.length,t=zi.slice(0),i,r;for(Kl={},zi.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},qc=function(e){return!!(e._initted||e._startAt||e.add)},$d=function(e,t,i,r){zi.length&&!It&&oa(),e.render(t,i,!!(It&&t<0&&qc(e))),zi.length&&!It&&oa()},Kd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(kd).length<2?t:Lt(e)?e.trim():e},Zd=function(e){return e},Tn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},f0=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},us=function(e,t){for(var i in t)e[i]=t[i];return e},ju=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ni(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},aa=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},ks=function(e){var t=e.parent||ut,i=e.keyframes?f0(Vt(e.keyframes)):Tn;if(rn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},h0=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Jd=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},wa=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},qi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_r=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},d0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zl=function(e,t,i,r){return e._startAt&&(It?e._startAt.revert($o):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},p0=function n(e){return!e||e._ts&&n(e.parent)},$u=function(e){return e._repeat?fs(e._tTime,e=e.duration()+e._rDelay)*e:0},fs=function(e,t){var i=Math.floor(e=St(e/t));return e&&i===e?i-1:i},la=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ra=function(e){return e._end=St(e._start+(e._tDur/Math.abs(e._ts||e._rts||et)||0))},Ca=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=St(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ra(e),i._dirty||_r(i,e)),e},Qd=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=la(e.rawTime(),t),(!t._dur||uo(0,t.totalDuration(),i)-t._tTime>et)&&t.render(i,!0)),_r(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-et}},Kn=function(e,t,i,r){return t.parent&&qi(t),t._start=St((Si(i)?i:i||e!==ut?wn(e,i,t):e._time)+t._delay),t._end=St(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Jd(e,t,"_first","_last",e._sort?"_start":0),Jl(t)||(e._recent=t),r||Qd(e,t),e._ts<0&&Ca(e,e._tTime),e},ep=function(e,t){return(En.ScrollTrigger||Vc("scrollTrigger",t))&&En.ScrollTrigger.create(t,e)},tp=function(e,t,i,r,s){if(jc(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!It&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Yd!==gn.frame)return zi.push(e),e._lazy=[s,r],1},m0=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Jl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},_0=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&m0(e)&&!(!e._initted&&Jl(e))||(e._ts<0||e._dp._ts<0)&&!Jl(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=uo(0,e._tDur,t),u=fs(l,a),e._yoyo&&u&1&&(o=1-o),u!==fs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||It||r||e._zTime===et||!t&&e._zTime){if(!e._initted&&tp(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?et:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Zl(e,t,i,!0),e._onUpdate&&!i&&xn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&xn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&qi(e,1),!i&&!It&&(xn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},g0=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},hs=function(e,t,i,r){var s=e._repeat,o=St(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:St(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ca(e,e._tTime=e._tDur*a),e.parent&&Ra(e),i||_r(e.parent,e),e},Ku=function(e){return e instanceof Zt?_r(e):hs(e,e._dur)},v0={_start:0,endTime:eo,totalDuration:eo},wn=function n(e,t,i){var r=e.labels,s=e._recent||v0,o=e.duration()>=Pn?s.endTime(!1):e._dur,a,l,c;return Lt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Vt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ws=function(e,t,i){var r=Si(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=rn(l.vars.inherit)&&l.parent;o.immediateRender=rn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Mt(t[0],o,t[s+1])},Ki=function(e,t){return e||e===0?t(e):t},uo=function(e,t,i){return i<e?e:i>t?t:i},Gt=function(e,t){return!Lt(e)||!(t=a0.exec(e))?"":t[1]},x0=function(e,t,i){return Ki(i,function(r){return uo(e,t,r)})},Ql=[].slice,np=function(e,t){return e&&ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ni(e[0]))&&!e.nodeType&&e!==Yn},M0=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Lt(r)&&!t||np(r,1)?(s=i).push.apply(s,Ln(r)):i.push(r)})||i},Ln=function(e,t,i){return lt&&!t&&lt.selector?lt.selector(e):Lt(e)&&!i&&($l||!ds())?Ql.call((t||Hc).querySelectorAll(e),0):Vt(e)?M0(e,i):np(e)?Ql.call(e,0):e?[e]:[]},ec=function(e){return e=Ln(e)[0]||Qs("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ln(t,i.querySelectorAll?i:i===e?Qs("Invalid scope")||Hc.createElement("div"):e)}},ip=function(e){return e.sort(function(){return .5-Math.random()})},rp=function(e){if(pt(e))return e;var t=ni(e)?e:{each:e},i=gr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return Lt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,_,g){var p=(g||t).length,m=o[p],d,y,v,S,R,w,A,L,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Pn])[1],!M){for(A=-Pn;A<(A=g[M++].getBoundingClientRect().left)&&M<p;);M<p&&M--}for(m=o[p]=[],d=l?Math.min(M,p)*u-.5:r%M,y=M===Pn?0:l?p*f/M-.5:r/M|0,A=0,L=Pn,w=0;w<p;w++)v=w%M-d,S=y-(w/M|0),m[w]=R=c?Math.abs(c==="y"?S:v):zd(v*v+S*S),R>A&&(A=R),R<L&&(L=R);r==="random"&&ip(m),m.max=A-L,m.min=L,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(M>p?p-1:c?c==="y"?p/M:M:Math.max(M,p/M))||0)*(r==="edges"?-1:1),m.b=p<0?s-p:s,m.u=Gt(t.amount||t.each)||0,i=i&&p<0?pp(i):i}return p=(m[h]-m.min)/m.max||0,St(m.b+(i?i(p):p)*m.v)+m.u}},tc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=St(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Si(i)?0:Gt(i))}},sp=function(e,t){var i=Vt(e),r,s;return!i&&ni(e)&&(r=i=e.radius||Pn,e.values?(e=Ln(e.values),(s=!Si(e[0]))&&(r*=r)):e=tc(e.increment)),Ki(t,i?pt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Pn,u=0,f=e.length,h,_;f--;)s?(h=e[f].x-a,_=e[f].y-l,h=h*h+_*_):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Si(o)?u:u+Gt(o)}:tc(e))},op=function(e,t,i,r){return Ki(Vt(e)?!t:i===!0?!!(i=0):!r,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},S0=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},y0=function(e,t){return function(i){return e(parseFloat(i))+(t||Gt(i))}},E0=function(e,t,i){return lp(e,t,0,1,i)},ap=function(e,t,i){return Ki(i,function(r){return e[~~t(r)]})},T0=function n(e,t,i){var r=t-e;return Vt(e)?ap(e,n(0,e.length),t):Ki(i,function(s){return(r+(s-e)%r)%r+e})},b0=function n(e,t,i){var r=t-e,s=r*2;return Vt(e)?ap(e,n(0,e.length-1),t):Ki(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},to=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?kd:jl),i+=e.substr(t,r-t)+op(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},lp=function(e,t,i,r,s){var o=t-e,a=r-i;return Ki(s,function(l){return i+((l-e)/o*a||0)})},A0=function n(e,t,i,r){var s=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!s){var o=Lt(e),a={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(g){g*=f;var p=Math.min(h,~~g);return u[p](g-p)},i=t}else r||(e=us(Vt(e)?[]:{},e));if(!u){for(l in t)Yc.call(a,e,l,"get",t[l]);s=function(g){return Zc(g,a)||(o?e.p:e)}}}return Ki(i,s)},Zu=function(e,t,i){var r=e.labels,s=Pn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},xn=function(e,t,i){var r=e.vars,s=r[t],o=lt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&zi.length&&oa(),a&&(lt=a),u=l?s.apply(c,l):s.call(c),lt=o,u},Us=function(e){return qi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!It),e.progress()<1&&xn(e,"onInterrupt"),e},Yr,cp=[],up=function(e){if(e)if(e=!e.name&&e.default||e,Gc()||e.headless){var t=e.name,i=pt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:eo,render:Zc,add:Yc,kill:V0,modifier:H0,rawVars:0},o={targetTest:0,get:0,getSetter:Kc,aliases:{},register:0};if(ds(),e!==r){if(mn[t])return;Tn(r,Tn(aa(e,s),o)),us(r.prototype,us(s,aa(e,o))),mn[r.prop=t]=r,e.targetTest&&(Ko.push(r),kc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qd(t,r),e.register&&e.register(cn,r,on)}else cp.push(e)},Qe=255,Is={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},Ja=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Qe+.5|0},fp=function(e,t,i){var r=e?Si(e)?[e>>16,e>>8&Qe,e&Qe]:0:Is.black,s,o,a,l,c,u,f,h,_,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Is[e])r=Is[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Qe,r&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(jl),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ja(l+1/3,s,o),r[1]=Ja(l,s,o),r[2]=Ja(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Hd),i&&r.length<4&&(r[3]=1),r}else r=e.match(jl)||Is.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Qe,o=r[1]/Qe,a=r[2]/Qe,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(_=f-h,c=u>.5?_/(2-f-h):_/(f+h),l=f===s?(o-a)/_+(o<a?6:0):f===o?(a-s)/_+2:(s-o)/_+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},hp=function(e){var t=[],i=[],r=-1;return e.split(Gi).forEach(function(s){var o=s.match(qr)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Ju=function(e,t,i){var r="",s=(e+r).match(Gi),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=fp(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=hp(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Gi,"1").split(qr),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Gi),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Gi=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Is)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),w0=/hsl[a]?\(/,dp=function(e){var t=e.join(" "),i;if(Gi.lastIndex=0,Gi.test(t))return i=w0.test(t),e[1]=Ju(e[1],i),e[0]=Ju(e[0],i,hp(e[1])),!0},no,gn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,h,_,g=function p(m){var d=n()-r,y=m===!0,v,S,R,w;if((d>e||d<0)&&(i+=d-t),r+=d,R=r-i,v=R-o,(v>0||y)&&(w=++f.frame,h=R-f.time*1e3,f.time=R=R/1e3,o+=v+(v>=s?4:s-v),S=1),y||(l=c(p)),S)for(_=0;_<a.length;_++)a[_](R,h,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Wd&&(!$l&&Gc()&&(Yn=$l=window,Hc=Yn.document||{},En.gsap=cn,(Yn.gsapVersions||(Yn.gsapVersions=[])).push(cn.version),Xd(sa||Yn.GreenSockGlobals||!Yn.gsap&&Yn||{}),cp.forEach(up)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},no=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),no=0,c=eo},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,d,y){var v=d?function(S,R,w,A){m(S,R,w,A),f.remove(v)}:m;return f.remove(m),a[y?"unshift":"push"](v),ds(),v},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&_>=d&&_--},_listeners:a},f}(),ds=function(){return!no&&gn.wake()},Xe={},R0=/^[\d.\-M][\d.\-,\s]/,C0=/["']/g,P0=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(C0,"").trim():+c,r=l.substr(a+1).trim();return t},L0=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},D0=function(e){var t=(e+"").split("("),i=Xe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[P0(t[1])]:L0(e).split(",").map(Kd)):Xe._CE&&R0.test(e)?Xe._CE("",e):i},pp=function(e){return function(t){return 1-e(1-t)}},mp=function n(e,t){for(var i=e._first,r;i;)i instanceof Zt?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},gr=function(e,t){return e&&(pt(e)?e:Xe[e]||D0(e))||t},Ar=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return sn(e,function(a){Xe[a]=En[a]=s,Xe[o=a.toLowerCase()]=i;for(var l in s)Xe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xe[a+"."+l]=s[l]}),s},_p=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Qa=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Yl*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*o0((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:_p(a);return s=Yl/s,l.config=function(c,u){return n(e,c,u)},l},el=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:_p(i);return r.config=function(s){return n(e,s)},r};sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ar(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;Ar("Elastic",Qa("in"),Qa("out"),Qa());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Ar("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ar("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Ar("Circ",function(n){return-(zd(1-n*n)-1)});Ar("Sine",function(n){return n===1?1:-s0(n*i0)+1});Ar("Back",el("in"),el("out"),el());Xe.SteppedEase=Xe.steps=En.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-et;return function(a){return((r*uo(0,o,a)|0)+s)*i}}};cs.ease=Xe["quad.out"];sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Wc+=n+","+n+"Params,"});var gp=function(e,t){this.id=r0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:jd,this.set=t?t.getSetter:Kc},io=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,hs(this,+t.duration,1,1),this.data=t.data,lt&&(this._ctx=lt,lt.data.push(this)),no||gn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,hs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ds(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ca(this,i),!s._dp||s.parent||Qd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Kn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===et||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),$d(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+$u(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+$u(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?fs(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-et?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?la(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-et?0:this._rts,this.totalTime(uo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Ra(this),d0(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ds(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==et&&(this._tTime-=et)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Kn(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(rn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?la(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=c0);var r=It;return It=i,qc(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),It=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Ku(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Ku(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(wn(this,i),rn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,rn(r)),this._dur||(this._zTime=-et),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-et,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-et)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=pt(i)?i:Zd,a=function(){var c=r.then;r.then=null,pt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Us(this)},n}();Tn(io.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-et,_prom:0,_ps:!1,_rts:1});var Zt=function(n){Bd(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=rn(i.sortChildren),ut&&Kn(i.parent||ut,pi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&ep(pi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ws(0,arguments,this),this},t.from=function(r,s,o){return Ws(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ws(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,ks(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Mt(r,s,wn(this,o),1),this},t.call=function(r,s,o){return Kn(this,Mt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Mt(r,o,wn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,ks(o).immediateRender=rn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,ks(a).immediateRender=rn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:St(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,_,g,p,m,d,y,v,S,R,w,A;if(this!==ut&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,S=this._start,v=this._ts,d=!v,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=St(u%m),u===l?(p=this._repeat,h=c):(R=St(u/m),p=~~R,p&&p===R&&(h=c,p--),h>c&&(h=c)),R=fs(this._tTime,m),!a&&this._tTime&&R!==p&&this._tTime-R*m-this._dur<=0&&(R=p),w&&p&1&&(h=c-h,A=1),p!==R&&!this._lock){var L=w&&R&1,M=L===(w&&p&1);if(p<R&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(A?0:St(p*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&xn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;mp(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=g0(this,St(a),St(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&!s&&!R&&(xn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(_=this._first;_;){if(g=_._next,(_._act||h>=_._start)&&_._ts&&y!==_){if(_.parent!==this)return this.render(r,s,o);if(_.render(_._ts>0?(h-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(h-_._start)*_._ts,s,o),h!==this._time||!this._ts&&!d){y=0,g&&(u+=this._zTime=-et);break}}_=g}else{_=this._last;for(var b=r<0?r:h;_;){if(g=_._prev,(_._act||b<=_._end)&&_._ts&&y!==_){if(_.parent!==this)return this.render(r,s,o);if(_.render(_._ts>0?(b-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(b-_._start)*_._ts,s,o||It&&qc(_)),h!==this._time||!this._ts&&!d){y=0,g&&(u+=this._zTime=b?-et:et);break}}_=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-et)._zTime=h>=a?1:-1,this._ts))return this._start=S,Ra(this),this.render(r,s,o);this._onUpdate&&!s&&xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&qi(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(xn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Si(s)||(s=wn(this,s,r)),!(r instanceof io)){if(Vt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Lt(r))return this.addLabel(r,s);if(pt(r))r=Mt.delayedCall(0,r);else return this}return this!==r?Kn(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Pn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Mt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Lt(r)?this.removeLabel(r):pt(r)?this.killTweensOf(r):(r.parent===this&&wa(this,r),r===this._recent&&(this._recent=this._last),_r(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(gn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=wn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Mt.delayedCall(0,s||eo,o);return a.data="isPause",this._hasPause=1,Kn(this,a,wn(this,r))},t.removePause=function(r){var s=this._first;for(r=wn(this,r);s;)s._start===r&&s.data==="isPause"&&qi(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ui!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Ln(r),l=this._first,c=Si(s),u;l;)l instanceof Mt?u0(l._targets,a)&&(c?(!Ui||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=wn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,_,g=Mt.to(o,Tn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||et,onStart:function(){if(o.pause(),!_){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&hs(g,m,0,1).render(g._time,!0,!0),_=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Tn({startAt:{time:wn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Zu(this,wn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Zu(this,wn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+et)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return _r(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),_r(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Pn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Kn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;hs(o,o===ut&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(ut._ts&&($d(ut,la(r,ut)),Yd=gn.frame),gn.frame>=Yu){Yu+=Mn.autoSleep||120;var s=ut._first;if((!s||!s._ts)&&Mn.autoSleep&&gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||gn.sleep()}}},e}(io);Tn(Zt.prototype,{_lock:0,_hasPause:0,_forcing:0});var U0=function(e,t,i,r,s,o,a){var l=new on(this._pt,e,t,0,1,Ep,null,s),c=0,u=0,f,h,_,g,p,m,d,y;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=to(r)),o&&(y=[i,r],o(y,e,t),i=y[0],r=y[1]),h=i.match(Ka)||[];f=Ka.exec(r);)g=f[0],p=r.substring(c,f.index),_?_=(_+1)%5:p.substr(-5)==="rgba("&&(_=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:m,c:g.charAt(1)==="="?ns(m,g)-m:parseFloat(g)-m,m:_&&_<4?Math.round:0},c=Ka.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Vd.test(r)||d)&&(l.e=0),this._pt=l,l},Yc=function(e,t,i,r,s,o,a,l,c,u){pt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:pt(f)?c?e[t.indexOf("set")||!pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,_=pt(f)?c?B0:Sp:$c,g;if(Lt(r)&&(~r.indexOf("random(")&&(r=to(r)),r.charAt(1)==="="&&(g=ns(h,r)+(Gt(h)||0),(g||g===0)&&(r=g))),!u||h!==r||nc)return!isNaN(h*r)&&r!==""?(g=new on(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?G0:yp,0,_),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Vc(t,r),U0.call(this,e,t,h,r,_,l||Mn.stringFilter,c))},I0=function(e,t,i,r,s){if(pt(e)&&(e=Xs(e,s,t,i,r)),!ni(e)||e.style&&e.nodeType||Vt(e)||Gd(e))return Lt(e)?Xs(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Xs(e[a],s,t,i,r);return o},vp=function(e,t,i,r,s,o){var a,l,c,u;if(mn[e]&&(a=new mn[e]).init(s,a.rawVars?t[e]:I0(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new on(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Yr))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ui,nc,jc=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,_=r.autoRevert,g=e._dur,p=e._startAt,m=e._targets,d=e.parent,y=d&&d.data==="nested"?d.vars.targets:m,v=e._overwrite==="auto"&&!Bc,S=e.timeline,R,w,A,L,M,b,F,G,ee,U,z,H,Y;if(S&&(!h||!s)&&(s="none"),e._ease=gr(s,cs.ease),e._yEase=f?pp(gr(f===!0?s:f,cs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!r.runBackwards,!S||h&&!r.stagger){if(G=m[0]?mr(m[0]).harness:0,H=G&&r[G.prop],R=aa(r,kc),p&&(p._zTime<0&&p.progress(1),t<0&&u&&a&&!_?p.render(-1,!0):p.revert(u&&g?$o:l0),p._lazy=0),o){if(qi(e._startAt=Mt.set(m,Tn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!p&&rn(l),startAt:null,delay:0,onUpdate:c&&function(){return xn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It||!a&&!_)&&e._startAt.revert($o),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!p){if(t&&(a=!1),A=Tn({overwrite:!1,data:"isFromStart",lazy:a&&!p&&rn(l),immediateRender:a,stagger:0,parent:d},R),H&&(A[G.prop]=H),qi(e._startAt=Mt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It?e._startAt.revert($o):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,et,et);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&rn(l)||l&&!g,w=0;w<m.length;w++){if(M=m[w],F=M._gsap||Xc(m)[w]._gsap,e._ptLookup[w]=U={},Kl[F.id]&&zi.length&&oa(),z=y===m?w:y.indexOf(M),G&&(ee=new G).init(M,H||R,e,z,y)!==!1&&(e._pt=L=new on(e._pt,M,ee.name,0,1,ee.render,ee,0,ee.priority),ee._props.forEach(function(q){U[q]=L}),ee.priority&&(b=1)),!G||H)for(A in R)mn[A]&&(ee=vp(A,R,e,z,M,y))?ee.priority&&(b=1):U[A]=L=Yc.call(e,M,A,"get",R[A],z,y,0,r.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),v&&e._pt&&(Ui=e,ut.killTweensOf(M,U,e.globalTime(t)),Y=!e.parent,Ui=0),e._pt&&l&&(Kl[F.id]=1)}b&&Tp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,h&&t<=0&&S.render(Pn,!0,!0)},N0=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,_;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,_=e._targets.length;_--;){if(u=h[_][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return nc=1,e.vars[t]="+=0",jc(e,a),nc=0,l?Qs(t+" not eligible for reset"):1;c.push(u)}for(_=c.length;_--;)f=c[_],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=vt(i)+Gt(f.e)),f.b&&(f.b=u.s+Gt(f.b))},O0=function(e,t){var i=e[0]?mr(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=us({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},F0=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Vt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Xs=function(e,t,i,r,s){return pt(e)?e.call(t,i,r,s):Lt(e)&&~e.indexOf("random(")?to(e):e},xp=Wc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Mp={};sn(xp+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Mp[n]=1});var Mt=function(n){Bd(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:ks(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,_=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,y=r.parent||ut,v=(Vt(i)||Gd(i)?Si(i[0]):"length"in r)?[i]:Ln(i),S,R,w,A,L,M,b,F;if(a._targets=v.length?Xc(v):Qs("GSAP target "+i+" not found. https://gsap.com",!Mn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=_,g||h||Mo(c)||Mo(u)){if(r=a.vars,S=a.timeline=new Zt({data:"nested",defaults:p||{},targets:y&&y.data==="nested"?y.vars.targets:v}),S.kill(),S.parent=S._dp=pi(a),S._start=0,h||Mo(c)||Mo(u)){if(A=v.length,b=h&&rp(h),ni(h))for(L in h)~xp.indexOf(L)&&(F||(F={}),F[L]=h[L]);for(R=0;R<A;R++)w=aa(r,Mp),w.stagger=0,d&&(w.yoyoEase=d),F&&us(w,F),M=v[R],w.duration=+Xs(c,pi(a),R,M,v),w.delay=(+Xs(u,pi(a),R,M,v)||0)-a._delay,!h&&A===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),S.to(M,w,b?b(R,M,v):0),S._ease=Xe.none;S.duration()?c=u=0:a.timeline=0}else if(g){ks(Tn(S.vars.defaults,{ease:"none"})),S._ease=gr(g.ease||r.ease||"none");var G=0,ee,U,z;if(Vt(g))g.forEach(function(H){return S.to(v,H,">")}),S.duration();else{w={};for(L in g)L==="ease"||L==="easeEach"||F0(L,g[L],w,g.easeEach);for(L in w)for(ee=w[L].sort(function(H,Y){return H.t-Y.t}),G=0,R=0;R<ee.length;R++)U=ee[R],z={ease:U.e,duration:(U.t-(R?ee[R-1].t:0))/100*c},z[L]=U.v,S.to(v,z,G),G+=z.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return _===!0&&!Bc&&(Ui=pi(a),ut.killTweensOf(v),Ui=0),Kn(y,pi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===St(y._time)&&rn(f)&&p0(pi(a))&&y.data!=="nested")&&(a._tTime=-et,a.render(Math.max(0,-u)||0)),m&&ep(pi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-et&&!u?l:r<et?0:r,h,_,g,p,m,d,y,v,S;if(!c)_0(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,v=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+r,s,o);if(h=St(f%p),f===l?(g=this._repeat,h=c):(m=St(f/p),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),d=this._yoyo&&g&1,d&&(S=this._yEase,h=c-h),m=fs(this._tTime,p),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(v&&this._yEase&&mp(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&h!==p&&this._initted&&(this._lock=o=1,this.render(St(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(tp(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(h/c),this._from&&(this.ratio=y=1-y),!a&&f&&!s&&!m&&(xn(this,"onStart"),this._tTime!==f))return this;for(_=this._pt;_;)_.r(y,_.d),_=_._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Zl(this,r,s,o),xn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&xn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Zl(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&qi(this,1),!s&&!(u&&!a)&&(f||a||d)&&(xn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){no||gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||jc(this,c),u=this._ease(c/this._dur),N0(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Ca(this,0),this.parent||Jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Us(this):this.scrollTrigger&&this.scrollTrigger.kill(!!It),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ui&&Ui.vars.overwrite!==!0)._first||Us(this),this.parent&&o!==this.timeline.totalDuration()&&hs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Ln(r):a,c=this._ptLookup,u=this._pt,f,h,_,g,p,m,d;if((!s||s==="all")&&h0(a,l))return s==="all"&&(this._pt=0),Us(this);for(f=this._op=this._op||[],s!=="all"&&(Lt(s)&&(p={},sn(s,function(y){return p[y]=1}),s=p),s=O0(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=c[d],s==="all"?(f[d]=s,g=h,_={}):(_=f[d]=f[d]||{},g=s);for(p in g)m=h&&h[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&wa(this,m,"_pt"),delete h[p]),_!=="all"&&(_[p]=1)}return this._initted&&!this._pt&&u&&Us(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ws(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ws(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return ut.killTweensOf(r,s,o)},e}(io);Tn(Mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});sn("staggerTo,staggerFrom,staggerFromTo",function(n){Mt[n]=function(){var e=new Zt,t=Ql.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var $c=function(e,t,i){return e[t]=i},Sp=function(e,t,i){return e[t](i)},B0=function(e,t,i,r){return e[t](r.fp,i)},z0=function(e,t,i){return e.setAttribute(t,i)},Kc=function(e,t){return pt(e[t])?Sp:zc(e[t])&&e.setAttribute?z0:$c},yp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},G0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ep=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Zc=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},H0=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},V0=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?wa(this,t,"_pt"):t.dep||(i=1),t=r;return!i},k0=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Tp=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},on=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||yp,this.d=l||this,this.set=c||$c,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=k0,this.m=i,this.mt=s,this.tween=r},n}();sn(Wc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return kc[n]=1});En.TweenMax=En.TweenLite=Mt;En.TimelineLite=En.TimelineMax=Zt;ut=new Zt({sortChildren:!1,defaults:cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mn.stringFilter=dp;var vr=[],Zo={},W0=[],Qu=0,X0=0,tl=function(e){return(Zo[e]||W0).map(function(t){return t()})},ic=function(){var e=Date.now(),t=[];e-Qu>2&&(tl("matchMediaInit"),vr.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=Yn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),tl("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Qu=e,tl("matchMedia"))},bp=function(){function n(t,i){this.selector=i&&ec(i),this.data=[],this._r=[],this.isReverted=!1,this.id=X0++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){pt(i)&&(s=r,r=i,i=pt);var o=this,a=function(){var c=lt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=ec(s)),lt=o,f=r.apply(o,arguments),pt(f)&&o._r.push(f),lt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===pt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=lt;lt=null,i(this),lt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Mt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Zt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Mt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=vr.length;o--;)vr[o].id===this.id&&vr.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),q0=function(){function n(t){this.contexts=[],this.scope=t,lt&&lt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){ni(i)||(i={matches:i});var o=new bp(0,s||this.scope),a=o.conditions={},l,c,u;lt&&!o.selector&&(o.selector=lt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=Yn.matchMedia(i[c]),l&&(vr.indexOf(o)<0&&vr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ic):l.addEventListener("change",ic)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),ca={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return up(r)})},timeline:function(e){return new Zt(e)},getTweensOf:function(e,t){return ut.getTweensOf(e,t)},getProperty:function(e,t,i,r){Lt(e)&&(e=Ln(e)[0]);var s=mr(e||{}).get,o=i?Zd:Kd;return i==="native"&&(i=""),e&&(t?o((mn[t]&&mn[t].get||s)(e,t,i,r)):function(a,l,c){return o((mn[a]&&mn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Ln(e),e.length>1){var r=e.map(function(u){return cn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=mn[t],a=mr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Yr._pt=0,f.init(e,i?u+i:u,Yr,0,[e]),f.render(1,f),Yr._pt&&Zc(1,Yr)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=cn.to(e,Tn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gr(e.ease,cs.ease)),ju(cs,e||{})},config:function(e){return ju(Mn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!mn[a]&&!En[a]&&Qs(t+" effect requires "+a+" plugin.")}),Za[t]=function(a,l,c){return i(Ln(a),Tn(l||{},s),c)},o&&(Zt.prototype[t]=function(a,l,c){return this.add(Za[t](a,ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Xe[e]=gr(t)},parseEase:function(e,t){return arguments.length?gr(e,t):Xe},getById:function(e){return ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Zt(e),r,s;for(i.smoothChildTiming=rn(e.smoothChildTiming),ut.remove(i),i._dp=0,i._time=i._tTime=ut._time,r=ut._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Mt&&r.vars.onComplete===r._targets[0]))&&Kn(i,r,r._start-r._delay),r=s;return Kn(ut,i,0),i},context:function(e,t){return e?new bp(e,t):lt},matchMedia:function(e){return new q0(e)},matchMediaRefresh:function(){return vr.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||ic()},addEventListener:function(e,t){var i=Zo[e]||(Zo[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Zo[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:T0,wrapYoyo:b0,distribute:rp,random:op,snap:sp,normalize:E0,getUnit:Gt,clamp:x0,splitColor:fp,toArray:Ln,selector:ec,mapRange:lp,pipe:S0,unitize:y0,interpolate:A0,shuffle:ip},install:Xd,effects:Za,ticker:gn,updateRoot:Zt.updateRoot,plugins:mn,globalTimeline:ut,core:{PropTween:on,globals:qd,Tween:Mt,Timeline:Zt,Animation:io,getCache:mr,_removeLinkedListItem:wa,reverting:function(){return It},context:function(e){return e&&lt&&(lt.data.push(e),e._ctx=lt),lt},suppressOverwrites:function(e){return Bc=e}}};sn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ca[n]=Mt[n]});gn.add(Zt.updateRoot);Yr=ca.to({},{duration:0});var Y0=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},j0=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Y0(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},nl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Lt(s)&&(l={},sn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}j0(a,s)}}}},cn=ca.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)It?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},nl("roundProps",tc),nl("modifiers"),nl("snap",sp))||ca;Mt.version=Zt.version=cn.version="3.13.0";Wd=1;Gc()&&ds();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ef,Ii,is,Jc,dr,tf,Qc,$0=function(){return typeof window<"u"},yi={},lr=180/Math.PI,rs=Math.PI/180,Rr=Math.atan2,nf=1e8,eu=/([A-Z])/g,K0=/(left|right|width|margin|padding|x)/i,Z0=/[\s,\(]\S/,Jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},J0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Q0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ev=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Ap=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},wp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},tv=function(e,t,i){return e.style[t]=i},nv=function(e,t,i){return e.style.setProperty(t,i)},iv=function(e,t,i){return e._gsap[t]=i},rv=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},sv=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},ov=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},ft="transform",an=ft+"Origin",av=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in yi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Jn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=mi(r,a)}):this.tfm[e]=o.x?o[e]:mi(r,e),e===an&&(this.tfm.zOrigin=o.zOrigin);else return Jn.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(ft)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(an,t,"")),e=ft}(s||t)&&this.props.push(e,t,s[e])},Rp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},lv=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(eu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Qc(),(!s||!s.isStart)&&!i[ft]&&(Rp(i),r.zOrigin&&i[an]&&(i[an]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Cp=function(e,t){var i={target:e,props:[],revert:lv,save:av};return e._gsap||cn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Pp,sc=function(e,t){var i=Ii.createElementNS?Ii.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ii.createElement(e);return i&&i.style?i:Ii.createElement(e)},Dn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(eu,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ps(t)||t,1)||""},rf="O,Moz,ms,Ms,Webkit".split(","),ps=function(e,t,i){var r=t||dr,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(rf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?rf[o]:"")+e},oc=function(){$0()&&window.document&&(ef=window,Ii=ef.document,is=Ii.documentElement,dr=sc("div")||{style:{}},sc("div"),ft=ps(ft),an=ft+"Origin",dr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Pp=!!ps("perspective"),Qc=cn.core.reverting,Jc=1)},sf=function(e){var t=e.ownerSVGElement,i=sc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),is.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),is.removeChild(i),s},of=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Lp=function(e){var t,i;try{t=e.getBBox()}catch{t=sf(e),i=1}return t&&(t.width||t.height)||i||(t=sf(e)),t&&!t.width&&!t.x&&!t.y?{x:+of(e,["x","cx","x1"])||0,y:+of(e,["y","cy","y1"])||0,width:0,height:0}:t},Dp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Lp(e))},yr=function(e,t){if(t){var i=e.style,r;t in yi&&t!==an&&(t=ft),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(eu,"-$1").toLowerCase())):i.removeAttribute(t)}},Ni=function(e,t,i,r,s,o){var a=new on(e._pt,t,i,0,1,o?wp:Ap);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},af={deg:1,rad:1,turn:1},cv={grid:1,flex:1},Yi=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=dr.style,l=K0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",_=r==="%",g,p,m,d;if(r===o||!s||af[r]||af[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&Dp(e),(_||o==="%")&&(yi[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[u],vt(_?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),p=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Ii||!p.appendChild)&&(p=Ii.body),m=p._gsap,m&&_&&m.width&&l&&m.time===gn.time&&!m.uncache)return vt(s/m.width*f);if(_&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+r,g=e[u],y?e.style[t]=y:yr(e,t)}else(_||o==="%")&&!cv[Dn(p,"display")]&&(a.position=Dn(e,"position")),p===e&&(a.position="static"),p.appendChild(dr),g=dr[u],p.removeChild(dr),a.position="absolute";return l&&_&&(m=mr(p),m.time=gn.time,m.width=p[u]),vt(h?g*s/f:g&&s?f/g*s:0)},mi=function(e,t,i,r){var s;return Jc||oc(),t in Jn&&t!=="transform"&&(t=Jn[t],~t.indexOf(",")&&(t=t.split(",")[0])),yi[t]&&t!=="transform"?(s=so(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:fa(Dn(e,an))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ua[t]&&ua[t](e,t,i)||Dn(e,t)||jd(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Yi(e,t,s,i)+i:s},uv=function(e,t,i,r){if(!i||i==="none"){var s=ps(t,e,1),o=s&&Dn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Dn(e,"borderTopColor"))}var a=new on(this._pt,e.style,t,0,1,Ep),l=0,c=0,u,f,h,_,g,p,m,d,y,v,S,R;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Dn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(p=e.style[t],e.style[t]=r,r=Dn(e,t)||r,p?e.style[t]=p:yr(e,t)),u=[i,r],dp(u),i=u[0],r=u[1],h=i.match(qr)||[],R=r.match(qr)||[],R.length){for(;f=qr.exec(r);)m=f[0],y=r.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(p=h[c++]||"")&&(_=parseFloat(p)||0,S=p.substr((_+"").length),m.charAt(1)==="="&&(m=ns(_,m)+S),d=parseFloat(m),v=m.substr((d+"").length),l=qr.lastIndex-v.length,v||(v=v||Mn.units[t]||S,l===r.length&&(r+=v,a.e+=v)),S!==v&&(_=Yi(e,t,p,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:_,c:d-_,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?wp:Ap;return Vd.test(r)&&(a.e=0),this._pt=a,a},lf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fv=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=lf[i]||i,t[1]=lf[r]||r,t.join(" ")},hv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],yi[a]&&(l=1,a=a==="transformOrigin"?an:ft),yr(i,a);l&&(yr(i,ft),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",so(i,1),o.uncache=1,Rp(r)))}},ua={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new on(e._pt,t,i,0,0,hv);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},ro=[1,0,0,1,0,0],Up={},Ip=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},cf=function(e){var t=Dn(e,ft);return Ip(t)?ro:t.substr(7).match(Hd).map(vt)},tu=function(e,t){var i=e._gsap||mr(e),r=e.style,s=cf(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ro:s):(s===ro&&!e.offsetParent&&e!==is&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,is.appendChild(e)),s=cf(e),l?r.display=l:yr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):is.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ac=function(e,t,i,r,s,o){var a=e._gsap,l=s||tu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,_=l[0],g=l[1],p=l[2],m=l[3],d=l[4],y=l[5],v=t.split(" "),S=parseFloat(v[0])||0,R=parseFloat(v[1])||0,w,A,L,M;i?l!==ro&&(A=_*m-g*p)&&(L=S*(m/A)+R*(-p/A)+(p*y-m*d)/A,M=S*(-g/A)+R*(_/A)-(_*y-g*d)/A,S=L,R=M):(w=Lp(e),S=w.x+(~v[0].indexOf("%")?S/100*w.width:S),R=w.y+(~(v[1]||v[0]).indexOf("%")?R/100*w.height:R)),r||r!==!1&&a.smooth?(d=S-c,y=R-u,a.xOffset=f+(d*_+y*p)-d,a.yOffset=h+(d*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=R,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[an]="0px 0px",o&&(Ni(o,a,"xOrigin",c,S),Ni(o,a,"yOrigin",u,R),Ni(o,a,"xOffset",f,a.xOffset),Ni(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+R)},so=function(e,t){var i=e._gsap||new gp(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Dn(e,an)||"0",u,f,h,_,g,p,m,d,y,v,S,R,w,A,L,M,b,F,G,ee,U,z,H,Y,q,te,ie,ce,le,J,se,de;return u=f=h=p=m=d=y=v=S=0,_=g=1,i.svg=!!(e.getCTM&&Dp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ft]!=="none"?l[ft]:"")),r.scale=r.rotate=r.translate="none"),A=tu(e,i.svg),i.svg&&(i.uncache?(q=e.getBBox(),c=i.xOrigin-q.x+"px "+(i.yOrigin-q.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),ac(e,Y||c,!!Y||i.originIsAbsolute,i.smooth!==!1,A)),R=i.xOrigin||0,w=i.yOrigin||0,A!==ro&&(F=A[0],G=A[1],ee=A[2],U=A[3],u=z=A[4],f=H=A[5],A.length===6?(_=Math.sqrt(F*F+G*G),g=Math.sqrt(U*U+ee*ee),p=F||G?Rr(G,F)*lr:0,y=ee||U?Rr(ee,U)*lr+p:0,y&&(g*=Math.abs(Math.cos(y*rs))),i.svg&&(u-=R-(R*F+w*ee),f-=w-(R*G+w*U))):(de=A[6],J=A[7],ie=A[8],ce=A[9],le=A[10],se=A[11],u=A[12],f=A[13],h=A[14],L=Rr(de,le),m=L*lr,L&&(M=Math.cos(-L),b=Math.sin(-L),Y=z*M+ie*b,q=H*M+ce*b,te=de*M+le*b,ie=z*-b+ie*M,ce=H*-b+ce*M,le=de*-b+le*M,se=J*-b+se*M,z=Y,H=q,de=te),L=Rr(-ee,le),d=L*lr,L&&(M=Math.cos(-L),b=Math.sin(-L),Y=F*M-ie*b,q=G*M-ce*b,te=ee*M-le*b,se=U*b+se*M,F=Y,G=q,ee=te),L=Rr(G,F),p=L*lr,L&&(M=Math.cos(L),b=Math.sin(L),Y=F*M+G*b,q=z*M+H*b,G=G*M-F*b,H=H*M-z*b,F=Y,z=q),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,d=180-d),_=vt(Math.sqrt(F*F+G*G+ee*ee)),g=vt(Math.sqrt(H*H+de*de)),L=Rr(z,H),y=Math.abs(L)>2e-4?L*lr:0,S=se?1/(se<0?-se:se):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Ip(Dn(e,ft)),Y&&e.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(_*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=vt(_),i.scaleY=vt(g),i.rotation=vt(p)+a,i.rotationX=vt(m)+a,i.rotationY=vt(d)+a,i.skewX=y+a,i.skewY=v+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[an]=fa(c)),i.xOffset=i.yOffset=0,i.force3D=Mn.force3D,i.renderTransform=i.svg?pv:Pp?Np:dv,i.uncache=0,i},fa=function(e){return(e=e.split(" "))[0]+" "+e[1]},il=function(e,t,i){var r=Gt(t);return vt(parseFloat(t)+parseFloat(Yi(e,"x",i+"px",r)))+r},dv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Np(e,t)},tr="0deg",As="0px",nr=") ",Np=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,_=i.skewY,g=i.scaleX,p=i.scaleY,m=i.transformPerspective,d=i.force3D,y=i.target,v=i.zOrigin,S="",R=d==="auto"&&e&&e!==1||d===!0;if(v&&(f!==tr||u!==tr)){var w=parseFloat(u)*rs,A=Math.sin(w),L=Math.cos(w),M;w=parseFloat(f)*rs,M=Math.cos(w),o=il(y,o,A*M*-v),a=il(y,a,-Math.sin(w)*-v),l=il(y,l,L*M*-v+v)}m!==As&&(S+="perspective("+m+nr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(R||o!==As||a!==As||l!==As)&&(S+=l!==As||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+nr),c!==tr&&(S+="rotate("+c+nr),u!==tr&&(S+="rotateY("+u+nr),f!==tr&&(S+="rotateX("+f+nr),(h!==tr||_!==tr)&&(S+="skew("+h+", "+_+nr),(g!==1||p!==1)&&(S+="scale("+g+", "+p+nr),y.style[ft]=S||"translate(0, 0)"},pv=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,_=i.target,g=i.xOrigin,p=i.yOrigin,m=i.xOffset,d=i.yOffset,y=i.forceCSS,v=parseFloat(o),S=parseFloat(a),R,w,A,L,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=rs,c*=rs,R=Math.cos(l)*f,w=Math.sin(l)*f,A=Math.sin(l-c)*-h,L=Math.cos(l-c)*h,c&&(u*=rs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),A*=M,L*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),R*=M,w*=M)),R=vt(R),w=vt(w),A=vt(A),L=vt(L)):(R=f,L=h,w=A=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=Yi(_,"x",o,"px"),S=Yi(_,"y",a,"px")),(g||p||m||d)&&(v=vt(v+g-(g*R+p*A)+m),S=vt(S+p-(g*w+p*L)+d)),(r||s)&&(M=_.getBBox(),v=vt(v+r/100*M.width),S=vt(S+s/100*M.height)),M="matrix("+R+","+w+","+A+","+L+","+v+","+S+")",_.setAttribute("transform",M),y&&(_.style[ft]=M)},mv=function(e,t,i,r,s){var o=360,a=Lt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?lr:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*nf)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*nf)%o-~~(c/o)*o)),e._pt=h=new on(e._pt,t,i,r,c,J0),h.e=u,h.u="deg",e._props.push(i),h},uf=function(e,t){for(var i in t)e[i]=t[i];return e},_v=function(e,t,i){var r=uf({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,h,_,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[ft]=t,a=so(i,1),yr(i,ft),i.setAttribute("transform",c)):(c=getComputedStyle(i)[ft],o[ft]=t,a=so(i,1),o[ft]=c);for(l in yi)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(_=Gt(c),g=Gt(u),f=_!==g?Yi(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new on(e._pt,a,l,f,h-f,rc),e._pt.u=g||0,e._props.push(l));uf(a,r)};sn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ua[e>1?"border"+n:n]=function(a,l,c,u,f){var h,_;if(arguments.length<4)return h=o.map(function(g){return mi(a,g,c)}),_=h.join(" "),_.split(h[0]).length===5?h[0]:_;h=(u+"").split(" "),_={},o.forEach(function(g,p){return _[g]=h[p]=h[p]||h[(p-1)/2|0]}),a.init(l,_,f)}});var Op={name:"css",register:oc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,h,_,g,p,m,d,y,v,S,R,w,A,L;Jc||oc(),this.styles=this.styles||Cp(e),L=this.styles.props,this.tween=i;for(p in t)if(p!=="autoRound"&&(u=t[p],!(mn[p]&&vp(p,t,i,r,e,s)))){if(_=typeof u,g=ua[p],_==="function"&&(u=u.call(i,r,e,s),_=typeof u),_==="string"&&~u.indexOf("random(")&&(u=to(u)),g)g(this,e,p,u,i)&&(A=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Gi.lastIndex=0,Gi.test(c)||(m=Gt(c),d=Gt(u)),d?m!==d&&(c=Yi(e,p,c,d)+d):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,p),o.push(p),L.push(p,0,a[p]);else if(_!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,r,e,s):l[p],Lt(c)&&~c.indexOf("random(")&&(c=to(c)),Gt(c+"")||c==="auto"||(c+=Mn.units[p]||Gt(mi(e,p))||""),(c+"").charAt(1)==="="&&(c=mi(e,p))):c=mi(e,p),h=parseFloat(c),y=_==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),p in Jn&&(p==="autoAlpha"&&(h===1&&mi(e,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,a.visibility),Ni(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),p!=="scale"&&p!=="transform"&&(p=Jn[p],~p.indexOf(",")&&(p=p.split(",")[0]))),v=p in yi,v){if(this.styles.save(p),_==="string"&&u.substring(0,6)==="var(--"&&(u=Dn(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),S||(R=e._gsap,R.renderTransform&&!t.parseTransform||so(e,t.parseTransform),w=t.smoothOrigin!==!1&&R.smooth,S=this._pt=new on(this._pt,a,ft,0,1,R.renderTransform,R,0,-1),S.dep=1),p==="scale")this._pt=new on(this._pt,R,"scaleY",R.scaleY,(y?ns(R.scaleY,y+f):f)-R.scaleY||0,rc),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){L.push(an,0,a[an]),u=fv(u),R.svg?ac(e,u,0,w,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==R.zOrigin&&Ni(this,R,"zOrigin",R.zOrigin,d),Ni(this,a,p,fa(c),fa(u)));continue}else if(p==="svgOrigin"){ac(e,u,1,w,0,this);continue}else if(p in Up){mv(this,R,p,h,y?ns(h,y+u):u);continue}else if(p==="smoothOrigin"){Ni(this,R,"smooth",R.smooth,u);continue}else if(p==="force3D"){R[p]=u;continue}else if(p==="transform"){_v(this,u,e);continue}}else p in a||(p=ps(p)||p);if(v||(f||f===0)&&(h||h===0)&&!Z0.test(u)&&p in a)m=(c+"").substr((h+"").length),f||(f=0),d=Gt(u)||(p in Mn.units?Mn.units[p]:m),m!==d&&(h=Yi(e,p,c,d)),this._pt=new on(this._pt,v?R:a,p,h,(y?ns(h,y+f):f)-h,!v&&(d==="px"||p==="zIndex")&&t.autoRound!==!1?ev:rc),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=Q0);else if(p in a)uv.call(this,e,p,c,y?y+u:u);else if(p in e)this.add(e,p,c||e[p],y?y+u:u,r,s);else if(p!=="parseTransform"){Vc(p,u);continue}v||(p in a?L.push(p,0,a[p]):typeof e[p]=="function"?L.push(p,2,e[p]()):L.push(p,1,c||e[p])),o.push(p)}}A&&Tp(this)},render:function(e,t){if(t.tween._time||!Qc())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:mi,aliases:Jn,getSetter:function(e,t,i){var r=Jn[t];return r&&r.indexOf(",")<0&&(t=r),t in yi&&t!==an&&(e._gsap.x||mi(e,"x"))?i&&tf===i?t==="scale"?rv:iv:(tf=i||{})&&(t==="scale"?sv:ov):e.style&&!zc(e.style[t])?tv:~t.indexOf("-")?nv:Kc(e,t)},core:{_removeProperty:yr,_getMatrix:tu}};cn.utils.checkPrefix=ps;cn.core.getStyleSaver=Cp;(function(n,e,t,i){var r=sn(n+","+e+","+t,function(s){yi[s]=1});sn(e,function(s){Mn.units[s]="deg",Up[s]=1}),Jn[r[13]]=n+","+e,sn(i,function(s){var o=s.split(":");Jn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Mn.units[n]="px"});cn.registerPlugin(Op);var Fp=cn.registerPlugin(Op)||cn;Fp.core.Tween;const Xt={nombre:"Convento de Santo Domingo de Bonaval",ubicacion:"Santiago de Compostela (Galicia, España)",coordenadas:{lat:42.88239,lng:-8.53774},fundacionAtribuida:1219,documentoMasAntiguo:1228,usosActuales:["Museo do Pobo Galego","Panteón de Galegos Ilustres","Parque público en antiguos huertos"],estilos:["Gótico mendicante (siglos XIII-XIV)","Renacentista (elementos)","Barroco compostelano (finales XVII - comienzos XVIII)"],patronos:["Casa de Altamira","Arzobispo Antonio de Monroy"],arquitectosDestacados:["Domingo de Andrade"],elementosSingulares:["Triple escalera helicoidal de tres espirales independientes","Claustro con artificio óptico para cuadrar planta trapezoidal","Panteón de Galegos Ilustres","Fachada barroca con escudos y sartas de frutas"]},gv=[{fecha:1219,titulo:"Tradición fundacional",texto:"Atribuida a Santo Domingo de Guzmán en presunta peregrinación (puesta en duda por historiadores modernos)."},{fecha:1228,titulo:"Primer documento",texto:"Referencia documental más antigua, advocación inicial de Santa María."},{fecha:"Siglos XIII-XIV",titulo:"Fase gótica",texto:"Construcción de iglesia de tipología mendicante: tres naves, crucero, planta de salón."},{fecha:"S. XV",titulo:"Título de Santo Domingo",texto:"Aparece ya la denominación de Santo Domingo bajo patrocinio Altamira."},{fecha:1695,titulo:"Reconstrucción barroca",texto:"Inicio de grandes reformas dirigidas por Domingo de Andrade bajo mecenazgo de Monroy."},{fecha:"Finales XVII - c. 1700",titulo:"Fachada y escalera",texto:"Ejecución de fachada principal y triple escalera helicoidal, innovación estructural."},{fecha:"Comienzos XVIII",titulo:"Torre",texto:"Levantamiento de la torre atribuida a Andrade o Fernando de Casas Novoa."},{fecha:1836,titulo:"Exclaustración",texto:"Pasa a manos municipales tras desamortización; se evita su demolición."},{fecha:1963,titulo:"Museo municipal",texto:"Se inaugura museo en parte del edificio."},{fecha:1976,titulo:"Cesión al museo",texto:"Cesión para creación del Museo do Pobo Galego (inaugurado 1977)."},{fecha:1984,titulo:"Castelao",texto:"Traslado de los restos de Castelao al Panteón de Galegos Ilustres."},{fecha:2015,titulo:"UNESCO (Inventario)",texto:"Figura como elemento asociado en ampliación del Camino de Santiago."}],ff={descripcion:"Capilla lateral que acoge restos de personalidades clave de la cultura gallega.",figuras:["Rosalía de Castro (escritora)","Alfredo Brañas (pensador)","Ramón Cabanillas (poeta)","Domingo Fontán (cartógrafo)","Francisco Asorey (escultor)","Alfonso Daniel R. Castelao (escritor y político)"]},vv=["La triple escalera: tres hélices independientes compartiendo hueco, solo una llega al mirador.","Ilusión óptica del claustro: alternancia y distancias variables para aparentar cuadrado perfecto.","Sartas de frutas: motivo decorativo característico de Domingo de Andrade presente en fachada y claustro.","Fragmento del antiguo púlpito tradicionalmente conservado en la Cofradía del Rosario (tradición popular).","El parque actual reutiliza huertos y cementerio del convento, ejemplo de integración patrimonial paisajística."],xv=[{titulo:"Fachada principal",url:"https://commons.wikimedia.org/wiki/File:San_domingos_de_bonaval_fachada_principal.jpg",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/San_domingos_de_bonaval_fachada_principal.jpg/640px-San_domingos_de_bonaval_fachada_principal.jpg",licencia:"CC BY-SA 4.0"},{titulo:"Ábside gótico",url:"https://commons.wikimedia.org/wiki/File:Absida_bonaval.jpg",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Absida_bonaval.jpg/640px-Absida_bonaval.jpg",licencia:"CC BY-SA 3.0"},{titulo:"Claustro",url:"https://commons.wikimedia.org/wiki/File:Patio_do_Museo_do_Pobo_Galego,_Santiago.JPG",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Patio_do_Museo_do_Pobo_Galego%2C_Santiago.JPG/640px-Patio_do_Museo_do_Pobo_Galego%2C_Santiago.JPG",licencia:"CC BY-SA 3.0"},{titulo:"Parque de Bonaval",url:"https://commons.wikimedia.org/wiki/File:Recuncho_do_parque_de_bonaval.jpg",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Recuncho_do_parque_de_bonaval.jpg/640px-Recuncho_do_parque_de_bonaval.jpg",licencia:"CC BY-SA 4.0"},{titulo:"Triple escalera",url:"https://commons.wikimedia.org/wiki/File:Santiago-San_Domingos_de_Bonaval-Escalera_de_caracol_(6315259758).jpg",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Santiago-San_Domingos_de_Bonaval-Escalera_de_caracol_%286315259758%29.jpg/640px-Santiago-San_Domingos_de_Bonaval-Escalera_de_caracol_%286315259758%29.jpg",licencia:"CC BY-SA 2.0"}],Mv=["Síntesis elaborada a partir de fuentes públicas (Wikipedia y documentación patrimonial).","Imágenes bajo licencia Creative Commons: enlaces y atribuciones indicadas en cada figura."];/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nu="160",Sv=0,hf=1,yv=2,Bp=1,Ev=2,hi=3,ji=0,ln=1,gi=2,Hi=0,ss=1,df=2,pf=3,mf=4,Tv=5,fr=100,bv=101,Av=102,_f=103,gf=104,wv=200,Rv=201,Cv=202,Pv=203,lc=204,cc=205,Lv=206,Dv=207,Uv=208,Iv=209,Nv=210,Ov=211,Fv=212,Bv=213,zv=214,Gv=0,Hv=1,Vv=2,ha=3,kv=4,Wv=5,Xv=6,qv=7,zp=0,Yv=1,jv=2,Vi=0,$v=1,Kv=2,Zv=3,Jv=4,Qv=5,ex=6,Gp=300,ms=301,_s=302,uc=303,fc=304,Pa=306,hc=1e3,Bn=1001,dc=1002,jt=1003,vf=1004,rl=1005,Rn=1006,tx=1007,oo=1008,ki=1009,nx=1010,ix=1011,iu=1012,Hp=1013,Oi=1014,Fi=1015,ao=1016,Vp=1017,kp=1018,xr=1020,rx=1021,zn=1023,sx=1024,ox=1025,Mr=1026,gs=1027,ax=1028,Wp=1029,lx=1030,Xp=1031,qp=1033,sl=33776,ol=33777,al=33778,ll=33779,xf=35840,Mf=35841,Sf=35842,yf=35843,Yp=36196,Ef=37492,Tf=37496,bf=37808,Af=37809,wf=37810,Rf=37811,Cf=37812,Pf=37813,Lf=37814,Df=37815,Uf=37816,If=37817,Nf=37818,Of=37819,Ff=37820,Bf=37821,cl=36492,zf=36494,Gf=36495,cx=36283,Hf=36284,Vf=36285,kf=36286,jp=3e3,Sr=3001,ux=3200,fx=3201,$p=0,hx=1,Cn="",Dt="srgb",Ei="srgb-linear",ru="display-p3",La="display-p3-linear",da="linear",at="srgb",pa="rec709",ma="p3",Cr=7680,Wf=519,dx=512,px=513,mx=514,Kp=515,_x=516,gx=517,vx=518,xx=519,Xf=35044,qf="300 es",pc=1035,vi=2e3,_a=2001;class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ul=Math.PI/180,mc=180/Math.PI;function fo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function nn(n,e,t){return Math.max(e,Math.min(t,n))}function Mx(n,e){return(n%e+e)%e}function fl(n,e,t){return(1-t)*n+t*e}function Yf(n){return(n&n-1)===0&&n!==0}function _c(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],_=i[5],g=i[8],p=r[0],m=r[3],d=r[6],y=r[1],v=r[4],S=r[7],R=r[2],w=r[5],A=r[8];return s[0]=o*p+a*y+l*R,s[3]=o*m+a*v+l*w,s[6]=o*d+a*S+l*A,s[1]=c*p+u*y+f*R,s[4]=c*m+u*v+f*w,s[7]=c*d+u*S+f*A,s[2]=h*p+_*y+g*R,s[5]=h*m+_*v+g*w,s[8]=h*d+_*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,_=c*s-o*l,g=t*f+i*h+r*_;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(a*i-r*o)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=_*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hl.makeScale(e,t)),this}rotate(e){return this.premultiply(hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hl=new We;function Zp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sx(){const n=ga("canvas");return n.style.display="block",n}const jf={};function qs(n){n in jf||(jf[n]=!0,console.warn(n))}const $f=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kf=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),So={[Ei]:{transfer:da,primaries:pa,toReference:n=>n,fromReference:n=>n},[Dt]:{transfer:at,primaries:pa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[La]:{transfer:da,primaries:ma,toReference:n=>n.applyMatrix3(Kf),fromReference:n=>n.applyMatrix3($f)},[ru]:{transfer:at,primaries:ma,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Kf),fromReference:n=>n.applyMatrix3($f).convertLinearToSRGB()}},yx=new Set([Ei,La]),Je={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!yx.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=So[e].toReference,r=So[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return So[n].primaries},getTransfer:function(n){return n===Cn?da:So[n].transfer}};function os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pr;class Jp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=ga("canvas")),Pr.width=e.width,Pr.height=e.height;const i=Pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ga("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=os(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(os(t[i]/255)*255):t[i]=os(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ex=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=fo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pl(r[o].image)):s.push(pl(r[o]))}else s=pl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tx=0;class Sn extends xs{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,i=Bn,r=Bn,s=Rn,o=oo,a=zn,l=ki,c=Sn.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=fo(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Sr?Dt:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hc:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hc:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?Sr:jp}set encoding(e){qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sr?Dt:Cn}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Gp;Sn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],_=l[5],g=l[9],p=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+_+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(_+1)/2,R=(d+1)/2,w=(u+h)/4,A=(f+p)/4,L=(g+m)/4;return v>S&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=A/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=L/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=L/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-p)/y,this.z=(h-u)/y,this.w=Math.acos((c+_+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bx extends xs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(qs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Sr?Dt:Cn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends bx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class em extends Sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ax extends Sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ho{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],_=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=_,e[t+2]=g,e[t+3]=p;return}if(f!==p||l!==h||c!==_||u!==g){let m=1-a;const d=l*h+c*_+u*g+f*p,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const R=Math.sqrt(v),w=Math.atan2(R,d*y);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const S=a*y;if(l=l*m+h*S,c=c*m+_*S,u=u*m+g*S,f=f*m+p*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],_=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*_-c*h,e[t+1]=l*g+u*h+c*f-a*_,e[t+2]=c*g+u*_+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),_=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*_*g,this._y=c*_*f-h*u*g,this._z=c*u*g+h*_*f,this._w=c*u*f-h*_*g;break;case"YXZ":this._x=h*u*f+c*_*g,this._y=c*_*f-h*u*g,this._z=c*u*g-h*_*f,this._w=c*u*f+h*_*g;break;case"ZXY":this._x=h*u*f-c*_*g,this._y=c*_*f+h*u*g,this._z=c*u*g+h*_*f,this._w=c*u*f-h*_*g;break;case"ZYX":this._x=h*u*f-c*_*g,this._y=c*_*f+h*u*g,this._z=c*u*g-h*_*f,this._w=c*u*f+h*_*g;break;case"YZX":this._x=h*u*f+c*_*g,this._y=c*_*f+h*u*g,this._z=c*u*g-h*_*f,this._w=c*u*f-h*_*g;break;case"XZY":this._x=h*u*f-c*_*g,this._y=c*_*f-h*u*g,this._z=c*u*g+h*_*f,this._w=c*u*f+h*_*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const _=.5/Math.sqrt(h+1);this._w=.25/_,this._x=(u-l)*_,this._y=(s-c)*_,this._z=(o-r)*_}else if(i>a&&i>f){const _=2*Math.sqrt(1+i-a-f);this._w=(u-l)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+c)/_}else if(a>f){const _=2*Math.sqrt(1+a-i-f);this._w=(s-c)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+f-i-a);this._w=(o-r)/_,this._x=(s+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*i+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ml=new k,Zf=new ho;class po{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(s,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),Eo.subVectors(this.max,Rs),Lr.subVectors(e.a,Rs),Dr.subVectors(e.b,Rs),Ur.subVectors(e.c,Rs),bi.subVectors(Dr,Lr),Ai.subVectors(Ur,Dr),ir.subVectors(Lr,Ur);let t=[0,-bi.z,bi.y,0,-Ai.z,Ai.y,0,-ir.z,ir.y,bi.z,0,-bi.x,Ai.z,0,-Ai.x,ir.z,0,-ir.x,-bi.y,bi.x,0,-Ai.y,Ai.x,0,-ir.y,ir.x,0];return!_l(t,Lr,Dr,Ur,Eo)||(t=[1,0,0,0,1,0,0,0,1],!_l(t,Lr,Dr,Ur,Eo))?!1:(To.crossVectors(bi,Ai),t=[To.x,To.y,To.z],_l(t,Lr,Dr,Ur,Eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new k,new k,new k,new k,new k,new k,new k,new k],In=new k,yo=new po,Lr=new k,Dr=new k,Ur=new k,bi=new k,Ai=new k,ir=new k,Rs=new k,Eo=new k,To=new k,rr=new k;function _l(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){rr.fromArray(n,s);const a=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),u=i.dot(rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const wx=new po,Cs=new k,gl=new k;class Da{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);const t=Cs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(gl)),this.expandByPoint(Cs.copy(e.center).sub(gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new k,vl=new k,bo=new k,wi=new k,xl=new k,Ao=new k,Ml=new k;class tm{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){vl.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(vl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bo),a=wi.dot(this.direction),l=-wi.dot(bo),c=wi.lengthSq(),u=Math.abs(1-o*o);let f,h,_,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,_=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),_=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),_=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),_=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),_=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),_=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),_=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(vl).addScaledVector(bo,h),_}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,r,s){xl.subVectors(t,e),Ao.subVectors(i,e),Ml.crossVectors(xl,Ao);let o=this.direction.dot(Ml),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const l=a*this.direction.dot(Ao.crossVectors(wi,Ao));if(l<0)return null;const c=a*this.direction.dot(xl.cross(wi));if(c<0||l+c>o)return null;const u=-a*wi.dot(Ml);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,_,g,p,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,_,g,p,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,_,g,p,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=_,d[7]=g,d[11]=p,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,_=o*f,g=a*u,p=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=_+g*c,t[5]=h-p*c,t[9]=-a*l,t[2]=p-h*c,t[6]=g+_*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,_=l*f,g=c*u,p=c*f;t[0]=h+p*a,t[4]=g*a-_,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=_*a-g,t[6]=p+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,_=l*f,g=c*u,p=c*f;t[0]=h-p*a,t[4]=-o*f,t[8]=g+_*a,t[1]=_+g*a,t[5]=o*u,t[9]=p-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,_=o*f,g=a*u,p=a*f;t[0]=l*u,t[4]=g*c-_,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=_*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,_=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-h*f,t[8]=g*f+_,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=_*f+g,t[10]=h-p*f}else if(e.order==="XZY"){const h=o*l,_=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=o*u,t[9]=_*f-g,t[2]=g*f-_,t[6]=a*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rx,e,Cx)}lookAt(e,t,i){const r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ri.crossVectors(i,fn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ri.crossVectors(i,fn)),Ri.normalize(),wo.crossVectors(fn,Ri),r[0]=Ri.x,r[4]=wo.x,r[8]=fn.x,r[1]=Ri.y,r[5]=wo.y,r[9]=fn.y,r[2]=Ri.z,r[6]=wo.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],_=i[13],g=i[2],p=i[6],m=i[10],d=i[14],y=i[3],v=i[7],S=i[11],R=i[15],w=r[0],A=r[4],L=r[8],M=r[12],b=r[1],F=r[5],G=r[9],ee=r[13],U=r[2],z=r[6],H=r[10],Y=r[14],q=r[3],te=r[7],ie=r[11],ce=r[15];return s[0]=o*w+a*b+l*U+c*q,s[4]=o*A+a*F+l*z+c*te,s[8]=o*L+a*G+l*H+c*ie,s[12]=o*M+a*ee+l*Y+c*ce,s[1]=u*w+f*b+h*U+_*q,s[5]=u*A+f*F+h*z+_*te,s[9]=u*L+f*G+h*H+_*ie,s[13]=u*M+f*ee+h*Y+_*ce,s[2]=g*w+p*b+m*U+d*q,s[6]=g*A+p*F+m*z+d*te,s[10]=g*L+p*G+m*H+d*ie,s[14]=g*M+p*ee+m*Y+d*ce,s[3]=y*w+v*b+S*U+R*q,s[7]=y*A+v*F+S*z+R*te,s[11]=y*L+v*G+S*H+R*ie,s[15]=y*M+v*ee+S*Y+R*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],_=e[14],g=e[3],p=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*_-i*l*_)+p*(+t*l*_-t*c*h+s*o*h-r*o*_+r*c*u-s*l*u)+m*(+t*c*f-t*a*_-s*o*f+i*o*_+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],_=e[11],g=e[12],p=e[13],m=e[14],d=e[15],y=f*m*c-p*h*c+p*l*_-a*m*_-f*l*d+a*h*d,v=g*h*c-u*m*c-g*l*_+o*m*_+u*l*d-o*h*d,S=u*p*c-g*f*c+g*a*_-o*p*_-u*a*d+o*f*d,R=g*f*l-u*p*l-g*a*h+o*p*h+u*a*m-o*f*m,w=t*y+i*v+r*S+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(p*h*s-f*m*s-p*r*_+i*m*_+f*r*d-i*h*d)*A,e[2]=(a*m*s-p*l*s+p*r*c-i*m*c-a*r*d+i*l*d)*A,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*_-i*l*_)*A,e[4]=v*A,e[5]=(u*m*s-g*h*s+g*r*_-t*m*_-u*r*d+t*h*d)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*A,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*_+t*l*_)*A,e[8]=S*A,e[9]=(g*f*s-u*p*s-g*i*_+t*p*_+u*i*d-t*f*d)*A,e[10]=(o*p*s-g*a*s+g*i*c-t*p*c-o*i*d+t*a*d)*A,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*_-t*a*_)*A,e[12]=R*A,e[13]=(u*p*r-g*f*r+g*i*h-t*p*h-u*i*m+t*f*m)*A,e[14]=(g*a*r-o*p*r-g*i*l+t*p*l+o*i*m-t*a*m)*A,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,_=s*u,g=s*f,p=o*u,m=o*f,d=a*f,y=l*c,v=l*u,S=l*f,R=i.x,w=i.y,A=i.z;return r[0]=(1-(p+d))*R,r[1]=(_+S)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(_-S)*w,r[5]=(1-(h+d))*w,r[6]=(m+y)*w,r[7]=0,r[8]=(g+v)*A,r[9]=(m-y)*A,r[10]=(1-(h+p))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const o=Ir.set(r[4],r[5],r[6]).length(),a=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,u=1/o,f=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,t.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=vi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let _,g;if(a===vi)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===_a)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=vi){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,_=(i+r)*u;let g,p;if(a===vi)g=(o+s)*f,p=-2*f;else if(a===_a)g=s*f,p=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=p,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ir=new k,Nn=new yt,Rx=new k(0,0,0),Cx=new k(1,1,1),Ri=new k,wo=new k,fn=new k,Jf=new yt,Qf=new ho;class Ua{constructor(e=0,t=0,i=0,r=Ua.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qf.setFromEuler(this),this.setFromQuaternion(Qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ua.DEFAULT_ORDER="XYZ";class nm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Px=0;const eh=new k,Nr=new ho,li=new yt,Ro=new k,Ps=new k,Lx=new k,Dx=new ho,th=new k(1,0,0),nh=new k(0,1,0),ih=new k(0,0,1),Ux={type:"added"},Ix={type:"removed"};class Nt extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new k,t=new Ua,i=new ho,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new We}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ro.copy(e):Ro.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Ps,Ro,this.up):li.lookAt(Ro,Ps,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(li),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ux)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ix)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,Lx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),_=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),_.length>0&&(i.animations=_),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new k(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new k,ci=new k,Sl=new k,ui=new k,Or=new k,Fr=new k,rh=new k,yl=new k,El=new k,Tl=new k;let Co=!1;class Fn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),On.subVectors(e,t),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){On.subVectors(r,t),ci.subVectors(i,t),Sl.subVectors(e,t);const o=On.dot(On),a=On.dot(ci),l=On.dot(Sl),c=ci.dot(ci),u=ci.dot(Sl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,_=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-_-g,g,_)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,t,i,r,s,o,a,l){return Co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Co=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static isFrontFacing(e,t,i,r){return On.subVectors(i,t),ci.subVectors(e,t),On.cross(ci).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),On.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Co=!0),Fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Or.subVectors(r,i),Fr.subVectors(s,i),yl.subVectors(e,i);const l=Or.dot(yl),c=Fr.dot(yl);if(l<=0&&c<=0)return t.copy(i);El.subVectors(e,r);const u=Or.dot(El),f=Fr.dot(El);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Or,o);Tl.subVectors(e,s);const _=Or.dot(Tl),g=Fr.dot(Tl);if(g>=0&&_<=g)return t.copy(s);const p=_*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Fr,a);const m=u*g-_*f;if(m<=0&&f-u>=0&&_-g>=0)return rh.subVectors(s,r),a=(f-u)/(f-u+(_-g)),t.copy(r).addScaledVector(rh,a);const d=1/(m+p+h);return o=p*d,a=h*d,t.copy(i).addScaledVector(Or,o).addScaledVector(Fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Po={h:0,s:0,l:0};function bl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Mx(e,1),t=nn(t,0,1),i=nn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=bl(o,s,e+1/3),this.g=bl(o,s,e),this.b=bl(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=Dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=im[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=dl(e.r),this.g=dl(e.g),this.b=dl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Je.fromWorkingColorSpace(Bt.copy(this),e),Math.round(nn(Bt.r*255,0,255))*65536+Math.round(nn(Bt.g*255,0,255))*256+Math.round(nn(Bt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Dt){Je.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,r=Bt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Po);const i=fl(Ci.h,Po.h,t),r=fl(Ci.s,Po.s,t),s=fl(Ci.l,Po.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new $e;$e.NAMES=im;let Nx=0;class Ms extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=fo(),this.name="",this.type="Material",this.blending=ss,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lc&&(i.blendSrc=this.blendSrc),this.blendDst!==cc&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ha&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class su extends Ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new k,Lo=new qe;class Vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xf&&(e.usage=this.usage),e}}class rm extends Vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sm extends Vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yn extends Vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ox=0;const An=new yt,Al=new Nt,Br=new k,hn=new po,Ls=new po,Ct=new k;class kn extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=fo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zp(e)?sm:rm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Al.lookAt(e),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(hn.min,Ls.min),hn.expandByPoint(Ct),Ct.addVectors(hn.max,Ls.max),hn.expandByPoint(Ct)):(hn.expandByPoint(Ls.min),hn.expandByPoint(Ls.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ct.fromBufferAttribute(a,c),l&&(Br.fromBufferAttribute(e,c),Ct.add(Br)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new k,u[b]=new k;const f=new k,h=new k,_=new k,g=new qe,p=new qe,m=new qe,d=new k,y=new k;function v(b,F,G){f.fromArray(r,b*3),h.fromArray(r,F*3),_.fromArray(r,G*3),g.fromArray(o,b*2),p.fromArray(o,F*2),m.fromArray(o,G*2),h.sub(f),_.sub(f),p.sub(g),m.sub(g);const ee=1/(p.x*m.y-m.x*p.y);isFinite(ee)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(_,-p.y).multiplyScalar(ee),y.copy(_).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(ee),c[b].add(d),c[F].add(d),c[G].add(d),u[b].add(y),u[F].add(y),u[G].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let b=0,F=S.length;b<F;++b){const G=S[b],ee=G.start,U=G.count;for(let z=ee,H=ee+U;z<H;z+=3)v(i[z+0],i[z+1],i[z+2])}const R=new k,w=new k,A=new k,L=new k;function M(b){A.fromArray(s,b*3),L.copy(A);const F=c[b];R.copy(F),R.sub(A.multiplyScalar(A.dot(F))).normalize(),w.crossVectors(L,F);const ee=w.dot(u[b])<0?-1:1;l[b*4]=R.x,l[b*4+1]=R.y,l[b*4+2]=R.z,l[b*4+3]=ee}for(let b=0,F=S.length;b<F;++b){const G=S[b],ee=G.start,U=G.count;for(let z=ee,H=ee+U;z<H;z+=3)M(i[z+0]),M(i[z+1]),M(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,_=i.count;h<_;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,_=e.count;h<_;h+=3){const g=e.getX(h+0),p=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,_=t.count;h<_;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let _=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?_=l[p]*a.data.stride+a.offset:_=l[p]*u;for(let d=0;d<u;d++)h[g++]=c[_++]}return new Vn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],_=e(h,i);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const _=c[f];u.push(_.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,_=f.length;h<_;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sh=new yt,sr=new tm,Do=new Da,oh=new k,zr=new k,Gr=new k,Hr=new k,wl=new k,Uo=new k,Io=new qe,No=new qe,Oo=new qe,ah=new k,lh=new k,ch=new k,Fo=new k,Bo=new k;class Gn extends Nt{constructor(e=new kn,t=new su){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(wl.fromBufferAttribute(f,e),o?Uo.addScaledVector(wl,u):Uo.addScaledVector(wl.sub(t),u))}t.add(Uo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(Do.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Do,oh)===null||sr.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(sh.copy(s).invert(),sr.copy(e.ray).applyMatrix4(sh),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,p=h.length;g<p;g++){const m=h[g],d=o[m.materialIndex],y=Math.max(m.start,_.start),v=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let S=y,R=v;S<R;S+=3){const w=a.getX(S),A=a.getX(S+1),L=a.getX(S+2);r=zo(this,d,e,i,c,u,f,w,A,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,_.start),p=Math.min(a.count,_.start+_.count);for(let m=g,d=p;m<d;m+=3){const y=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=zo(this,o,e,i,c,u,f,y,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,p=h.length;g<p;g++){const m=h[g],d=o[m.materialIndex],y=Math.max(m.start,_.start),v=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let S=y,R=v;S<R;S+=3){const w=S,A=S+1,L=S+2;r=zo(this,d,e,i,c,u,f,w,A,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,_.start),p=Math.min(l.count,_.start+_.count);for(let m=g,d=p;m<d;m+=3){const y=m,v=m+1,S=m+2;r=zo(this,o,e,i,c,u,f,y,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Fx(n,e,t,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ji,a),l===null)return null;Bo.copy(a),Bo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Bo);return c<t.near||c>t.far?null:{distance:c,point:Bo.clone(),object:n}}function zo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,zr),n.getVertexPosition(l,Gr),n.getVertexPosition(c,Hr);const u=Fx(n,e,t,i,zr,Gr,Hr,Fo);if(u){r&&(Io.fromBufferAttribute(r,a),No.fromBufferAttribute(r,l),Oo.fromBufferAttribute(r,c),u.uv=Fn.getInterpolation(Fo,zr,Gr,Hr,Io,No,Oo,new qe)),s&&(Io.fromBufferAttribute(s,a),No.fromBufferAttribute(s,l),Oo.fromBufferAttribute(s,c),u.uv1=Fn.getInterpolation(Fo,zr,Gr,Hr,Io,No,Oo,new qe),u.uv2=u.uv1),o&&(ah.fromBufferAttribute(o,a),lh.fromBufferAttribute(o,l),ch.fromBufferAttribute(o,c),u.normal=Fn.getInterpolation(Fo,zr,Gr,Hr,ah,lh,ch,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};Fn.getNormal(zr,Gr,Hr,f.normal),u.face=f}return u}class Ss extends kn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,_=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(u,3)),this.setAttribute("uv",new yn(f,2));function g(p,m,d,y,v,S,R,w,A,L,M){const b=S/A,F=R/L,G=S/2,ee=R/2,U=w/2,z=A+1,H=L+1;let Y=0,q=0;const te=new k;for(let ie=0;ie<H;ie++){const ce=ie*F-ee;for(let le=0;le<z;le++){const J=le*b-G;te[p]=J*y,te[m]=ce*v,te[d]=U,c.push(te.x,te.y,te.z),te[p]=0,te[m]=0,te[d]=w>0?1:-1,u.push(te.x,te.y,te.z),f.push(le/A),f.push(1-ie/L),Y+=1}}for(let ie=0;ie<L;ie++)for(let ce=0;ce<A;ce++){const le=h+ce+z*ie,J=h+ce+z*(ie+1),se=h+(ce+1)+z*(ie+1),de=h+(ce+1)+z*ie;l.push(le,J,de),l.push(J,se,de),q+=6}a.addGroup(_,q,M),_+=q,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=vs(n[t]);for(const r in i)e[r]=i[r]}return e}function Bx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function om(n){return n.getRenderTarget()===null?n.outputColorSpace:Je.workingColorSpace}const zx={clone:vs,merge:Yt};var Gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gx,this.fragmentShader=Hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=Bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class am extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends am{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mc*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ul*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vr=-90,kr=1;class Vx extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Vr,kr,e,t);r.layers=this.layers,this.add(r);const s=new _n(Vr,kr,e,t);s.layers=this.layers,this.add(s);const o=new _n(Vr,kr,e,t);o.layers=this.layers,this.add(o);const a=new _n(Vr,kr,e,t);a.layers=this.layers,this.add(a);const l=new _n(Vr,kr,e,t);l.layers=this.layers,this.add(l);const c=new _n(Vr,kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=p,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,_),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class lm extends Sn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kx extends Er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(qs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Sr?Dt:Cn),this.texture=new lm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ss(5,5,5),s=new Tr({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Hi});s.uniforms.tEquirect.value=t;const o=new Gn(r,s),a=t.minFilter;return t.minFilter===oo&&(t.minFilter=Rn),new Vx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Rl=new k,Wx=new k,Xx=new We;class cr{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Rl.subVectors(i,t).cross(Wx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Rl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Xx.getNormalMatrix(e),r=this.coplanarPoint(Rl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Da,Go=new k;class ou{constructor(e=new cr,t=new cr,i=new cr,r=new cr,s=new cr,o=new cr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],_=r[8],g=r[9],p=r[10],m=r[11],d=r[12],y=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-_,S-d).normalize(),i[1].setComponents(l+s,h+c,m+_,S+d).normalize(),i[2].setComponents(l+o,h+u,m+g,S+y).normalize(),i[3].setComponents(l-o,h-u,m-g,S-y).normalize(),i[4].setComponents(l-a,h-f,m-p,S-v).normalize(),t===vi)i[5].setComponents(l+a,h+f,m+p,S+v).normalize();else if(t===_a)i[5].setComponents(a,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Go.x=r.normal.x>0?e.max.x:e.min.x,Go.y=r.normal.y>0?e.max.y:e.min.y,Go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cm(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function qx(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,_=f.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,h),c.onUploadCallback();let p;if(f instanceof Float32Array)p=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)p=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)p=n.SHORT;else if(f instanceof Uint32Array)p=n.UNSIGNED_INT;else if(f instanceof Int32Array)p=n.INT;else if(f instanceof Int8Array)p=n.BYTE;else if(f instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:p,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:_}}function s(c,u,f){const h=u.array,_=u._updateRange,g=u.updateRanges;if(n.bindBuffer(f,c),_.count===-1&&g.length===0&&n.bufferSubData(f,0,h),g.length!==0){for(let p=0,m=g.length;p<m;p++){const d=g[p];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}_.count!==-1&&(t?n.bufferSubData(f,_.offset*h.BYTES_PER_ELEMENT,h,_.offset,_.count):n.bufferSubData(f,_.offset*h.BYTES_PER_ELEMENT,h.subarray(_.offset,_.offset+_.count)),_.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class au extends kn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,_=[],g=[],p=[],m=[];for(let d=0;d<u;d++){const y=d*h-o;for(let v=0;v<c;v++){const S=v*f-s;g.push(S,-y,0),p.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const v=y+c*d,S=y+c*(d+1),R=y+1+c*(d+1),w=y+1+c*d;_.push(v,S,w),_.push(S,R,w)}this.setIndex(_),this.setAttribute("position",new yn(g,3)),this.setAttribute("normal",new yn(p,3)),this.setAttribute("uv",new yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,iM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EM="gl_FragColor = linearToOutputTexel( gl_FragColor );",TM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,OM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,QM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,eS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,uS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_S=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ES=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,CS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,US=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,HS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,XS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ey=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ty=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,py=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ey=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Yx,alphahash_pars_fragment:jx,alphamap_fragment:$x,alphamap_pars_fragment:Kx,alphatest_fragment:Zx,alphatest_pars_fragment:Jx,aomap_fragment:Qx,aomap_pars_fragment:eM,batching_pars_vertex:tM,batching_vertex:nM,begin_vertex:iM,beginnormal_vertex:rM,bsdfs:sM,iridescence_fragment:oM,bumpmap_pars_fragment:aM,clipping_planes_fragment:lM,clipping_planes_pars_fragment:cM,clipping_planes_pars_vertex:uM,clipping_planes_vertex:fM,color_fragment:hM,color_pars_fragment:dM,color_pars_vertex:pM,color_vertex:mM,common:_M,cube_uv_reflection_fragment:gM,defaultnormal_vertex:vM,displacementmap_pars_vertex:xM,displacementmap_vertex:MM,emissivemap_fragment:SM,emissivemap_pars_fragment:yM,colorspace_fragment:EM,colorspace_pars_fragment:TM,envmap_fragment:bM,envmap_common_pars_fragment:AM,envmap_pars_fragment:wM,envmap_pars_vertex:RM,envmap_physical_pars_fragment:GM,envmap_vertex:CM,fog_vertex:PM,fog_pars_vertex:LM,fog_fragment:DM,fog_pars_fragment:UM,gradientmap_pars_fragment:IM,lightmap_fragment:NM,lightmap_pars_fragment:OM,lights_lambert_fragment:FM,lights_lambert_pars_fragment:BM,lights_pars_begin:zM,lights_toon_fragment:HM,lights_toon_pars_fragment:VM,lights_phong_fragment:kM,lights_phong_pars_fragment:WM,lights_physical_fragment:XM,lights_physical_pars_fragment:qM,lights_fragment_begin:YM,lights_fragment_maps:jM,lights_fragment_end:$M,logdepthbuf_fragment:KM,logdepthbuf_pars_fragment:ZM,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:QM,map_fragment:eS,map_pars_fragment:tS,map_particle_fragment:nS,map_particle_pars_fragment:iS,metalnessmap_fragment:rS,metalnessmap_pars_fragment:sS,morphcolor_vertex:oS,morphnormal_vertex:aS,morphtarget_pars_vertex:lS,morphtarget_vertex:cS,normal_fragment_begin:uS,normal_fragment_maps:fS,normal_pars_fragment:hS,normal_pars_vertex:dS,normal_vertex:pS,normalmap_pars_fragment:mS,clearcoat_normal_fragment_begin:_S,clearcoat_normal_fragment_maps:gS,clearcoat_pars_fragment:vS,iridescence_pars_fragment:xS,opaque_fragment:MS,packing:SS,premultiplied_alpha_fragment:yS,project_vertex:ES,dithering_fragment:TS,dithering_pars_fragment:bS,roughnessmap_fragment:AS,roughnessmap_pars_fragment:wS,shadowmap_pars_fragment:RS,shadowmap_pars_vertex:CS,shadowmap_vertex:PS,shadowmask_pars_fragment:LS,skinbase_vertex:DS,skinning_pars_vertex:US,skinning_vertex:IS,skinnormal_vertex:NS,specularmap_fragment:OS,specularmap_pars_fragment:FS,tonemapping_fragment:BS,tonemapping_pars_fragment:zS,transmission_fragment:GS,transmission_pars_fragment:HS,uv_pars_fragment:VS,uv_pars_vertex:kS,uv_vertex:WS,worldpos_vertex:XS,background_vert:qS,background_frag:YS,backgroundCube_vert:jS,backgroundCube_frag:$S,cube_vert:KS,cube_frag:ZS,depth_vert:JS,depth_frag:QS,distanceRGBA_vert:ey,distanceRGBA_frag:ty,equirect_vert:ny,equirect_frag:iy,linedashed_vert:ry,linedashed_frag:sy,meshbasic_vert:oy,meshbasic_frag:ay,meshlambert_vert:ly,meshlambert_frag:cy,meshmatcap_vert:uy,meshmatcap_frag:fy,meshnormal_vert:hy,meshnormal_frag:dy,meshphong_vert:py,meshphong_frag:my,meshphysical_vert:_y,meshphysical_frag:gy,meshtoon_vert:vy,meshtoon_frag:xy,points_vert:My,points_frag:Sy,shadow_vert:yy,shadow_frag:Ey,sprite_vert:Ty,sprite_frag:by},he={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},$n={basic:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Yt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Yt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Yt([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Yt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Yt([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Yt([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Yt([he.common,he.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Yt([he.lights,he.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};$n.physical={uniforms:Yt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ho={r:0,b:0,g:0};function Ay(n,e,t,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,f=null,h=0,_=null;function g(m,d){let y=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Pa)?(u===void 0&&(u=new Gn(new Ss(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:vs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Je.getTransfer(v.colorSpace)!==at,(f!==v||h!==v.version||_!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,_=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Gn(new au(2,2),new Tr({name:"BackgroundMaterial",uniforms:vs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Je.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||_!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,_=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,d){m.getRGB(Ho,om(n)),i.buffers.color.setClear(Ho.r,Ho.g,Ho.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:g}}function wy(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(U,z,H,Y,q){let te=!1;if(o){const ie=p(Y,H,z);c!==ie&&(c=ie,_(c.object)),te=d(U,Y,H,q),te&&y(U,Y,H,q)}else{const ie=z.wireframe===!0;(c.geometry!==Y.id||c.program!==H.id||c.wireframe!==ie)&&(c.geometry=Y.id,c.program=H.id,c.wireframe=ie,te=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,L(U,z,H,Y),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function _(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function p(U,z,H){const Y=H.wireframe===!0;let q=a[U.id];q===void 0&&(q={},a[U.id]=q);let te=q[z.id];te===void 0&&(te={},q[z.id]=te);let ie=te[Y];return ie===void 0&&(ie=m(h()),te[Y]=ie),ie}function m(U){const z=[],H=[],Y=[];for(let q=0;q<r;q++)z[q]=0,H[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:Y,object:U,attributes:{},index:null}}function d(U,z,H,Y){const q=c.attributes,te=z.attributes;let ie=0;const ce=H.getAttributes();for(const le in ce)if(ce[le].location>=0){const se=q[le];let de=te[le];if(de===void 0&&(le==="instanceMatrix"&&U.instanceMatrix&&(de=U.instanceMatrix),le==="instanceColor"&&U.instanceColor&&(de=U.instanceColor)),se===void 0||se.attribute!==de||de&&se.data!==de.data)return!0;ie++}return c.attributesNum!==ie||c.index!==Y}function y(U,z,H,Y){const q={},te=z.attributes;let ie=0;const ce=H.getAttributes();for(const le in ce)if(ce[le].location>=0){let se=te[le];se===void 0&&(le==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),le==="instanceColor"&&U.instanceColor&&(se=U.instanceColor));const de={};de.attribute=se,se&&se.data&&(de.data=se.data),q[le]=de,ie++}c.attributes=q,c.attributesNum=ie,c.index=Y}function v(){const U=c.newAttributes;for(let z=0,H=U.length;z<H;z++)U[z]=0}function S(U){R(U,0)}function R(U,z){const H=c.newAttributes,Y=c.enabledAttributes,q=c.attributeDivisors;H[U]=1,Y[U]===0&&(n.enableVertexAttribArray(U),Y[U]=1),q[U]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,z),q[U]=z)}function w(){const U=c.newAttributes,z=c.enabledAttributes;for(let H=0,Y=z.length;H<Y;H++)z[H]!==U[H]&&(n.disableVertexAttribArray(H),z[H]=0)}function A(U,z,H,Y,q,te,ie){ie===!0?n.vertexAttribIPointer(U,z,H,q,te):n.vertexAttribPointer(U,z,H,Y,q,te)}function L(U,z,H,Y){if(i.isWebGL2===!1&&(U.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const q=Y.attributes,te=H.getAttributes(),ie=z.defaultAttributeValues;for(const ce in te){const le=te[ce];if(le.location>=0){let J=q[ce];if(J===void 0&&(ce==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),ce==="instanceColor"&&U.instanceColor&&(J=U.instanceColor)),J!==void 0){const se=J.normalized,de=J.itemSize,Me=t.get(J);if(Me===void 0)continue;const Se=Me.buffer,De=Me.type,Ne=Me.bytesPerElement,be=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||J.gpuType===Hp);if(J.isInterleavedBufferAttribute){const Ye=J.data,E=Ye.stride,D=J.offset;if(Ye.isInstancedInterleavedBuffer){for(let N=0;N<le.locationSize;N++)R(le.location+N,Ye.meshPerAttribute);U.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let N=0;N<le.locationSize;N++)S(le.location+N);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let N=0;N<le.locationSize;N++)A(le.location+N,de/le.locationSize,De,se,E*Ne,(D+de/le.locationSize*N)*Ne,be)}else{if(J.isInstancedBufferAttribute){for(let Ye=0;Ye<le.locationSize;Ye++)R(le.location+Ye,J.meshPerAttribute);U.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ye=0;Ye<le.locationSize;Ye++)S(le.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let Ye=0;Ye<le.locationSize;Ye++)A(le.location+Ye,de/le.locationSize,De,se,de*Ne,de/le.locationSize*Ye*Ne,be)}}else if(ie!==void 0){const se=ie[ce];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(le.location,se);break;case 3:n.vertexAttrib3fv(le.location,se);break;case 4:n.vertexAttrib4fv(le.location,se);break;default:n.vertexAttrib1fv(le.location,se)}}}}w()}function M(){G();for(const U in a){const z=a[U];for(const H in z){const Y=z[H];for(const q in Y)g(Y[q].object),delete Y[q];delete z[H]}delete a[U]}}function b(U){if(a[U.id]===void 0)return;const z=a[U.id];for(const H in z){const Y=z[H];for(const q in Y)g(Y[q].object),delete Y[q];delete z[H]}delete a[U.id]}function F(U){for(const z in a){const H=a[z];if(H[U.id]===void 0)continue;const Y=H[U.id];for(const q in Y)g(Y[q].object),delete Y[q];delete H[U.id]}}function G(){ee(),u=!0,c!==l&&(c=l,_(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:G,resetDefaultState:ee,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:S,disableUnusedAttributes:w}}function Ry(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let _,g;if(r)_=n,g="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{_.multiDrawArraysWEBGL(s,u,0,f,0,h);let g=0;for(let p=0;p<h;p++)g+=f[p];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Cy(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=o||e.has("OES_texture_float"),R=v&&S,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:w}}function Py(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new cr,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const _=f.length!==0||h||i!==0||r;return r=h,i=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,_){const g=f.clippingPlanes,p=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,v=y*4;let S=d.clippingState||null;l.value=S,S=u(g,h,v,_);for(let R=0;R!==v;++R)S[R]=t[R];d.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,_,g){const p=f!==null?f.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const d=_+p*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,S=_;v!==p;++v,S+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function Ly(n){let e=new WeakMap;function t(o,a){return a===uc?o.mapping=ms:a===fc&&(o.mapping=_s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===uc||a===fc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kx(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class um extends am{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const jr=4,uh=[.125,.215,.35,.446,.526,.582],hr=20,Cl=new um,fh=new $e;let Pl=null,Ll=0,Dl=0;const ur=(1+Math.sqrt(5))/2,Wr=1/ur,hh=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,ur,Wr),new k(0,ur,-Wr),new k(Wr,0,ur),new k(-Wr,0,ur),new k(ur,Wr,0),new k(-ur,Wr,0)];class dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl,Ll,Dl),e.scissorTest=!1,Vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:ao,format:zn,colorSpace:Ei,depthBuffer:!1},r=ph(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dy(s)),this._blurMaterial=Uy(s,e,t)}return r}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,Cl)}_sceneToCubeUV(e,t,i,r){const a=new _n(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(fh),u.toneMapping=Vi,u.autoClear=!1;const _=new su({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new Gn(new Ss,_);let p=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,p=!0):(_.color.copy(fh),p=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Vo(r,y*v,d>2?v:0,v,v),u.setRenderTarget(r),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ms||e.mapping===_s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Vo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Cl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hh[(r-1)%hh.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Gn(this._lodPlanes[r],c),h=c.uniforms,_=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*hr-1),p=s/g,m=isFinite(s)?1+Math.floor(u*p):hr;m>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);const d=[];let y=0;for(let A=0;A<hr;++A){const L=A/p,M=Math.exp(-L*L/2);d.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const S=this._sizeLods[r],R=3*S*(r>v-jr?r-v+jr:0),w=4*(this._cubeSize-S);Vo(t,R,w,3*S,2*S),l.setRenderTarget(t),l.render(f,Cl)}}function Dy(n){const e=[],t=[],i=[];let r=n;const s=n-jr+1+uh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-jr?l=uh[o-n+jr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,g=6,p=3,m=2,d=1,y=new Float32Array(p*g*_),v=new Float32Array(m*g*_),S=new Float32Array(d*g*_);for(let w=0;w<_;w++){const A=w%3*2/3-1,L=w>2?0:-1,M=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];y.set(M,p*g*w),v.set(h,m*g*w);const b=[w,w,w,w,w,w];S.set(b,d*g*w)}const R=new kn;R.setAttribute("position",new Vn(y,p)),R.setAttribute("uv",new Vn(v,m)),R.setAttribute("faceIndex",new Vn(S,d)),e.push(R),r>jr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ph(n,e,t){const i=new Er(n,e,t);return i.texture.mapping=Pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Uy(n,e,t){const i=new Float32Array(hr),r=new k(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function mh(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function _h(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Iy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===uc||l===fc,u=l===ms||l===_s;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new dh(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new dh(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ny(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Oy(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const p=h.morphAttributes[g];for(let m=0,d=p.length;m<d;m++)e.remove(p[m])}h.removeEventListener("dispose",o),delete r[h.id];const _=s.get(h);_&&(e.remove(_),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const _=f.morphAttributes;for(const g in _){const p=_[g];for(let m=0,d=p.length;m<d;m++)e.update(p[m],n.ARRAY_BUFFER)}}function c(f){const h=[],_=f.index,g=f.attributes.position;let p=0;if(_!==null){const y=_.array;p=_.version;for(let v=0,S=y.length;v<S;v+=3){const R=y[v+0],w=y[v+1],A=y[v+2];h.push(R,w,w,A,A,R)}}else if(g!==void 0){const y=g.array;p=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const R=v+0,w=v+1,A=v+2;h.push(R,w,w,A,A,R)}}else return;const m=new(Zp(h)?sm:rm)(h,1);m.version=p;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const _=f.index;_!==null&&h.version<_.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Fy(n,e,t,i){const r=i.isWebGL2;let s;function o(_){s=_}let a,l;function c(_){a=_.type,l=_.bytesPerElement}function u(_,g){n.drawElements(s,g,a,_*l),t.update(g,s,1)}function f(_,g,p){if(p===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,g,a,_*l,p),t.update(g,s,p)}function h(_,g,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p;d++)this.render(_[d]/l,g[d]);else{m.multiDrawElementsWEBGL(s,g,0,a,_,0,p);let d=0;for(let y=0;y<p;y++)d+=g[y];t.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function By(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function zy(n,e){return n[0]-e[0]}function Gy(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Hy(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==p){let z=function(){ee.dispose(),s.delete(u),u.removeEventListener("dispose",z)};var _=z;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),R===!0&&(M=3);let b=u.attributes.position.count*M,F=1;b>e.maxTextureSize&&(F=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const G=new Float32Array(b*F*4*p),ee=new em(G,b,F,p);ee.type=Fi,ee.needsUpdate=!0;const U=M*4;for(let H=0;H<p;H++){const Y=w[H],q=A[H],te=L[H],ie=b*F*4*H;for(let ce=0;ce<Y.count;ce++){const le=ce*U;v===!0&&(o.fromBufferAttribute(Y,ce),G[ie+le+0]=o.x,G[ie+le+1]=o.y,G[ie+le+2]=o.z,G[ie+le+3]=0),S===!0&&(o.fromBufferAttribute(q,ce),G[ie+le+4]=o.x,G[ie+le+5]=o.y,G[ie+le+6]=o.z,G[ie+le+7]=0),R===!0&&(o.fromBufferAttribute(te,ce),G[ie+le+8]=o.x,G[ie+le+9]=o.y,G[ie+le+10]=o.z,G[ie+le+11]=te.itemSize===4?o.w:1)}}m={count:p,texture:ee,size:new qe(b,F)},s.set(u,m),u.addEventListener("dispose",z)}let d=0;for(let v=0;v<h.length;v++)d+=h[v];const y=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let p=i[u.id];if(p===void 0||p.length!==g){p=[];for(let S=0;S<g;S++)p[S]=[S,0];i[u.id]=p}for(let S=0;S<g;S++){const R=p[S];R[0]=S,R[1]=h[S]}p.sort(Gy);for(let S=0;S<8;S++)S<g&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(zy);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const R=a[S],w=R[0],A=R[1];w!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+S)!==m[w]&&u.setAttribute("morphTarget"+S,m[w]),d&&u.getAttribute("morphNormal"+S)!==d[w]&&u.setAttribute("morphNormal"+S,d[w]),r[S]=A,y+=A):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),d&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const v=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Vy(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class fm extends Sn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Mr,u!==Mr&&u!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Mr&&(i=Oi),i===void 0&&u===gs&&(i=xr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hm=new Sn,dm=new fm(1,1);dm.compareFunction=Kp;const pm=new em,mm=new Ax,_m=new lm,gh=[],vh=[],xh=new Float32Array(16),Mh=new Float32Array(9),Sh=new Float32Array(4);function ys(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=gh[r];if(s===void 0&&(s=new Float32Array(r),gh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ia(n,e){let t=vh[e];t===void 0&&(t=new Int32Array(e),vh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ky(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function Xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function Yy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(bt(t,i))return;Sh.set(i),n.uniformMatrix2fv(this.addr,!1,Sh),At(t,i)}}function jy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(bt(t,i))return;Mh.set(i),n.uniformMatrix3fv(this.addr,!1,Mh),At(t,i)}}function $y(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(bt(t,i))return;xh.set(i),n.uniformMatrix4fv(this.addr,!1,xh),At(t,i)}}function Ky(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function Jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function Qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function eE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function nE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function iE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function rE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?dm:hm;t.setTexture2D(e||s,r)}function sE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||mm,r)}function oE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_m,r)}function aE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||pm,r)}function lE(n){switch(n){case 5126:return ky;case 35664:return Wy;case 35665:return Xy;case 35666:return qy;case 35674:return Yy;case 35675:return jy;case 35676:return $y;case 5124:case 35670:return Ky;case 35667:case 35671:return Zy;case 35668:case 35672:return Jy;case 35669:case 35673:return Qy;case 5125:return eE;case 36294:return tE;case 36295:return nE;case 36296:return iE;case 35678:case 36198:case 36298:case 36306:case 35682:return rE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return oE;case 36289:case 36303:case 36311:case 36292:return aE}}function cE(n,e){n.uniform1fv(this.addr,e)}function uE(n,e){const t=ys(e,this.size,2);n.uniform2fv(this.addr,t)}function fE(n,e){const t=ys(e,this.size,3);n.uniform3fv(this.addr,t)}function hE(n,e){const t=ys(e,this.size,4);n.uniform4fv(this.addr,t)}function dE(n,e){const t=ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pE(n,e){const t=ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mE(n,e){const t=ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _E(n,e){n.uniform1iv(this.addr,e)}function gE(n,e){n.uniform2iv(this.addr,e)}function vE(n,e){n.uniform3iv(this.addr,e)}function xE(n,e){n.uniform4iv(this.addr,e)}function ME(n,e){n.uniform1uiv(this.addr,e)}function SE(n,e){n.uniform2uiv(this.addr,e)}function yE(n,e){n.uniform3uiv(this.addr,e)}function EE(n,e){n.uniform4uiv(this.addr,e)}function TE(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||hm,s[o])}function bE(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||mm,s[o])}function AE(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_m,s[o])}function wE(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||pm,s[o])}function RE(n){switch(n){case 5126:return cE;case 35664:return uE;case 35665:return fE;case 35666:return hE;case 35674:return dE;case 35675:return pE;case 35676:return mE;case 5124:case 35670:return _E;case 35667:case 35671:return gE;case 35668:case 35672:return vE;case 35669:case 35673:return xE;case 5125:return ME;case 36294:return SE;case 36295:return yE;case 36296:return EE;case 35678:case 36198:case 36298:case 36306:case 35682:return TE;case 35679:case 36299:case 36307:return bE;case 35680:case 36300:case 36308:case 36293:return AE;case 36289:case 36303:case 36311:case 36292:return wE}}class CE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=lE(t.type)}}class PE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RE(t.type)}}class LE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ul=/(\w+)(\])?(\[|\.)?/g;function yh(n,e){n.seq.push(e),n.map[e.id]=e}function DE(n,e,t){const i=n.name,r=i.length;for(Ul.lastIndex=0;;){const s=Ul.exec(i),o=Ul.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){yh(t,c===void 0?new CE(a,n,e):new PE(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new LE(a),yh(t,f)),t=f}}}class Jo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);DE(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Eh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const UE=37297;let IE=0;function NE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function OE(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===ma&&t===pa?i="LinearDisplayP3ToLinearSRGB":e===pa&&t===ma&&(i="LinearSRGBToLinearDisplayP3"),n){case Ei:case La:return[i,"LinearTransferOETF"];case Dt:case ru:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Th(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+NE(n.getShaderSource(e),o)}else return r}function FE(n,e){const t=OE(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function BE(n,e){let t;switch(e){case $v:t="Linear";break;case Kv:t="Reinhard";break;case Zv:t="OptimizedCineon";break;case Jv:t="ACESFilmic";break;case ex:t="AgX";break;case Qv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($r).join(`
`)}function GE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter($r).join(`
`)}function HE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function VE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function $r(n){return n!==""}function bh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ah(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kE=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(kE,XE)}const WE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function XE(n,e){let t=Be[e];if(t===void 0){const i=WE.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const qE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wh(n){return n.replace(qE,YE)}function YE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ev?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function $E(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ms:case _s:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function ZE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zp:e="ENVMAP_BLENDING_MULTIPLY";break;case Yv:e="ENVMAP_BLENDING_MIX";break;case jv:e="ENVMAP_BLENDING_ADD";break}return e}function JE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function QE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=jE(t),c=$E(t),u=KE(t),f=ZE(t),h=JE(t),_=t.isWebGL2?"":zE(t),g=GE(t),p=HE(s),m=r.createProgram();let d,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter($r).join(`
`),d.length>0&&(d+=`
`),y=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter($r).join(`
`),y.length>0&&(y+=`
`)):(d=[Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),y=[_,Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?Be.tonemapping_pars_fragment:"",t.toneMapping!==Vi?BE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,FE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),o=gc(o),o=bh(o,t),o=Ah(o,t),a=gc(a),a=bh(a,t),a=Ah(a,t),o=wh(o),a=wh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+d+o,R=v+y+a,w=Eh(r,r.VERTEX_SHADER,S),A=Eh(r,r.FRAGMENT_SHADER,R);r.attachShader(m,w),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function L(G){if(n.debug.checkShaderErrors){const ee=r.getProgramInfoLog(m).trim(),U=r.getShaderInfoLog(w).trim(),z=r.getShaderInfoLog(A).trim();let H=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,A);else{const q=Th(r,w,"vertex"),te=Th(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+q+`
`+te)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(U===""||z==="")&&(Y=!1);Y&&(G.diagnostics={runnable:H,programLog:ee,vertexShader:{log:U,prefix:d},fragmentShader:{log:z,prefix:y}})}r.deleteShader(w),r.deleteShader(A),M=new Jo(r,m),b=VE(r,m)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(m,UE)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}let eT=0;class tT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new nT(e),t.set(e,i)),i}}class nT{constructor(e){this.id=eT++,this.code=e,this.usedTimes=0}}function iT(n,e,t,i,r,s,o){const a=new nm,l=new tT,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return M===0?"uv":`uv${M}`}function m(M,b,F,G,ee){const U=G.fog,z=ee.geometry,H=M.isMeshStandardMaterial?G.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),q=Y&&Y.mapping===Pa?Y.image.height:null,te=g[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ce=ie!==void 0?ie.length:0;let le=0;z.morphAttributes.position!==void 0&&(le=1),z.morphAttributes.normal!==void 0&&(le=2),z.morphAttributes.color!==void 0&&(le=3);let J,se,de,Me;if(te){const kt=$n[te];J=kt.vertexShader,se=kt.fragmentShader}else J=M.vertexShader,se=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);const Se=n.getRenderTarget(),De=ee.isInstancedMesh===!0,Ne=ee.isBatchedMesh===!0,be=!!M.map,Ye=!!M.matcap,E=!!Y,D=!!M.aoMap,N=!!M.lightMap,K=!!M.bumpMap,V=!!M.normalMap,Q=!!M.displacementMap,ne=!!M.emissiveMap,T=!!M.metalnessMap,x=!!M.roughnessMap,P=M.anisotropy>0,W=M.clearcoat>0,O=M.iridescence>0,X=M.sheen>0,ae=M.transmission>0,oe=P&&!!M.anisotropyMap,ue=W&&!!M.clearcoatMap,pe=W&&!!M.clearcoatNormalMap,Ee=W&&!!M.clearcoatRoughnessMap,re=O&&!!M.iridescenceMap,Ge=O&&!!M.iridescenceThicknessMap,Ce=X&&!!M.sheenColorMap,we=X&&!!M.sheenRoughnessMap,Te=!!M.specularMap,me=!!M.specularColorMap,Ae=!!M.specularIntensityMap,je=ae&&!!M.transmissionMap,ot=ae&&!!M.thicknessMap,Ve=!!M.gradientMap,fe=!!M.alphaMap,I=M.alphaTest>0,_e=!!M.alphaHash,ge=!!M.extensions,Le=!!z.attributes.uv1,Re=!!z.attributes.uv2,tt=!!z.attributes.uv3;let nt=Vi;return M.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(nt=n.toneMapping),{isWebGL2:u,shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:J,fragmentShader:se,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:Ne,instancing:De,instancingColor:De&&ee.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ei,map:be,matcap:Ye,envMap:E,envMapMode:E&&Y.mapping,envMapCubeUVHeight:q,aoMap:D,lightMap:N,bumpMap:K,normalMap:V,displacementMap:h&&Q,emissiveMap:ne,normalMapObjectSpace:V&&M.normalMapType===hx,normalMapTangentSpace:V&&M.normalMapType===$p,metalnessMap:T,roughnessMap:x,anisotropy:P,anisotropyMap:oe,clearcoat:W,clearcoatMap:ue,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ee,iridescence:O,iridescenceMap:re,iridescenceThicknessMap:Ge,sheen:X,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:me,specularIntensityMap:Ae,transmission:ae,transmissionMap:je,thicknessMap:ot,gradientMap:Ve,opaque:M.transparent===!1&&M.blending===ss,alphaMap:fe,alphaTest:I,alphaHash:_e,combine:M.combine,mapUv:be&&p(M.map.channel),aoMapUv:D&&p(M.aoMap.channel),lightMapUv:N&&p(M.lightMap.channel),bumpMapUv:K&&p(M.bumpMap.channel),normalMapUv:V&&p(M.normalMap.channel),displacementMapUv:Q&&p(M.displacementMap.channel),emissiveMapUv:ne&&p(M.emissiveMap.channel),metalnessMapUv:T&&p(M.metalnessMap.channel),roughnessMapUv:x&&p(M.roughnessMap.channel),anisotropyMapUv:oe&&p(M.anisotropyMap.channel),clearcoatMapUv:ue&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:pe&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(M.sheenRoughnessMap.channel),specularMapUv:Te&&p(M.specularMap.channel),specularColorMapUv:me&&p(M.specularColorMap.channel),specularIntensityMapUv:Ae&&p(M.specularIntensityMap.channel),transmissionMapUv:je&&p(M.transmissionMap.channel),thicknessMapUv:ot&&p(M.thicknessMap.channel),alphaMapUv:fe&&p(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(V||P),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Re,vertexUv3s:tt,pointsUvs:ee.isPoints===!0&&!!z.attributes.uv&&(be||fe),fog:!!U,useFog:M.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ee.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:le,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:be&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gi,flipSided:M.side===ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ge&&M.extensions.derivatives===!0,extensionFragDepth:ge&&M.extensions.fragDepth===!0,extensionDrawBuffers:ge&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)b.push(F),b.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(y(b,M),v(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const b=g[M.type];let F;if(b){const G=$n[b];F=zx.clone(G.uniforms)}else F=M.uniforms;return F}function R(M,b){let F;for(let G=0,ee=c.length;G<ee;G++){const U=c[G];if(U.cacheKey===b){F=U,++F.usedTimes;break}}return F===void 0&&(F=new QE(n,b,M,s),c.push(F)),F}function w(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:L}}function rT(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function sT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ch(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ph(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,_,g,p,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:_,groupOrder:g,renderOrder:f.renderOrder,z:p,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=_,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=p,d.group=m),e++,d}function a(f,h,_,g,p,m){const d=o(f,h,_,g,p,m);_.transmission>0?i.push(d):_.transparent===!0?r.push(d):t.push(d)}function l(f,h,_,g,p,m){const d=o(f,h,_,g,p,m);_.transmission>0?i.unshift(d):_.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||sT),i.length>1&&i.sort(h||Ch),r.length>1&&r.sort(h||Ch)}function u(){for(let f=e,h=n.length;f<h;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function oT(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ph,n.set(i,[o])):r>=s.length?(o=new Ph,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function aT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new $e};break;case"SpotLight":t={position:new k,direction:new k,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function lT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cT=0;function uT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fT(n,e){const t=new aT,i=lT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new k);const s=new k,o=new yt,a=new yt;function l(u,f){let h=0,_=0,g=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let p=0,m=0,d=0,y=0,v=0,S=0,R=0,w=0,A=0,L=0,M=0;u.sort(uT);const b=f===!0?Math.PI:1;for(let G=0,ee=u.length;G<ee;G++){const U=u[G],z=U.color,H=U.intensity,Y=U.distance,q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=z.r*H*b,_+=z.g*H*b,g+=z.b*H*b;else if(U.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(U.sh.coefficients[te],H);M++}else if(U.isDirectionalLight){const te=t.get(U);if(te.color.copy(U.color).multiplyScalar(U.intensity*b),U.castShadow){const ie=U.shadow,ce=i.get(U);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,r.directionalShadow[p]=ce,r.directionalShadowMap[p]=q,r.directionalShadowMatrix[p]=U.shadow.matrix,S++}r.directional[p]=te,p++}else if(U.isSpotLight){const te=t.get(U);te.position.setFromMatrixPosition(U.matrixWorld),te.color.copy(z).multiplyScalar(H*b),te.distance=Y,te.coneCos=Math.cos(U.angle),te.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),te.decay=U.decay,r.spot[d]=te;const ie=U.shadow;if(U.map&&(r.spotLightMap[A]=U.map,A++,ie.updateMatrices(U),U.castShadow&&L++),r.spotLightMatrix[d]=ie.matrix,U.castShadow){const ce=i.get(U);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,r.spotShadow[d]=ce,r.spotShadowMap[d]=q,w++}d++}else if(U.isRectAreaLight){const te=t.get(U);te.color.copy(z).multiplyScalar(H),te.halfWidth.set(U.width*.5,0,0),te.halfHeight.set(0,U.height*.5,0),r.rectArea[y]=te,y++}else if(U.isPointLight){const te=t.get(U);if(te.color.copy(U.color).multiplyScalar(U.intensity*b),te.distance=U.distance,te.decay=U.decay,U.castShadow){const ie=U.shadow,ce=i.get(U);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,ce.shadowCameraNear=ie.camera.near,ce.shadowCameraFar=ie.camera.far,r.pointShadow[m]=ce,r.pointShadowMap[m]=q,r.pointShadowMatrix[m]=U.shadow.matrix,R++}r.point[m]=te,m++}else if(U.isHemisphereLight){const te=t.get(U);te.skyColor.copy(U.color).multiplyScalar(H*b),te.groundColor.copy(U.groundColor).multiplyScalar(H*b),r.hemi[v]=te,v++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=_,r.ambient[2]=g;const F=r.hash;(F.directionalLength!==p||F.pointLength!==m||F.spotLength!==d||F.rectAreaLength!==y||F.hemiLength!==v||F.numDirectionalShadows!==S||F.numPointShadows!==R||F.numSpotShadows!==w||F.numSpotMaps!==A||F.numLightProbes!==M)&&(r.directional.length=p,r.spot.length=d,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=w+A-L,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=M,F.directionalLength=p,F.pointLength=m,F.spotLength=d,F.rectAreaLength=y,F.hemiLength=v,F.numDirectionalShadows=S,F.numPointShadows=R,F.numSpotShadows=w,F.numSpotMaps=A,F.numLightProbes=M,r.version=cT++)}function c(u,f){let h=0,_=0,g=0,p=0,m=0;const d=f.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const S=u[y];if(S.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),h++}else if(S.isSpotLight){const R=r.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),g++}else if(S.isRectAreaLight){const R=r.rectArea[p];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const R=r.point[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(d),_++}else if(S.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function Lh(n,e){const t=new fT(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function hT(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Lh(n,e),t.set(s,[l])):o>=a.length?(l=new Lh(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class dT extends Ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pT extends Ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_T=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gT(n,e,t){let i=new ou;const r=new qe,s=new qe,o=new Pt,a=new dT({depthPacking:fx}),l=new pT,c={},u=t.maxTextureSize,f={[ji]:ln,[ln]:ji,[gi]:gi},h=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:mT,fragmentShader:_T}),_=h.clone();_.defines.HORIZONTAL_PASS=1;const g=new kn;g.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Gn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bp;let d=this.type;this.render=function(w,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),b=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Hi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ee=d!==hi&&this.type===hi,U=d===hi&&this.type!==hi;for(let z=0,H=w.length;z<H;z++){const Y=w[z],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const te=q.getFrameExtents();if(r.multiply(te),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,q.mapSize.y=s.y)),q.map===null||ee===!0||U===!0){const ce=this.type!==hi?{minFilter:jt,magFilter:jt}:{};q.map!==null&&q.map.dispose(),q.map=new Er(r.x,r.y,ce),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const ie=q.getViewportCount();for(let ce=0;ce<ie;ce++){const le=q.getViewport(ce);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),G.viewport(o),q.updateMatrices(Y,ce),i=q.getFrustum(),S(A,L,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===hi&&y(q,L),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,b,F)};function y(w,A){const L=e.update(p);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,_.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Er(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,L,h,p,null),_.uniforms.shadow_pass.value=w.mapPass.texture,_.uniforms.resolution.value=w.mapSize,_.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,L,_,p,null)}function v(w,A,L,M){let b=null;const F=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)b=F;else if(b=L.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=b.uuid,ee=A.uuid;let U=c[G];U===void 0&&(U={},c[G]=U);let z=U[ee];z===void 0&&(z=b.clone(),U[ee]=z,A.addEventListener("dispose",R)),b=z}if(b.visible=A.visible,b.wireframe=A.wireframe,M===hi?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const G=n.properties.get(b);G.light=L}return b}function S(w,A,L,M,b){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===hi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const ee=e.update(w),U=w.material;if(Array.isArray(U)){const z=ee.groups;for(let H=0,Y=z.length;H<Y;H++){const q=z[H],te=U[q.materialIndex];if(te&&te.visible){const ie=v(w,te,M,b);w.onBeforeShadow(n,w,A,L,ee,ie,q),n.renderBufferDirect(L,null,ee,ie,w,q),w.onAfterShadow(n,w,A,L,ee,ie,q)}}}else if(U.visible){const z=v(w,U,M,b);w.onBeforeShadow(n,w,A,L,ee,z,null),n.renderBufferDirect(L,null,ee,z,w,null),w.onAfterShadow(n,w,A,L,ee,z,null)}}const G=w.children;for(let ee=0,U=G.length;ee<U;ee++)S(G[ee],A,L,M,b)}function R(w){w.target.removeEventListener("dispose",R);for(const L in c){const M=c[L],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function vT(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const _e=new Pt;let ge=null;const Le=new Pt(0,0,0,0);return{setMask:function(Re){ge!==Re&&!I&&(n.colorMask(Re,Re,Re,Re),ge=Re)},setLocked:function(Re){I=Re},setClear:function(Re,tt,nt,wt,kt){kt===!0&&(Re*=wt,tt*=wt,nt*=wt),_e.set(Re,tt,nt,wt),Le.equals(_e)===!1&&(n.clearColor(Re,tt,nt,wt),Le.copy(_e))},reset:function(){I=!1,ge=null,Le.set(-1,0,0,0)}}}function s(){let I=!1,_e=null,ge=null,Le=null;return{setTest:function(Re){Re?Ne(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(Re){_e!==Re&&!I&&(n.depthMask(Re),_e=Re)},setFunc:function(Re){if(ge!==Re){switch(Re){case Gv:n.depthFunc(n.NEVER);break;case Hv:n.depthFunc(n.ALWAYS);break;case Vv:n.depthFunc(n.LESS);break;case ha:n.depthFunc(n.LEQUAL);break;case kv:n.depthFunc(n.EQUAL);break;case Wv:n.depthFunc(n.GEQUAL);break;case Xv:n.depthFunc(n.GREATER);break;case qv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=Re}},setLocked:function(Re){I=Re},setClear:function(Re){Le!==Re&&(n.clearDepth(Re),Le=Re)},reset:function(){I=!1,_e=null,ge=null,Le=null}}}function o(){let I=!1,_e=null,ge=null,Le=null,Re=null,tt=null,nt=null,wt=null,kt=null;return{setTest:function(it){I||(it?Ne(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(it){_e!==it&&!I&&(n.stencilMask(it),_e=it)},setFunc:function(it,Wt,Wn){(ge!==it||Le!==Wt||Re!==Wn)&&(n.stencilFunc(it,Wt,Wn),ge=it,Le=Wt,Re=Wn)},setOp:function(it,Wt,Wn){(tt!==it||nt!==Wt||wt!==Wn)&&(n.stencilOp(it,Wt,Wn),tt=it,nt=Wt,wt=Wn)},setLocked:function(it){I=it},setClear:function(it){kt!==it&&(n.clearStencil(it),kt=it)},reset:function(){I=!1,_e=null,ge=null,Le=null,Re=null,tt=null,nt=null,wt=null,kt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},_={},g=new WeakMap,p=[],m=null,d=!1,y=null,v=null,S=null,R=null,w=null,A=null,L=null,M=new $e(0,0,0),b=0,F=!1,G=null,ee=null,U=null,z=null,H=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ie)[1]),q=te>=1):ie.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),q=te>=2);let ce=null,le={};const J=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),de=new Pt().fromArray(J),Me=new Pt().fromArray(se);function Se(I,_e,ge,Le){const Re=new Uint8Array(4),tt=n.createTexture();n.bindTexture(I,tt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<ge;nt++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(_e,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(_e+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return tt}const De={};De[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(n.DEPTH_TEST),l.setFunc(ha),ne(!1),T(hf),Ne(n.CULL_FACE),V(Hi);function Ne(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function be(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ye(I,_e){return _[I]!==_e?(n.bindFramebuffer(I,_e),_[I]=_e,i&&(I===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=_e),I===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=_e)),!0):!1}function E(I,_e){let ge=p,Le=!1;if(I)if(ge=g.get(_e),ge===void 0&&(ge=[],g.set(_e,ge)),I.isWebGLMultipleRenderTargets){const Re=I.texture;if(ge.length!==Re.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,nt=Re.length;tt<nt;tt++)ge[tt]=n.COLOR_ATTACHMENT0+tt;ge.length=Re.length,Le=!0}}else ge[0]!==n.COLOR_ATTACHMENT0&&(ge[0]=n.COLOR_ATTACHMENT0,Le=!0);else ge[0]!==n.BACK&&(ge[0]=n.BACK,Le=!0);Le&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function D(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const N={[fr]:n.FUNC_ADD,[bv]:n.FUNC_SUBTRACT,[Av]:n.FUNC_REVERSE_SUBTRACT};if(i)N[_f]=n.MIN,N[gf]=n.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(N[_f]=I.MIN_EXT,N[gf]=I.MAX_EXT)}const K={[wv]:n.ZERO,[Rv]:n.ONE,[Cv]:n.SRC_COLOR,[lc]:n.SRC_ALPHA,[Nv]:n.SRC_ALPHA_SATURATE,[Uv]:n.DST_COLOR,[Lv]:n.DST_ALPHA,[Pv]:n.ONE_MINUS_SRC_COLOR,[cc]:n.ONE_MINUS_SRC_ALPHA,[Iv]:n.ONE_MINUS_DST_COLOR,[Dv]:n.ONE_MINUS_DST_ALPHA,[Ov]:n.CONSTANT_COLOR,[Fv]:n.ONE_MINUS_CONSTANT_COLOR,[Bv]:n.CONSTANT_ALPHA,[zv]:n.ONE_MINUS_CONSTANT_ALPHA};function V(I,_e,ge,Le,Re,tt,nt,wt,kt,it){if(I===Hi){d===!0&&(be(n.BLEND),d=!1);return}if(d===!1&&(Ne(n.BLEND),d=!0),I!==Tv){if(I!==y||it!==F){if((v!==fr||w!==fr)&&(n.blendEquation(n.FUNC_ADD),v=fr,w=fr),it)switch(I){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case df:n.blendFunc(n.ONE,n.ONE);break;case pf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case df:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,R=null,A=null,L=null,M.set(0,0,0),b=0,y=I,F=it}return}Re=Re||_e,tt=tt||ge,nt=nt||Le,(_e!==v||Re!==w)&&(n.blendEquationSeparate(N[_e],N[Re]),v=_e,w=Re),(ge!==S||Le!==R||tt!==A||nt!==L)&&(n.blendFuncSeparate(K[ge],K[Le],K[tt],K[nt]),S=ge,R=Le,A=tt,L=nt),(wt.equals(M)===!1||kt!==b)&&(n.blendColor(wt.r,wt.g,wt.b,kt),M.copy(wt),b=kt),y=I,F=!1}function Q(I,_e){I.side===gi?be(n.CULL_FACE):Ne(n.CULL_FACE);let ge=I.side===ln;_e&&(ge=!ge),ne(ge),I.blending===ss&&I.transparent===!1?V(Hi):V(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Le=I.stencilWrite;c.setTest(Le),Le&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),P(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(I){G!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),G=I)}function T(I){I!==Sv?(Ne(n.CULL_FACE),I!==ee&&(I===hf?n.cullFace(n.BACK):I===yv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),ee=I}function x(I){I!==U&&(q&&n.lineWidth(I),U=I)}function P(I,_e,ge){I?(Ne(n.POLYGON_OFFSET_FILL),(z!==_e||H!==ge)&&(n.polygonOffset(_e,ge),z=_e,H=ge)):be(n.POLYGON_OFFSET_FILL)}function W(I){I?Ne(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function O(I){I===void 0&&(I=n.TEXTURE0+Y-1),ce!==I&&(n.activeTexture(I),ce=I)}function X(I,_e,ge){ge===void 0&&(ce===null?ge=n.TEXTURE0+Y-1:ge=ce);let Le=le[ge];Le===void 0&&(Le={type:void 0,texture:void 0},le[ge]=Le),(Le.type!==I||Le.texture!==_e)&&(ce!==ge&&(n.activeTexture(ge),ce=ge),n.bindTexture(I,_e||De[I]),Le.type=I,Le.texture=_e)}function ae(){const I=le[ce];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(I){de.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),de.copy(I))}function je(I){Me.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Me.copy(I))}function ot(I,_e){let ge=f.get(_e);ge===void 0&&(ge=new WeakMap,f.set(_e,ge));let Le=ge.get(I);Le===void 0&&(Le=n.getUniformBlockIndex(_e,I.name),ge.set(I,Le))}function Ve(I,_e){const Le=f.get(_e).get(I);u.get(_e)!==Le&&(n.uniformBlockBinding(_e,Le,I.__bindingPointIndex),u.set(_e,Le))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,le={},_={},g=new WeakMap,p=[],m=null,d=!1,y=null,v=null,S=null,R=null,w=null,A=null,L=null,M=new $e(0,0,0),b=0,F=!1,G=null,ee=null,U=null,z=null,H=null,de.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ne,disable:be,bindFramebuffer:Ye,drawBuffers:E,useProgram:D,setBlending:V,setMaterial:Q,setFlipSided:ne,setCullFace:T,setLineWidth:x,setPolygonOffset:P,setScissorTest:W,activeTexture:O,bindTexture:X,unbindTexture:ae,compressedTexImage2D:oe,compressedTexImage3D:ue,texImage2D:Te,texImage3D:me,updateUBOMapping:ot,uniformBlockBinding:Ve,texStorage2D:Ce,texStorage3D:we,texSubImage2D:pe,texSubImage3D:Ee,compressedTexSubImage2D:re,compressedTexSubImage3D:Ge,scissor:Ae,viewport:je,reset:fe}}function xT(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return _?new OffscreenCanvas(T,x):ga("canvas")}function p(T,x,P,W){let O=1;if((T.width>W||T.height>W)&&(O=W/Math.max(T.width,T.height)),O<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const X=x?_c:Math.floor,ae=X(O*T.width),oe=X(O*T.height);f===void 0&&(f=g(ae,oe));const ue=P?g(ae,oe):f;return ue.width=ae,ue.height=oe,ue.getContext("2d").drawImage(T,0,0,ae,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ae+"x"+oe+")."),ue}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return Yf(T.width)&&Yf(T.height)}function d(T){return a?!1:T.wrapS!==Bn||T.wrapT!==Bn||T.minFilter!==jt&&T.minFilter!==Rn}function y(T,x){return T.generateMipmaps&&x&&T.minFilter!==jt&&T.minFilter!==Rn}function v(T){n.generateMipmap(T)}function S(T,x,P,W,O=!1){if(a===!1)return x;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;if(x===n.RED&&(P===n.FLOAT&&(X=n.R32F),P===n.HALF_FLOAT&&(X=n.R16F),P===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.R8UI),P===n.UNSIGNED_SHORT&&(X=n.R16UI),P===n.UNSIGNED_INT&&(X=n.R32UI),P===n.BYTE&&(X=n.R8I),P===n.SHORT&&(X=n.R16I),P===n.INT&&(X=n.R32I)),x===n.RG&&(P===n.FLOAT&&(X=n.RG32F),P===n.HALF_FLOAT&&(X=n.RG16F),P===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RGBA){const ae=O?da:Je.getTransfer(W);P===n.FLOAT&&(X=n.RGBA32F),P===n.HALF_FLOAT&&(X=n.RGBA16F),P===n.UNSIGNED_BYTE&&(X=ae===at?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function R(T,x,P){return y(T,P)===!0||T.isFramebufferTexture&&T.minFilter!==jt&&T.minFilter!==Rn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){return T===jt||T===vf||T===rl?n.NEAREST:n.LINEAR}function A(T){const x=T.target;x.removeEventListener("dispose",A),M(x),x.isVideoTexture&&u.delete(x)}function L(T){const x=T.target;x.removeEventListener("dispose",L),F(x)}function M(T){const x=i.get(T);if(x.__webglInit===void 0)return;const P=T.source,W=h.get(P);if(W){const O=W[x.__cacheKey];O.usedTimes--,O.usedTimes===0&&b(T),Object.keys(W).length===0&&h.delete(P)}i.remove(T)}function b(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const P=T.source,W=h.get(P);delete W[x.__cacheKey],o.memory.textures--}function F(T){const x=T.texture,P=i.get(T),W=i.get(x);if(W.__webglTexture!==void 0&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(P.__webglFramebuffer[O]))for(let X=0;X<P.__webglFramebuffer[O].length;X++)n.deleteFramebuffer(P.__webglFramebuffer[O][X]);else n.deleteFramebuffer(P.__webglFramebuffer[O]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[O])}else{if(Array.isArray(P.__webglFramebuffer))for(let O=0;O<P.__webglFramebuffer.length;O++)n.deleteFramebuffer(P.__webglFramebuffer[O]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let O=0;O<P.__webglColorRenderbuffer.length;O++)P.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[O]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let O=0,X=x.length;O<X;O++){const ae=i.get(x[O]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(x[O])}i.remove(x),i.remove(T)}let G=0;function ee(){G=0}function U(){const T=G;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),G+=1,T}function z(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function H(T,x){const P=i.get(T);if(T.isVideoTexture&&Q(T),T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){const W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(P,T,x);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+x)}function Y(T,x){const P=i.get(T);if(T.version>0&&P.__version!==T.version){de(P,T,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+x)}function q(T,x){const P=i.get(T);if(T.version>0&&P.__version!==T.version){de(P,T,x);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+x)}function te(T,x){const P=i.get(T);if(T.version>0&&P.__version!==T.version){Me(P,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+x)}const ie={[hc]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[dc]:n.MIRRORED_REPEAT},ce={[jt]:n.NEAREST,[vf]:n.NEAREST_MIPMAP_NEAREST,[rl]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[tx]:n.LINEAR_MIPMAP_NEAREST,[oo]:n.LINEAR_MIPMAP_LINEAR},le={[dx]:n.NEVER,[xx]:n.ALWAYS,[px]:n.LESS,[Kp]:n.LEQUAL,[mx]:n.EQUAL,[vx]:n.GEQUAL,[_x]:n.GREATER,[gx]:n.NOTEQUAL};function J(T,x,P){if(P?(n.texParameteri(T,n.TEXTURE_WRAP_S,ie[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ie[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ie[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ce[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ce[x.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Bn||x.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,w(x.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==jt&&x.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===jt||x.minFilter!==rl&&x.minFilter!==oo||x.type===Fi&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===ao&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(T,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function se(T,x){let P=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const W=x.source;let O=h.get(W);O===void 0&&(O={},h.set(W,O));const X=z(x);if(X!==T.__cacheKey){O[X]===void 0&&(O[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),O[X].usedTimes++;const ae=O[T.__cacheKey];ae!==void 0&&(O[T.__cacheKey].usedTimes--,ae.usedTimes===0&&b(x)),T.__cacheKey=X,T.__webglTexture=O[X].texture}return P}function de(T,x,P){let W=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=n.TEXTURE_3D);const O=se(T,x),X=x.source;t.bindTexture(W,T.__webglTexture,n.TEXTURE0+P);const ae=i.get(X);if(X.version!==ae.__version||O===!0){t.activeTexture(n.TEXTURE0+P);const oe=Je.getPrimaries(Je.workingColorSpace),ue=x.colorSpace===Cn?null:Je.getPrimaries(x.colorSpace),pe=x.colorSpace===Cn||oe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ee=d(x)&&m(x.image)===!1;let re=p(x.image,Ee,!1,r.maxTextureSize);re=ne(x,re);const Ge=m(re)||a,Ce=s.convert(x.format,x.colorSpace);let we=s.convert(x.type),Te=S(x.internalFormat,Ce,we,x.colorSpace,x.isVideoTexture);J(W,x,Ge);let me;const Ae=x.mipmaps,je=a&&x.isVideoTexture!==!0&&Te!==Yp,ot=ae.__version===void 0||O===!0,Ve=R(x,re,Ge);if(x.isDepthTexture)Te=n.DEPTH_COMPONENT,a?x.type===Fi?Te=n.DEPTH_COMPONENT32F:x.type===Oi?Te=n.DEPTH_COMPONENT24:x.type===xr?Te=n.DEPTH24_STENCIL8:Te=n.DEPTH_COMPONENT16:x.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Mr&&Te===n.DEPTH_COMPONENT&&x.type!==iu&&x.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Oi,we=s.convert(x.type)),x.format===gs&&Te===n.DEPTH_COMPONENT&&(Te=n.DEPTH_STENCIL,x.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=xr,we=s.convert(x.type))),ot&&(je?t.texStorage2D(n.TEXTURE_2D,1,Te,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Te,re.width,re.height,0,Ce,we,null));else if(x.isDataTexture)if(Ae.length>0&&Ge){je&&ot&&t.texStorage2D(n.TEXTURE_2D,Ve,Te,Ae[0].width,Ae[0].height);for(let fe=0,I=Ae.length;fe<I;fe++)me=Ae[fe],je?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,me.width,me.height,Ce,we,me.data):t.texImage2D(n.TEXTURE_2D,fe,Te,me.width,me.height,0,Ce,we,me.data);x.generateMipmaps=!1}else je?(ot&&t.texStorage2D(n.TEXTURE_2D,Ve,Te,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,Ce,we,re.data)):t.texImage2D(n.TEXTURE_2D,0,Te,re.width,re.height,0,Ce,we,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){je&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,Te,Ae[0].width,Ae[0].height,re.depth);for(let fe=0,I=Ae.length;fe<I;fe++)me=Ae[fe],x.format!==zn?Ce!==null?je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,me.width,me.height,re.depth,Ce,me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Te,me.width,me.height,re.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,me.width,me.height,re.depth,Ce,we,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Te,me.width,me.height,re.depth,0,Ce,we,me.data)}else{je&&ot&&t.texStorage2D(n.TEXTURE_2D,Ve,Te,Ae[0].width,Ae[0].height);for(let fe=0,I=Ae.length;fe<I;fe++)me=Ae[fe],x.format!==zn?Ce!==null?je?t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,me.width,me.height,Ce,me.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Te,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,me.width,me.height,Ce,we,me.data):t.texImage2D(n.TEXTURE_2D,fe,Te,me.width,me.height,0,Ce,we,me.data)}else if(x.isDataArrayTexture)je?(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,Te,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ce,we,re.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,re.width,re.height,re.depth,0,Ce,we,re.data);else if(x.isData3DTexture)je?(ot&&t.texStorage3D(n.TEXTURE_3D,Ve,Te,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ce,we,re.data)):t.texImage3D(n.TEXTURE_3D,0,Te,re.width,re.height,re.depth,0,Ce,we,re.data);else if(x.isFramebufferTexture){if(ot)if(je)t.texStorage2D(n.TEXTURE_2D,Ve,Te,re.width,re.height);else{let fe=re.width,I=re.height;for(let _e=0;_e<Ve;_e++)t.texImage2D(n.TEXTURE_2D,_e,Te,fe,I,0,Ce,we,null),fe>>=1,I>>=1}}else if(Ae.length>0&&Ge){je&&ot&&t.texStorage2D(n.TEXTURE_2D,Ve,Te,Ae[0].width,Ae[0].height);for(let fe=0,I=Ae.length;fe<I;fe++)me=Ae[fe],je?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ce,we,me):t.texImage2D(n.TEXTURE_2D,fe,Te,Ce,we,me);x.generateMipmaps=!1}else je?(ot&&t.texStorage2D(n.TEXTURE_2D,Ve,Te,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,we,re)):t.texImage2D(n.TEXTURE_2D,0,Te,Ce,we,re);y(x,Ge)&&v(W),ae.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Me(T,x,P){if(x.image.length!==6)return;const W=se(T,x),O=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+P);const X=i.get(O);if(O.version!==X.__version||W===!0){t.activeTexture(n.TEXTURE0+P);const ae=Je.getPrimaries(Je.workingColorSpace),oe=x.colorSpace===Cn?null:Je.getPrimaries(x.colorSpace),ue=x.colorSpace===Cn||ae===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const pe=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,re=[];for(let fe=0;fe<6;fe++)!pe&&!Ee?re[fe]=p(x.image[fe],!1,!0,r.maxCubemapSize):re[fe]=Ee?x.image[fe].image:x.image[fe],re[fe]=ne(x,re[fe]);const Ge=re[0],Ce=m(Ge)||a,we=s.convert(x.format,x.colorSpace),Te=s.convert(x.type),me=S(x.internalFormat,we,Te,x.colorSpace),Ae=a&&x.isVideoTexture!==!0,je=X.__version===void 0||W===!0;let ot=R(x,Ge,Ce);J(n.TEXTURE_CUBE_MAP,x,Ce);let Ve;if(pe){Ae&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ot,me,Ge.width,Ge.height);for(let fe=0;fe<6;fe++){Ve=re[fe].mipmaps;for(let I=0;I<Ve.length;I++){const _e=Ve[I];x.format!==zn?we!==null?Ae?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I,0,0,_e.width,_e.height,we,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I,me,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I,0,0,_e.width,_e.height,we,Te,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I,me,_e.width,_e.height,0,we,Te,_e.data)}}}else{Ve=x.mipmaps,Ae&&je&&(Ve.length>0&&ot++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ot,me,re[0].width,re[0].height));for(let fe=0;fe<6;fe++)if(Ee){Ae?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,re[fe].width,re[fe].height,we,Te,re[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,me,re[fe].width,re[fe].height,0,we,Te,re[fe].data);for(let I=0;I<Ve.length;I++){const ge=Ve[I].image[fe].image;Ae?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I+1,0,0,ge.width,ge.height,we,Te,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I+1,me,ge.width,ge.height,0,we,Te,ge.data)}}else{Ae?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,we,Te,re[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,me,we,Te,re[fe]);for(let I=0;I<Ve.length;I++){const _e=Ve[I];Ae?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I+1,0,0,we,Te,_e.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I+1,me,we,Te,_e.image[fe])}}}y(x,Ce)&&v(n.TEXTURE_CUBE_MAP),X.__version=O.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Se(T,x,P,W,O,X){const ae=s.convert(P.format,P.colorSpace),oe=s.convert(P.type),ue=S(P.internalFormat,ae,oe,P.colorSpace);if(!i.get(x).__hasExternalTextures){const Ee=Math.max(1,x.width>>X),re=Math.max(1,x.height>>X);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,X,ue,Ee,re,x.depth,0,ae,oe,null):t.texImage2D(O,X,ue,Ee,re,0,ae,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),V(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,O,i.get(P).__webglTexture,0,K(x)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,O,i.get(P).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(T,x,P){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let W=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(P||V(x)){const O=x.depthTexture;O&&O.isDepthTexture&&(O.type===Fi?W=n.DEPTH_COMPONENT32F:O.type===Oi&&(W=n.DEPTH_COMPONENT24));const X=K(x);V(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,W,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,X,W,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,W,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const W=K(x);P&&V(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,x.width,x.height):V(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const W=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let O=0;O<W.length;O++){const X=W[O],ae=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),ue=S(X.internalFormat,ae,oe,X.colorSpace),pe=K(x);P&&V(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ue,x.width,x.height):V(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,ue,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ue,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const W=i.get(x.depthTexture).__webglTexture,O=K(x);if(x.depthTexture.format===Mr)V(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(x.depthTexture.format===gs)V(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function be(T){const x=i.get(T),P=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Ne(x.__webglFramebuffer,T)}else if(P){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]=n.createRenderbuffer(),De(x.__webglDepthbuffer[W],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),De(x.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(T,x,P){const W=i.get(T);x!==void 0&&Se(W.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&be(T)}function E(T){const x=T.texture,P=i.get(T),W=i.get(x);T.addEventListener("dispose",L),T.isWebGLMultipleRenderTargets!==!0&&(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,o.memory.textures++);const O=T.isWebGLCubeRenderTarget===!0,X=T.isWebGLMultipleRenderTargets===!0,ae=m(T)||a;if(O){P.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer[oe]=[];for(let ue=0;ue<x.mipmaps.length;ue++)P.__webglFramebuffer[oe][ue]=n.createFramebuffer()}else P.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)P.__webglFramebuffer[oe]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(X)if(r.drawBuffers){const oe=T.texture;for(let ue=0,pe=oe.length;ue<pe;ue++){const Ee=i.get(oe[ue]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&V(T)===!1){const oe=X?x:[x];P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ue=0;ue<oe.length;ue++){const pe=oe[ue];P.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ue]);const Ee=s.convert(pe.format,pe.colorSpace),re=s.convert(pe.type),Ge=S(pe.internalFormat,Ee,re,pe.colorSpace,T.isXRRenderTarget===!0),Ce=K(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Ge,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,P.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),De(P.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(O){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),J(n.TEXTURE_CUBE_MAP,x,ae);for(let oe=0;oe<6;oe++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)Se(P.__webglFramebuffer[oe][ue],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else Se(P.__webglFramebuffer[oe],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);y(x,ae)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){const oe=T.texture;for(let ue=0,pe=oe.length;ue<pe;ue++){const Ee=oe[ue],re=i.get(Ee);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),J(n.TEXTURE_2D,Ee,ae),Se(P.__webglFramebuffer,T,Ee,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),y(Ee,ae)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?oe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,W.__webglTexture),J(oe,x,ae),a&&x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)Se(P.__webglFramebuffer[ue],T,x,n.COLOR_ATTACHMENT0,oe,ue);else Se(P.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,oe,0);y(x,ae)&&v(oe),t.unbindTexture()}T.depthBuffer&&be(T)}function D(T){const x=m(T)||a,P=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let W=0,O=P.length;W<O;W++){const X=P[W];if(y(X,x)){const ae=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(X).__webglTexture;t.bindTexture(ae,oe),v(ae),t.unbindTexture()}}}function N(T){if(a&&T.samples>0&&V(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],P=T.width,W=T.height;let O=n.COLOR_BUFFER_BIT;const X=[],ae=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(T),ue=T.isWebGLMultipleRenderTargets===!0;if(ue)for(let pe=0;pe<x.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){X.push(n.COLOR_ATTACHMENT0+pe),T.depthBuffer&&X.push(ae);const Ee=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ee===!1&&(T.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[pe]),Ee===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ae])),ue){const re=i.get(x[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,P,W,0,0,P,W,O,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let pe=0;pe<x.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,oe.__webglColorRenderbuffer[pe]);const Ee=i.get(x[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function K(T){return Math.min(r.maxSamples,T.samples)}function V(T){const x=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Q(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function ne(T,x){const P=T.colorSpace,W=T.format,O=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===pc||P!==Ei&&P!==Cn&&(Je.getTransfer(P)===at?a===!1?e.has("EXT_sRGB")===!0&&W===zn?(T.format=pc,T.minFilter=Rn,T.generateMipmaps=!1):x=Jp.sRGBToLinear(x):(W!==zn||O!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),x}this.allocateTextureUnit=U,this.resetTextureUnits=ee,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=te,this.rebindTextures=Ye,this.setupRenderTarget=E,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=V}function MT(n,e,t){const i=t.isWebGL2;function r(s,o=Cn){let a;const l=Je.getTransfer(o);if(s===ki)return n.UNSIGNED_BYTE;if(s===Vp)return n.UNSIGNED_SHORT_4_4_4_4;if(s===kp)return n.UNSIGNED_SHORT_5_5_5_1;if(s===nx)return n.BYTE;if(s===ix)return n.SHORT;if(s===iu)return n.UNSIGNED_SHORT;if(s===Hp)return n.INT;if(s===Oi)return n.UNSIGNED_INT;if(s===Fi)return n.FLOAT;if(s===ao)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rx)return n.ALPHA;if(s===zn)return n.RGBA;if(s===sx)return n.LUMINANCE;if(s===ox)return n.LUMINANCE_ALPHA;if(s===Mr)return n.DEPTH_COMPONENT;if(s===gs)return n.DEPTH_STENCIL;if(s===pc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ax)return n.RED;if(s===Wp)return n.RED_INTEGER;if(s===lx)return n.RG;if(s===Xp)return n.RG_INTEGER;if(s===qp)return n.RGBA_INTEGER;if(s===sl||s===ol||s===al||s===ll)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===sl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===sl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ol)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===al)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ll)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xf||s===Mf||s===Sf||s===yf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===xf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Sf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ef||s===Tf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ef)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Tf)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bf||s===Af||s===wf||s===Rf||s===Cf||s===Pf||s===Lf||s===Df||s===Uf||s===If||s===Nf||s===Of||s===Ff||s===Bf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===bf)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Af)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wf)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rf)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cf)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pf)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Lf)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Df)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Uf)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===If)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nf)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Of)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ff)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bf)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cl||s===zf||s===Gf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===cl)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cx||s===Hf||s===Vf||s===kf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===cl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Hf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class ST extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kr extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yT={type:"move"};class Il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,i),d=this._getHandJoint(c,p);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),_=.02,g=.005;c.inputState.pinching&&h>_+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=_-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ET extends xs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,_=null,g=null;const p=t.getContextAttributes();let m=null,d=null;const y=[],v=[],S=new qe;let R=null;const w=new _n;w.layers.enable(1),w.viewport=new Pt;const A=new _n;A.layers.enable(2),A.viewport=new Pt;const L=[w,A],M=new ST;M.layers.enable(1),M.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let se=y[J];return se===void 0&&(se=new Il,y[J]=se),se.getTargetRaySpace()},this.getControllerGrip=function(J){let se=y[J];return se===void 0&&(se=new Il,y[J]=se),se.getGripSpace()},this.getHand=function(J){let se=y[J];return se===void 0&&(se=new Il,y[J]=se),se.getHandSpace()};function G(J){const se=v.indexOf(J.inputSource);if(se===-1)return;const de=y[se];de!==void 0&&(de.update(J.inputSource,J.frame,c||o),de.dispatchEvent({type:J.type,data:J.inputSource}))}function ee(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",U);for(let J=0;J<y.length;J++){const se=v[J];se!==null&&(v[J]=null,y[J].disconnect(se))}b=null,F=null,e.setRenderTarget(m),_=null,h=null,f=null,r=null,d=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:_},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),d=new Er(_.framebufferWidth,_.framebufferHeight,{format:zn,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let se=null,de=null,Me=null;p.depth&&(Me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=p.stencil?gs:Mr,de=p.stencil?xr:Oi);const Se={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Er(h.textureWidth,h.textureHeight,{format:zn,type:ki,depthTexture:new fm(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const De=e.properties.get(d);De.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(J){for(let se=0;se<J.removed.length;se++){const de=J.removed[se],Me=v.indexOf(de);Me>=0&&(v[Me]=null,y[Me].disconnect(de))}for(let se=0;se<J.added.length;se++){const de=J.added[se];let Me=v.indexOf(de);if(Me===-1){for(let De=0;De<y.length;De++)if(De>=v.length){v.push(de),Me=De;break}else if(v[De]===null){v[De]=de,Me=De;break}if(Me===-1)break}const Se=y[Me];Se&&Se.connect(de)}}const z=new k,H=new k;function Y(J,se,de){z.setFromMatrixPosition(se.matrixWorld),H.setFromMatrixPosition(de.matrixWorld);const Me=z.distanceTo(H),Se=se.projectionMatrix.elements,De=de.projectionMatrix.elements,Ne=Se[14]/(Se[10]-1),be=Se[14]/(Se[10]+1),Ye=(Se[9]+1)/Se[5],E=(Se[9]-1)/Se[5],D=(Se[8]-1)/Se[0],N=(De[8]+1)/De[0],K=Ne*D,V=Ne*N,Q=Me/(-D+N),ne=Q*-D;se.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ne),J.translateZ(Q),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const T=Ne+Q,x=be+Q,P=K-ne,W=V+(Me-ne),O=Ye*be/x*T,X=E*be/x*T;J.projectionMatrix.makePerspective(P,W,O,X,T,x),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function q(J,se){se===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(se.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;M.near=A.near=w.near=J.near,M.far=A.far=w.far=J.far,(b!==M.near||F!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,F=M.far);const se=J.parent,de=M.cameras;q(M,se);for(let Me=0;Me<de.length;Me++)q(de[Me],se);de.length===2?Y(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),te(J,M,se)};function te(J,se,de){de===null?J.matrix.copy(se.matrixWorld):(J.matrix.copy(de.matrixWorld),J.matrix.invert(),J.matrix.multiply(se.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=mc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&_===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=J)};let ie=null;function ce(J,se){if(u=se.getViewerPose(c||o),g=se,u!==null){const de=u.views;_!==null&&(e.setRenderTargetFramebuffer(d,_.framebuffer),e.setRenderTarget(d));let Me=!1;de.length!==M.cameras.length&&(M.cameras.length=0,Me=!0);for(let Se=0;Se<de.length;Se++){const De=de[Se];let Ne=null;if(_!==null)Ne=_.getViewport(De);else{const Ye=f.getViewSubImage(h,De);Ne=Ye.viewport,Se===0&&(e.setRenderTargetTextures(d,Ye.colorTexture,h.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(d))}let be=L[Se];be===void 0&&(be=new _n,be.layers.enable(Se),be.viewport=new Pt,L[Se]=be),be.matrix.fromArray(De.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(De.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Se===0&&(M.matrix.copy(be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Me===!0&&M.cameras.push(be)}}for(let de=0;de<y.length;de++){const Me=v[de],Se=y[de];Me!==null&&Se!==void 0&&Se.update(Me,se,c||o)}ie&&ie(J,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const le=new cm;le.setAnimationLoop(ce),this.setAnimationLoop=function(J){ie=J},this.dispose=function(){}}}function TT(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,om(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&_(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),p(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ln&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ln&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function _(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function p(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bT(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;i.uniformBlockBinding(y,S)}function c(y,v){let S=r[y.id];S===void 0&&(g(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(y,R);const w=e.render.frame;s[y.id]!==w&&(h(y),s[y.id]=w)}function u(y){const v=f();y.__bindingPointIndex=v;const S=n.createBuffer(),R=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=r[y.id],S=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,A=S.length;w<A;w++){const L=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,b=L.length;M<b;M++){const F=L[M];if(_(F,w,M,R)===!0){const G=F.__offset,ee=Array.isArray(F.value)?F.value:[F.value];let U=0;for(let z=0;z<ee.length;z++){const H=ee[z],Y=p(H);typeof H=="number"||typeof H=="boolean"?(F.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,G+U,F.__data)):H.isMatrix3?(F.__data[0]=H.elements[0],F.__data[1]=H.elements[1],F.__data[2]=H.elements[2],F.__data[3]=0,F.__data[4]=H.elements[3],F.__data[5]=H.elements[4],F.__data[6]=H.elements[5],F.__data[7]=0,F.__data[8]=H.elements[6],F.__data[9]=H.elements[7],F.__data[10]=H.elements[8],F.__data[11]=0):(H.toArray(F.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(y,v,S,R){const w=y.value,A=v+"_"+S;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const L=R[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return R[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(y){const v=y.uniforms;let S=0;const R=16;for(let A=0,L=v.length;A<L;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,F=M.length;b<F;b++){const G=M[b],ee=Array.isArray(G.value)?G.value:[G.value];for(let U=0,z=ee.length;U<z;U++){const H=ee[U],Y=p(H),q=S%R;q!==0&&R-q<Y.boundary&&(S+=R-q),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=Y.storage}}}const w=S%R;return w>0&&(S+=R-w),y.__size=S,y.__cache={},this}function p(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class cu{constructor(e={}){const{canvas:t=Sx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,m=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=Vi,this.toneMappingExposure=1;const v=this;let S=!1,R=0,w=0,A=null,L=-1,M=null;const b=new Pt,F=new Pt;let G=null;const ee=new $e(0);let U=0,z=t.width,H=t.height,Y=1,q=null,te=null;const ie=new Pt(0,0,z,H),ce=new Pt(0,0,z,H);let le=!1;const J=new ou;let se=!1,de=!1,Me=null;const Se=new yt,De=new qe,Ne=new k,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return A===null?Y:1}let E=i;function D(C,B){for(let $=0;$<C.length;$++){const Z=C[$],j=t.getContext(Z,B);if(j!==null)return j}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nu}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",_e,!1),E===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),E=D(B,C),E===null)throw D(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&E instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let N,K,V,Q,ne,T,x,P,W,O,X,ae,oe,ue,pe,Ee,re,Ge,Ce,we,Te,me,Ae,je;function ot(){N=new Ny(E),K=new Cy(E,N,e),N.init(K),me=new MT(E,N,K),V=new vT(E,N,K),Q=new By(E),ne=new rT,T=new xT(E,N,V,ne,K,me,Q),x=new Ly(v),P=new Iy(v),W=new qx(E,K),Ae=new wy(E,N,W,K),O=new Oy(E,W,Q,Ae),X=new Vy(E,O,W,Q),Ce=new Hy(E,K,T),Ee=new Py(ne),ae=new iT(v,x,P,N,K,Ae,Ee),oe=new TT(v,ne),ue=new oT,pe=new hT(N,K),Ge=new Ay(v,x,P,V,X,h,l),re=new gT(v,X,K),je=new bT(E,Q,K,V),we=new Ry(E,N,Q,K),Te=new Fy(E,N,Q,K),Q.programs=ae.programs,v.capabilities=K,v.extensions=N,v.properties=ne,v.renderLists=ue,v.shadowMap=re,v.state=V,v.info=Q}ot();const Ve=new ET(v,E);this.xr=Ve,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const C=N.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=N.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(z,H,!1))},this.getSize=function(C){return C.set(z,H)},this.setSize=function(C,B,$=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,H=B,t.width=Math.floor(C*Y),t.height=Math.floor(B*Y),$===!0&&(t.style.width=C+"px",t.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(z*Y,H*Y).floor()},this.setDrawingBufferSize=function(C,B,$){z=C,H=B,Y=$,t.width=Math.floor(C*$),t.height=Math.floor(B*$),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,B,$,Z){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,B,$,Z),V.viewport(b.copy(ie).multiplyScalar(Y).floor())},this.getScissor=function(C){return C.copy(ce)},this.setScissor=function(C,B,$,Z){C.isVector4?ce.set(C.x,C.y,C.z,C.w):ce.set(C,B,$,Z),V.scissor(F.copy(ce).multiplyScalar(Y).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(C){V.setScissorTest(le=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){te=C},this.getClearColor=function(C){return C.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(C=!0,B=!0,$=!0){let Z=0;if(C){let j=!1;if(A!==null){const xe=A.texture.format;j=xe===qp||xe===Xp||xe===Wp}if(j){const xe=A.texture.type,ye=xe===ki||xe===Oi||xe===iu||xe===xr||xe===Vp||xe===kp,Pe=Ge.getClearColor(),Ue=Ge.getClearAlpha(),He=Pe.r,Oe=Pe.g,Fe=Pe.b;ye?(_[0]=He,_[1]=Oe,_[2]=Fe,_[3]=Ue,E.clearBufferuiv(E.COLOR,0,_)):(g[0]=He,g[1]=Oe,g[2]=Fe,g[3]=Ue,E.clearBufferiv(E.COLOR,0,g))}else Z|=E.COLOR_BUFFER_BIT}B&&(Z|=E.DEPTH_BUFFER_BIT),$&&(Z|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ue.dispose(),pe.dispose(),ne.dispose(),x.dispose(),P.dispose(),X.dispose(),Ae.dispose(),je.dispose(),ae.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",kt),Ve.removeEventListener("sessionend",it),Me&&(Me.dispose(),Me=null),Wt.stop()};function fe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=Q.autoReset,B=re.enabled,$=re.autoUpdate,Z=re.needsUpdate,j=re.type;ot(),Q.autoReset=C,re.enabled=B,re.autoUpdate=$,re.needsUpdate=Z,re.type=j}function _e(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ge(C){const B=C.target;B.removeEventListener("dispose",ge),Le(B)}function Le(C){Re(C),ne.remove(C)}function Re(C){const B=ne.get(C).programs;B!==void 0&&(B.forEach(function($){ae.releaseProgram($)}),C.isShaderMaterial&&ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,$,Z,j,xe){B===null&&(B=be);const ye=j.isMesh&&j.matrixWorld.determinant()<0,Pe=Am(C,B,$,Z,j);V.setMaterial(Z,ye);let Ue=$.index,He=1;if(Z.wireframe===!0){if(Ue=O.getWireframeAttribute($),Ue===void 0)return;He=2}const Oe=$.drawRange,Fe=$.attributes.position;let mt=Oe.start*He,un=(Oe.start+Oe.count)*He;xe!==null&&(mt=Math.max(mt,xe.start*He),un=Math.min(un,(xe.start+xe.count)*He)),Ue!==null?(mt=Math.max(mt,0),un=Math.min(un,Ue.count)):Fe!=null&&(mt=Math.max(mt,0),un=Math.min(un,Fe.count));const Rt=un-mt;if(Rt<0||Rt===1/0)return;Ae.setup(j,Z,Pe,$,Ue);let ii,ct=we;if(Ue!==null&&(ii=W.get(Ue),ct=Te,ct.setIndex(ii)),j.isMesh)Z.wireframe===!0?(V.setLineWidth(Z.wireframeLinewidth*Ye()),ct.setMode(E.LINES)):ct.setMode(E.TRIANGLES);else if(j.isLine){let ke=Z.linewidth;ke===void 0&&(ke=1),V.setLineWidth(ke*Ye()),j.isLineSegments?ct.setMode(E.LINES):j.isLineLoop?ct.setMode(E.LINE_LOOP):ct.setMode(E.LINE_STRIP)}else j.isPoints?ct.setMode(E.POINTS):j.isSprite&&ct.setMode(E.TRIANGLES);if(j.isBatchedMesh)ct.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)ct.renderInstances(mt,Rt,j.count);else if($.isInstancedBufferGeometry){const ke=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Na=Math.min($.instanceCount,ke);ct.renderInstances(mt,Rt,Na)}else ct.render(mt,Rt)};function tt(C,B,$){C.transparent===!0&&C.side===gi&&C.forceSinglePass===!1?(C.side=ln,C.needsUpdate=!0,_o(C,B,$),C.side=ji,C.needsUpdate=!0,_o(C,B,$),C.side=gi):_o(C,B,$)}this.compile=function(C,B,$=null){$===null&&($=C),m=pe.get($),m.init(),y.push(m),$.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),C!==$&&C.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(v._useLegacyLights);const Z=new Set;return C.traverse(function(j){const xe=j.material;if(xe)if(Array.isArray(xe))for(let ye=0;ye<xe.length;ye++){const Pe=xe[ye];tt(Pe,$,j),Z.add(Pe)}else tt(xe,$,j),Z.add(xe)}),y.pop(),m=null,Z},this.compileAsync=function(C,B,$=null){const Z=this.compile(C,B,$);return new Promise(j=>{function xe(){if(Z.forEach(function(ye){ne.get(ye).currentProgram.isReady()&&Z.delete(ye)}),Z.size===0){j(C);return}setTimeout(xe,10)}N.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let nt=null;function wt(C){nt&&nt(C)}function kt(){Wt.stop()}function it(){Wt.start()}const Wt=new cm;Wt.setAnimationLoop(wt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(C){nt=C,Ve.setAnimationLoop(C),C===null?Wt.stop():Wt.start()},Ve.addEventListener("sessionstart",kt),Ve.addEventListener("sessionend",it),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(B),B=Ve.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,B,A),m=pe.get(C,y.length),m.init(),y.push(m),Se.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J.setFromProjectionMatrix(Se),de=this.localClippingEnabled,se=Ee.init(this.clippingPlanes,de),p=ue.get(C,d.length),p.init(),d.push(p),Wn(C,B,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(q,te),this.info.render.frame++,se===!0&&Ee.beginShadows();const $=m.state.shadowsArray;if(re.render($,C,B),se===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ge.render(p,C),m.setupLights(v._useLegacyLights),B.isArrayCamera){const Z=B.cameras;for(let j=0,xe=Z.length;j<xe;j++){const ye=Z[j];du(p,C,ye,ye.viewport)}}else du(p,C,B);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(v,C,B),Ae.resetDefaultState(),L=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?p=d[d.length-1]:p=null};function Wn(C,B,$,Z){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||J.intersectsSprite(C)){Z&&Ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Se);const ye=X.update(C),Pe=C.material;Pe.visible&&p.push(C,ye,Pe,$,Ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||J.intersectsObject(C))){const ye=X.update(C),Pe=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ne.copy(C.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ne.copy(ye.boundingSphere.center)),Ne.applyMatrix4(C.matrixWorld).applyMatrix4(Se)),Array.isArray(Pe)){const Ue=ye.groups;for(let He=0,Oe=Ue.length;He<Oe;He++){const Fe=Ue[He],mt=Pe[Fe.materialIndex];mt&&mt.visible&&p.push(C,ye,mt,$,Ne.z,Fe)}}else Pe.visible&&p.push(C,ye,Pe,$,Ne.z,null)}}const xe=C.children;for(let ye=0,Pe=xe.length;ye<Pe;ye++)Wn(xe[ye],B,$,Z)}function du(C,B,$,Z){const j=C.opaque,xe=C.transmissive,ye=C.transparent;m.setupLightsView($),se===!0&&Ee.setGlobalState(v.clippingPlanes,$),xe.length>0&&bm(j,xe,B,$),Z&&V.viewport(b.copy(Z)),j.length>0&&mo(j,B,$),xe.length>0&&mo(xe,B,$),ye.length>0&&mo(ye,B,$),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function bm(C,B,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const xe=K.isWebGL2;Me===null&&(Me=new Er(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?ao:ki,minFilter:oo,samples:xe?4:0})),v.getDrawingBufferSize(De),xe?Me.setSize(De.x,De.y):Me.setSize(_c(De.x),_c(De.y));const ye=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor(ee),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();const Pe=v.toneMapping;v.toneMapping=Vi,mo(C,$,Z),T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me);let Ue=!1;for(let He=0,Oe=B.length;He<Oe;He++){const Fe=B[He],mt=Fe.object,un=Fe.geometry,Rt=Fe.material,ii=Fe.group;if(Rt.side===gi&&mt.layers.test(Z.layers)){const ct=Rt.side;Rt.side=ln,Rt.needsUpdate=!0,pu(mt,$,Z,un,Rt,ii),Rt.side=ct,Rt.needsUpdate=!0,Ue=!0}}Ue===!0&&(T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me)),v.setRenderTarget(ye),v.setClearColor(ee,U),v.toneMapping=Pe}function mo(C,B,$){const Z=B.isScene===!0?B.overrideMaterial:null;for(let j=0,xe=C.length;j<xe;j++){const ye=C[j],Pe=ye.object,Ue=ye.geometry,He=Z===null?ye.material:Z,Oe=ye.group;Pe.layers.test($.layers)&&pu(Pe,B,$,Ue,He,Oe)}}function pu(C,B,$,Z,j,xe){C.onBeforeRender(v,B,$,Z,j,xe),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(v,B,$,Z,C,xe),j.transparent===!0&&j.side===gi&&j.forceSinglePass===!1?(j.side=ln,j.needsUpdate=!0,v.renderBufferDirect($,B,Z,j,C,xe),j.side=ji,j.needsUpdate=!0,v.renderBufferDirect($,B,Z,j,C,xe),j.side=gi):v.renderBufferDirect($,B,Z,j,C,xe),C.onAfterRender(v,B,$,Z,j,xe)}function _o(C,B,$){B.isScene!==!0&&(B=be);const Z=ne.get(C),j=m.state.lights,xe=m.state.shadowsArray,ye=j.state.version,Pe=ae.getParameters(C,j.state,xe,B,$),Ue=ae.getProgramCacheKey(Pe);let He=Z.programs;Z.environment=C.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(C.isMeshStandardMaterial?P:x).get(C.envMap||Z.environment),He===void 0&&(C.addEventListener("dispose",ge),He=new Map,Z.programs=He);let Oe=He.get(Ue);if(Oe!==void 0){if(Z.currentProgram===Oe&&Z.lightsStateVersion===ye)return _u(C,Pe),Oe}else Pe.uniforms=ae.getUniforms(C),C.onBuild($,Pe,v),C.onBeforeCompile(Pe,v),Oe=ae.acquireProgram(Pe,Ue),He.set(Ue,Oe),Z.uniforms=Pe.uniforms;const Fe=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Fe.clippingPlanes=Ee.uniform),_u(C,Pe),Z.needsLights=Rm(C),Z.lightsStateVersion=ye,Z.needsLights&&(Fe.ambientLightColor.value=j.state.ambient,Fe.lightProbe.value=j.state.probe,Fe.directionalLights.value=j.state.directional,Fe.directionalLightShadows.value=j.state.directionalShadow,Fe.spotLights.value=j.state.spot,Fe.spotLightShadows.value=j.state.spotShadow,Fe.rectAreaLights.value=j.state.rectArea,Fe.ltc_1.value=j.state.rectAreaLTC1,Fe.ltc_2.value=j.state.rectAreaLTC2,Fe.pointLights.value=j.state.point,Fe.pointLightShadows.value=j.state.pointShadow,Fe.hemisphereLights.value=j.state.hemi,Fe.directionalShadowMap.value=j.state.directionalShadowMap,Fe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Fe.spotShadowMap.value=j.state.spotShadowMap,Fe.spotLightMatrix.value=j.state.spotLightMatrix,Fe.spotLightMap.value=j.state.spotLightMap,Fe.pointShadowMap.value=j.state.pointShadowMap,Fe.pointShadowMatrix.value=j.state.pointShadowMatrix),Z.currentProgram=Oe,Z.uniformsList=null,Oe}function mu(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=Jo.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function _u(C,B){const $=ne.get(C);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Am(C,B,$,Z,j){B.isScene!==!0&&(B=be),T.resetTextureUnits();const xe=B.fog,ye=Z.isMeshStandardMaterial?B.environment:null,Pe=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ei,Ue=(Z.isMeshStandardMaterial?P:x).get(Z.envMap||ye),He=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Oe=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Fe=!!$.morphAttributes.position,mt=!!$.morphAttributes.normal,un=!!$.morphAttributes.color;let Rt=Vi;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Rt=v.toneMapping);const ii=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ct=ii!==void 0?ii.length:0,ke=ne.get(Z),Na=m.state.lights;if(se===!0&&(de===!0||C!==M)){const bn=C===M&&Z.id===L;Ee.setState(Z,C,bn)}let dt=!1;Z.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Na.state.version||ke.outputColorSpace!==Pe||j.isBatchedMesh&&ke.batching===!1||!j.isBatchedMesh&&ke.batching===!0||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||j.isInstancedMesh&&ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ke.instancingColor===!1&&j.instanceColor!==null||ke.envMap!==Ue||Z.fog===!0&&ke.fog!==xe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ee.numPlanes||ke.numIntersection!==Ee.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==Oe||ke.morphTargets!==Fe||ke.morphNormals!==mt||ke.morphColors!==un||ke.toneMapping!==Rt||K.isWebGL2===!0&&ke.morphTargetsCount!==ct)&&(dt=!0):(dt=!0,ke.__version=Z.version);let Zi=ke.currentProgram;dt===!0&&(Zi=_o(Z,B,j));let gu=!1,Es=!1,Oa=!1;const Ot=Zi.getUniforms(),Ji=ke.uniforms;if(V.useProgram(Zi.program)&&(gu=!0,Es=!0,Oa=!0),Z.id!==L&&(L=Z.id,Es=!0),gu||M!==C){Ot.setValue(E,"projectionMatrix",C.projectionMatrix),Ot.setValue(E,"viewMatrix",C.matrixWorldInverse);const bn=Ot.map.cameraPosition;bn!==void 0&&bn.setValue(E,Ne.setFromMatrixPosition(C.matrixWorld)),K.logarithmicDepthBuffer&&Ot.setValue(E,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ot.setValue(E,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Es=!0,Oa=!0)}if(j.isSkinnedMesh){Ot.setOptional(E,j,"bindMatrix"),Ot.setOptional(E,j,"bindMatrixInverse");const bn=j.skeleton;bn&&(K.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Ot.setValue(E,"boneTexture",bn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Ot.setOptional(E,j,"batchingTexture"),Ot.setValue(E,"batchingTexture",j._matricesTexture,T));const Fa=$.morphAttributes;if((Fa.position!==void 0||Fa.normal!==void 0||Fa.color!==void 0&&K.isWebGL2===!0)&&Ce.update(j,$,Zi),(Es||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,Ot.setValue(E,"receiveShadow",j.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ji.envMap.value=Ue,Ji.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Es&&(Ot.setValue(E,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&wm(Ji,Oa),xe&&Z.fog===!0&&oe.refreshFogUniforms(Ji,xe),oe.refreshMaterialUniforms(Ji,Z,Y,H,Me),Jo.upload(E,mu(ke),Ji,T)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Jo.upload(E,mu(ke),Ji,T),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ot.setValue(E,"center",j.center),Ot.setValue(E,"modelViewMatrix",j.modelViewMatrix),Ot.setValue(E,"normalMatrix",j.normalMatrix),Ot.setValue(E,"modelMatrix",j.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const bn=Z.uniformsGroups;for(let Ba=0,Cm=bn.length;Ba<Cm;Ba++)if(K.isWebGL2){const vu=bn[Ba];je.update(vu,Zi),je.bind(vu,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function wm(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function Rm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,B,$){ne.get(C.texture).__webglTexture=B,ne.get(C.depthTexture).__webglTexture=$;const Z=ne.get(C);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const $=ne.get(C);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,$=0){A=C,R=B,w=$;let Z=!0,j=null,xe=!1,ye=!1;if(C){const Ue=ne.get(C);Ue.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(E.FRAMEBUFFER,null),Z=!1):Ue.__webglFramebuffer===void 0?T.setupRenderTarget(C):Ue.__hasExternalTextures&&T.rebindTextures(C,ne.get(C.texture).__webglTexture,ne.get(C.depthTexture).__webglTexture);const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ye=!0);const Oe=ne.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?j=Oe[B][$]:j=Oe[B],xe=!0):K.isWebGL2&&C.samples>0&&T.useMultisampledRTT(C)===!1?j=ne.get(C).__webglMultisampledFramebuffer:Array.isArray(Oe)?j=Oe[$]:j=Oe,b.copy(C.viewport),F.copy(C.scissor),G=C.scissorTest}else b.copy(ie).multiplyScalar(Y).floor(),F.copy(ce).multiplyScalar(Y).floor(),G=le;if(V.bindFramebuffer(E.FRAMEBUFFER,j)&&K.drawBuffers&&Z&&V.drawBuffers(C,j),V.viewport(b),V.scissor(F),V.setScissorTest(G),xe){const Ue=ne.get(C.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ue.__webglTexture,$)}else if(ye){const Ue=ne.get(C.texture),He=B||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ue.__webglTexture,$||0,He)}L=-1},this.readRenderTargetPixels=function(C,B,$,Z,j,xe,ye){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ne.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ye!==void 0&&(Pe=Pe[ye]),Pe){V.bindFramebuffer(E.FRAMEBUFFER,Pe);try{const Ue=C.texture,He=Ue.format,Oe=Ue.type;if(He!==zn&&me.convert(He)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Oe===ao&&(N.has("EXT_color_buffer_half_float")||K.isWebGL2&&N.has("EXT_color_buffer_float"));if(Oe!==ki&&me.convert(Oe)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Fi&&(K.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-Z&&$>=0&&$<=C.height-j&&E.readPixels(B,$,Z,j,me.convert(He),me.convert(Oe),xe)}finally{const Ue=A!==null?ne.get(A).__webglFramebuffer:null;V.bindFramebuffer(E.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(C,B,$=0){const Z=Math.pow(2,-$),j=Math.floor(B.image.width*Z),xe=Math.floor(B.image.height*Z);T.setTexture2D(B,0),E.copyTexSubImage2D(E.TEXTURE_2D,$,0,0,C.x,C.y,j,xe),V.unbindTexture()},this.copyTextureToTexture=function(C,B,$,Z=0){const j=B.image.width,xe=B.image.height,ye=me.convert($.format),Pe=me.convert($.type);T.setTexture2D($,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,$.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,$.unpackAlignment),B.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Z,C.x,C.y,j,xe,ye,Pe,B.image.data):B.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Z,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,ye,B.mipmaps[0].data):E.texSubImage2D(E.TEXTURE_2D,Z,C.x,C.y,ye,Pe,B.image),Z===0&&$.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(C,B,$,Z,j=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=C.max.x-C.min.x+1,ye=C.max.y-C.min.y+1,Pe=C.max.z-C.min.z+1,Ue=me.convert(Z.format),He=me.convert(Z.type);let Oe;if(Z.isData3DTexture)T.setTexture3D(Z,0),Oe=E.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)T.setTexture2DArray(Z,0),Oe=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,Z.unpackAlignment);const Fe=E.getParameter(E.UNPACK_ROW_LENGTH),mt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),un=E.getParameter(E.UNPACK_SKIP_PIXELS),Rt=E.getParameter(E.UNPACK_SKIP_ROWS),ii=E.getParameter(E.UNPACK_SKIP_IMAGES),ct=$.isCompressedTexture?$.mipmaps[j]:$.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,ct.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ct.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,C.min.x),E.pixelStorei(E.UNPACK_SKIP_ROWS,C.min.y),E.pixelStorei(E.UNPACK_SKIP_IMAGES,C.min.z),$.isDataTexture||$.isData3DTexture?E.texSubImage3D(Oe,j,B.x,B.y,B.z,xe,ye,Pe,Ue,He,ct.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D(Oe,j,B.x,B.y,B.z,xe,ye,Pe,Ue,ct.data)):E.texSubImage3D(Oe,j,B.x,B.y,B.z,xe,ye,Pe,Ue,He,ct),E.pixelStorei(E.UNPACK_ROW_LENGTH,Fe),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,mt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,un),E.pixelStorei(E.UNPACK_SKIP_ROWS,Rt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ii),j===0&&Z.generateMipmaps&&E.generateMipmap(Oe),V.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),V.unbindTexture()},this.resetState=function(){R=0,w=0,A=null,V.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ru?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===La?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?Sr:jp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sr?Dt:Ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class AT extends cu{}AT.prototype.isWebGL1Renderer=!0;class gm extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class vm extends Ms{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dh=new yt,vc=new tm,ko=new Da,Wo=new k;class wT extends Nt{constructor(e=new kn,t=new vm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(r),ko.radius+=s,e.ray.intersectsSphere(ko)===!1)return;Dh.copy(r).invert(),vc.copy(e.ray).applyMatrix4(Dh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let g=h,p=_;g<p;g++){const m=c.getX(g);Wo.fromBufferAttribute(f,m),Uh(Wo,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=h,p=_;g<p;g++)Wo.fromBufferAttribute(f,g),Uh(Wo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Uh(n,e,t,i,r,s,o){const a=vc.distanceSqToPoint(n);if(a<t){const l=new k;vc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class uu extends kn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],_=[];let g=0;const p=[],m=i/2;let d=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new yn(f,3)),this.setAttribute("normal",new yn(h,3)),this.setAttribute("uv",new yn(_,2));function y(){const S=new k,R=new k;let w=0;const A=(t-e)/i;for(let L=0;L<=s;L++){const M=[],b=L/s,F=b*(t-e)+e;for(let G=0;G<=r;G++){const ee=G/r,U=ee*l+a,z=Math.sin(U),H=Math.cos(U);R.x=F*z,R.y=-b*i+m,R.z=F*H,f.push(R.x,R.y,R.z),S.set(z,A,H).normalize(),h.push(S.x,S.y,S.z),_.push(ee,1-b),M.push(g++)}p.push(M)}for(let L=0;L<r;L++)for(let M=0;M<s;M++){const b=p[M][L],F=p[M+1][L],G=p[M+1][L+1],ee=p[M][L+1];u.push(b,F,ee),u.push(F,G,ee),w+=6}c.addGroup(d,w,0),d+=w}function v(S){const R=g,w=new qe,A=new k;let L=0;const M=S===!0?e:t,b=S===!0?1:-1;for(let G=1;G<=r;G++)f.push(0,m*b,0),h.push(0,b,0),_.push(.5,.5),g++;const F=g;for(let G=0;G<=r;G++){const U=G/r*l+a,z=Math.cos(U),H=Math.sin(U);A.x=M*H,A.y=m*b,A.z=M*z,f.push(A.x,A.y,A.z),h.push(0,b,0),w.x=z*.5+.5,w.y=H*.5*b+.5,_.push(w.x,w.y),g++}for(let G=0;G<r;G++){const ee=R+G,U=F+G;S===!0?u.push(U,U+1,ee):u.push(U+1,U,ee),L+=3}c.addGroup(d,L,S===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fu extends kn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new yn(s,3)),this.setAttribute("normal",new yn(s.slice(),3)),this.setAttribute("uv",new yn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new k,S=new k,R=new k;for(let w=0;w<t.length;w+=3)_(t[w+0],v),_(t[w+1],S),_(t[w+2],R),l(v,S,R,y)}function l(y,v,S,R){const w=R+1,A=[];for(let L=0;L<=w;L++){A[L]=[];const M=y.clone().lerp(S,L/w),b=v.clone().lerp(S,L/w),F=w-L;for(let G=0;G<=F;G++)G===0&&L===w?A[L][G]=M:A[L][G]=M.clone().lerp(b,G/F)}for(let L=0;L<w;L++)for(let M=0;M<2*(w-L)-1;M++){const b=Math.floor(M/2);M%2===0?(h(A[L][b+1]),h(A[L+1][b]),h(A[L][b])):(h(A[L][b+1]),h(A[L+1][b+1]),h(A[L+1][b]))}}function c(y){const v=new k;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(y),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function u(){const y=new k;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const S=m(y)/2/Math.PI+.5,R=d(y)/Math.PI+.5;o.push(S,1-R)}g(),f()}function f(){for(let y=0;y<o.length;y+=6){const v=o[y+0],S=o[y+2],R=o[y+4],w=Math.max(v,S,R),A=Math.min(v,S,R);w>.9&&A<.1&&(v<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function _(y,v){const S=y*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const y=new k,v=new k,S=new k,R=new k,w=new qe,A=new qe,L=new qe;for(let M=0,b=0;M<s.length;M+=9,b+=6){y.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),S.set(s[M+6],s[M+7],s[M+8]),w.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),L.set(o[b+4],o[b+5]),R.copy(y).add(v).add(S).divideScalar(3);const F=m(R);p(w,b+0,y,F),p(A,b+2,v,F),p(L,b+4,S,F)}}function p(y,v,S,R){R<0&&y.x===1&&(o[v]=y.x-1),S.x===0&&S.z===0&&(o[v]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.vertices,e.indices,e.radius,e.details)}}class hu extends fu{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hu(e.radius,e.detail)}}class xm extends Ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$p,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mm extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Nl=new yt,Ih=new k,Nh=new k;class RT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ou,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ih),Nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nh),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class CT extends RT{constructor(){super(new um(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sm extends Mm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new CT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ym extends Mm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Em{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Oh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Oh(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nu);const Tm=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},PT={__name:"ThreeBackground",setup(n){const e=Bs(null);return Ks(()=>{const t=new gm,i=new cu({canvas:e.value,antialias:!0,alpha:!0}),r=new _n(55,window.innerWidth/window.innerHeight,.1,100);r.position.set(0,0,6);const s=new hu(2.5,2),o=new xm({color:1910838,wireframe:!0,transparent:!0,opacity:.35}),a=new Gn(s,o);t.add(a);const l=new kn,c=800,u=new Float32Array(c*3);for(let d=0;d<c;d++){const y=12*Math.random(),v=Math.random()*Math.PI*2,S=Math.acos(2*Math.random()-1);u[d*3]=y*Math.sin(S)*Math.cos(v),u[d*3+1]=y*Math.sin(S)*Math.sin(v),u[d*3+2]=y*Math.cos(S)}l.setAttribute("position",new Vn(u,3));const f=new vm({color:4017504,size:.04,transparent:!0,opacity:.55}),h=new wT(l,f);t.add(h);const _=new Sm(16777215,.8);_.position.set(5,5,5),t.add(_),t.add(new ym(16777215,.25));function g(){const d=window.innerWidth,y=window.innerHeight;i.setSize(d,y),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.aspect=d/y,r.updateProjectionMatrix()}window.addEventListener("resize",g),g();const p=new Em;function m(){const d=p.getElapsedTime();a.rotation.x=d*.08,a.rotation.y=d*.12,h.rotation.y=d*.01,i.render(t,r),requestAnimationFrame(m)}m()}),(t,i)=>(_t(),gt("canvas",{ref_key:"canvas",ref:e},null,512))}},LT=Tm(PT,[["__scopeId","data-v-589a97a7"]]),DT={class:"triple-escalera"},UT={__name:"TripleEscalera",setup(n){const e=Bs(null);return Ks(()=>{const t=new gm,i=new cu({canvas:e.value,antialias:!0,alpha:!0}),r=new _n(50,1,.1,100);r.position.set(4,4,6),r.lookAt(0,2,0);const s=new Kr;t.add(s);function o(p,m){const d=new Kr,y=40;for(let v=0;v<y;v++){const S=v/y*Math.PI*4+m,R=v*.12,w=1.2,A=Math.cos(S)*w,L=Math.sin(S)*w,M=new Ss(.65,.05,.25),b=new xm({color:p,metalness:.1,roughness:.6}),F=new Gn(M,b);F.position.set(A,R,L),F.rotation.y=-S+Math.PI/2,d.add(F)}return d}[14070366,6989823,16777215].forEach((p,m)=>s.add(o(p,m*(Math.PI*2/3))));const l=new uu(1.55,1.55,.05,48,1,!0),c=new su({color:16777215,wireframe:!0,opacity:.15,transparent:!0}),u=new Gn(l,c);u.position.y=-.05,s.add(u);const f=new Sm(16777215,1);f.position.set(3,5,4),t.add(f),t.add(new ym(16777215,.35));function h(){const p=e.value.parentElement.getBoundingClientRect();i.setSize(p.width,p.height),r.aspect=p.width/p.height,r.updateProjectionMatrix()}window.addEventListener("resize",h),h();const _=new Em;function g(){const p=_.getElapsedTime();s.rotation.y=p*.25,i.render(t,r),requestAnimationFrame(g)}g()}),(t,i)=>(_t(),gt("div",DT,[ve("canvas",{ref_key:"canvas",ref:e},null,512),i[0]||(i[0]=ve("div",{class:"legend"},[ve("h3",{style:{margin:"0 0 .25rem","font-size":".9rem","letter-spacing":".05em","text-transform":"uppercase"}},"Triple escalera helicoidal"),ve("p",{style:{margin:"0","font-size":".7rem","line-height":"1.3",opacity:".75"}},"Visualización conceptual: tres hélices independientes comparten hueco sin cruzar peldaños.")],-1))]))}},IT=Tm(UT,[["__scopeId","data-v-69ad38f7"]]),NT={class:"sticky-nav"},OT=["href","onClick"],FT=["aria-pressed"],BT={key:0},zT={key:1},GT={class:"container"},HT={class:"grid cols-3",style:{"margin-top":"2rem"}},VT=["innerHTML"],kT={class:"container"},WT={class:"timeline"},XT={style:{margin:"0","font-size":"1rem"}},qT={style:{margin:".25rem 0 0",opacity:".85"}},YT={class:"container"},jT={class:"grid",style:{"margin-top":"1.5rem",gap:"2.2rem"}},$T={style:{flex:"1","min-width":"260px"}},KT={style:{flex:"1","min-width":"260px"}},ZT={class:"container"},JT={style:{"max-width":"720px","line-height":"1.5"}},QT={class:"grid cols-3",style:{"margin-top":"2rem"}},eb={style:{"font-size":".95rem"}},tb={class:"container"},nb={class:"container"},ib={class:"fact-list",style:{"margin-top":"1.25rem"}},rb={class:"container"},sb={class:"gallery",style:{"margin-top":"1.5rem"}},ob=["href"],ab=["src","alt"],lb={class:"container"},cb={style:{"margin-top":"1rem","line-height":"1.5"}},ub={__name:"App",setup(n){const e=[{titulo:"Ubicación",texto:`${Xt.ubicacion}<br><small>(${Xt.coordenadas.lat.toFixed(3)}, ${Xt.coordenadas.lng.toFixed(3)})</small>`},{titulo:"Fundación (tradición)",texto:Xt.fundacionAtribuida},{titulo:"Documento más antiguo",texto:Xt.documentoMasAntiguo},{titulo:"Capas estilísticas",texto:Xt.estilos.join("<br>")},{titulo:"Mecenazgo clave",texto:Xt.patronos.join("<br>")},{titulo:"Arquitecto destacado",texto:Xt.arquitectosDestacados.join(", ")}],t=[{id:"inicio",short:"Inicio"},{id:"datos",short:"Datos"},{id:"cronologia",short:"Crono"},{id:"arquitectura",short:"Arq."},{id:"panteon",short:"Panteón"},{id:"mapa",short:"Mapa"},{id:"curiosidades",short:"Curios."},{id:"galeria",short:"Galería"},{id:"creditos",short:"Créditos"}],i=Bs("inicio"),r=Bs(!1);let s=!1,o,a=!1;function l(_){i.value=_}function c(){var _;if(r.value=!r.value,r.value){document.documentElement.classList.add("no-scroll");const g=(_=document.elementFromPoint(window.innerWidth/2,window.innerHeight/2))==null?void 0:_.closest("section");g!=null&&g.id&&(i.value=g.id)}else document.documentElement.classList.remove("no-scroll")}Ks(()=>{const _=new Set,g=new IntersectionObserver(p=>{p.forEach(m=>{if(m.isIntersecting){if(r.value&&a&&m.target.id!==i.value)return;i.value=m.target.id,_.has(m.target.id)||(_.add(m.target.id),Fp.from(m.target.querySelectorAll("h2,.card,.timeline,.gallery, p, ul, figure"),{opacity:0,y:25,stagger:.05,duration:.8,ease:"power2.out"}))}})},{threshold:.35});t.forEach(p=>{const m=document.getElementById(p.id);m&&g.observe(m)}),window.addEventListener("keydown",p=>{p.key.toLowerCase()==="p"&&c(),r.value&&(p.key==="ArrowDown"||p.key==="PageDown")&&(p.preventDefault(),u(1)),r.value&&(p.key==="ArrowUp"||p.key==="PageUp")&&(p.preventDefault(),u(-1))})});function u(_){if(s)return;const g=t.findIndex(m=>m.id===i.value),p=t[g+_];if(p){s=!0,i.value=p.id;const m=document.getElementById(p.id);if(m){a=!0;const d=m.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:d,behavior:"smooth"})}clearTimeout(o),o=setTimeout(()=>{s=!1,a=!1},900)}}const f=Bs(null);let h=!1;return Ks(()=>{const _=()=>{var g;if(!h){const p=(g=f.value)==null?void 0:g.getBoundingClientRect();p&&p.top<window.innerHeight&&(h=!0,n0(()=>import("./leaflet-src-DTmlu4rB.js").then(m=>m.l),[]).then(m=>{const d=m.map(f.value).setView([Xt.coordenadas.lat,Xt.coordenadas.lng],17);m.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap"}).addTo(d),m.marker([Xt.coordenadas.lat,Xt.coordenadas.lng]).addTo(d).bindPopup(Xt.nombre)}),window.removeEventListener("scroll",_))}};window.addEventListener("scroll",_,{passive:!0}),_()}),(_,g)=>(_t(),gt(Tt,null,[ve("nav",NT,[(_t(),gt(Tt,null,si(t,p=>ve("a",{key:p.id,href:"#"+p.id,class:en({active:i.value===p.id}),onClick:m=>l(p.id)},dn(p.short),11,OT)),64))]),ve("button",{class:"present-btn",onClick:c,"aria-pressed":r.value.toString(),title:"Modo presentación (tecla P)"},[r.value?(_t(),gt("span",zT,"✕ Salir")):(_t(),gt("span",BT,"▶ Presentar"))],8,FT),ve("main",{class:en({"presentation-mode":r.value})},[ve("section",{id:"inicio",class:en(["hero",{active:i.value==="inicio"}])},[ei(LT),g[0]||(g[0]=_g('<div class="hero-content container"><span class="badge">Presentación Interactiva</span><h1 class="gradient-text">Convento de Santo Domingo de Bonaval</h1><p style="font-size:1.1rem;max-width:620px;line-height:1.5;">Recorrido inmersivo por la historia, arquitectura y significado cultural de uno de los conjuntos monásticos más sugerentes de Santiago de Compostela. Experimenta su evolución de lo gótico al barroco y descubre sus secretos espaciales.</p><p style="margin-top:1.5rem;font-size:.9rem;opacity:.75;">Desplázate o usa el menú superior · Construido con Vue + Vite</p></div>',1))],2),ve("section",{id:"datos",class:en({active:i.value==="datos"})},[ve("div",GT,[g[1]||(g[1]=ve("h2",{class:"section-title"},"Datos esenciales",-1)),ve("div",HT,[(_t(),gt(Tt,null,si(e,p=>ve("div",{class:"card",key:p.titulo},[ve("h3",null,dn(p.titulo),1),ve("p",{innerHTML:p.texto},null,8,VT)])),64))])])],2),ve("section",{id:"cronologia",class:en({active:i.value==="cronologia"})},[ve("div",kT,[g[2]||(g[2]=ve("h2",{class:"section-title"},"Cronología",-1)),ve("div",WT,[(_t(!0),gt(Tt,null,si(fi(gv),p=>(_t(),gt("div",{class:"event",key:p.fecha},[ve("h3",XT,dn(p.fecha),1),ve("p",qT,dn(p.texto),1)]))),128))])])],2),ve("section",{id:"arquitectura",class:en({active:i.value==="arquitectura"})},[ve("div",YT,[g[6]||(g[6]=ve("h2",{class:"section-title"},"Arquitectura y elementos singulares",-1)),ve("div",jT,[ve("div",$T,[g[3]||(g[3]=ve("h3",null,"Capas estilísticas",-1)),ve("ul",null,[(_t(!0),gt(Tt,null,si(fi(Xt).estilos,p=>(_t(),gt("li",{key:p},dn(p),1))),128))]),g[4]||(g[4]=ve("h3",{style:{"margin-top":"1.5rem"}},"Elementos destacados",-1)),ve("ul",null,[(_t(!0),gt(Tt,null,si(fi(Xt).elementosSingulares,p=>(_t(),gt("li",{key:p},dn(p),1))),128))])]),ve("div",KT,[ei(IT)]),g[5]||(g[5]=ve("div",{style:{flex:"1","min-width":"260px"}},[ve("h3",null,"Claustro: artificio óptico"),ve("p",{style:{opacity:".85"}},"Distribución de pilastras y arcos modulada para disimular la planta trapezoidal medieval y generar percepción de cuadrado perfecto. Recurso barroco para controlar la experiencia espacial."),ve("h3",{style:{"margin-top":"1.5rem"}},"Materialidad"),ve("p",{style:{opacity:".85"}},"Granito local, soluciones estructurales de cantería avanzada (escalera) y falsa bóveda interior en la iglesia. Decoración sobria exterior con acentos de retablística e imaginería hoy dispersa.")],-1))])])],2),ve("section",{id:"panteon",class:en({active:i.value==="panteon"})},[ve("div",ZT,[g[8]||(g[8]=ve("h2",{class:"section-title"},"Panteón de Galegos Ilustres",-1)),ve("p",JT,dn(fi(ff).descripcion),1),ve("div",QT,[(_t(!0),gt(Tt,null,si(fi(ff).figuras,p=>(_t(),gt("div",{class:"card",key:p},[ve("h3",eb,dn(p),1),g[7]||(g[7]=ve("p",{style:{opacity:".7"}},"Figura señera en la identidad cultural gallega.",-1))]))),128))])])],2),ve("section",{id:"mapa",class:en({active:i.value==="mapa"})},[ve("div",tb,[g[9]||(g[9]=ve("h2",{class:"section-title"},"Localización",-1)),g[10]||(g[10]=ve("p",null,"Extramuros medievales, junto a la Porta do Camiño. Hoy articulado con parque público y museo.",-1)),ve("div",{class:"map-container",ref_key:"mapEl",ref:f},null,512)])],2),ve("section",{id:"curiosidades",class:en({active:i.value==="curiosidades"})},[ve("div",nb,[g[11]||(g[11]=ve("h2",{class:"section-title"},"Curiosidades",-1)),ve("ul",ib,[(_t(!0),gt(Tt,null,si(fi(vv),p=>(_t(),gt("li",{key:p},dn(p),1))),128))])])],2),ve("section",{id:"galeria",class:en({active:i.value==="galeria"})},[ve("div",rb,[g[12]||(g[12]=ve("h2",{class:"section-title"},"Galería (CC)",-1)),ve("div",sb,[(_t(!0),gt(Tt,null,si(fi(xv),p=>(_t(),gt("figure",{key:p.url},[ve("a",{href:p.url,target:"_blank",rel:"noopener"},[ve("img",{src:p.img,alt:p.titulo,loading:"lazy"},null,8,ab)],8,ob),ve("figcaption",null,dn(p.titulo)+" · "+dn(p.licencia),1)]))),128))])])],2),ve("section",{id:"creditos",class:en({active:i.value==="creditos"})},[ve("div",lb,[g[13]||(g[13]=ve("h2",{class:"section-title"},"Créditos y fuentes",-1)),ve("ul",cb,[(_t(!0),gt(Tt,null,si(fi(Mv),p=>(_t(),gt("li",{key:p},dn(p),1))),128))]),g[14]||(g[14]=ve("p",{style:{"margin-top":"1rem","font-size":".75rem",opacity:".6"}},"Texto enciclopédico original de Wikipedia bajo licencia CC BY-SA 4.0. Esta página muestra síntesis y reorganización educativa.",-1))])],2)],2),g[15]||(g[15]=ve("footer",null," © 2025 Presentación educativa · Proyecto académico ",-1))],64))}};Zg(ub).mount("#app");
