(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const Bt=!1;var ft=Array.isArray,Tn=Array.prototype.indexOf,ct=Array.from,it=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,Vt=Object.getOwnPropertyDescriptors,Fn=Object.prototype,Dn=Array.prototype,vt=Object.getPrototypeOf,kt=Object.isExtensible;function Mn(e){return e()}function at(e){for(var t=0;t<e.length;t++)e[t]()}function Nn(){var e,t,n=new Promise((i,s)=>{e=i,t=s});return{promise:n,resolve:e,reject:t}}const H=2,Ht=4,ht=8,Ce=16,ae=32,ge=64,Gt=128,W=256,He=512,R=1024,$=2048,fe=4096,Q=8192,Se=16384,dt=32768,Yt=65536,Ot=1<<17,jn=1<<18,Pe=1<<19,Wt=1<<20,st=1<<21,gt=1<<22,he=1<<23,De=Symbol("$state"),Pn=Symbol(""),pt=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function In(){throw new Error("https://svelte.dev/e/await_outside_boundary")}function Rn(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function zn(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Un(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function qn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Bn(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Vn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Hn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Gn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Yn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const Wn=1,$n=2,Kn=16,Xn=2,P=Symbol(),Qn="http://www.w3.org/1999/xhtml";let Zn=!1;function $t(e){return e===this.v}function Jn(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Kt(e){return!Jn(e,this.v)}let Ie=!1,er=!1;function tr(){Ie=!0}let j=null;function Ge(e){j=e}function Xt(e,t=!1,n){j={p:j,c:null,e:null,s:e,x:null,l:Ie&&!t?{s:null,u:null,$:[]}:null}}function Qt(e){var t=j,n=t.e;if(n!==null){t.e=null;for(var i of n)vn(i)}return j=t.p,{}}function Re(){return!Ie||j!==null&&j.l===null}const nr=new WeakMap;function rr(e){var t=O;if(t===null)return k.f|=he,e;if((t.f&dt)===0){if((t.f&Gt)===0)throw!t.parent&&e instanceof Error&&Zt(e),e;t.b.error(e)}else bt(e,t)}function bt(e,t){for(;t!==null;){if((t.f&Gt)!==0)try{t.b.error(e);return}catch(n){e=n}t=t.parent}throw e instanceof Error&&Zt(e),e}function Zt(e){const t=nr.get(e);t&&(it(e,"message",{value:t.message}),it(e,"stack",{value:t.stack}))}let Ye=[];function ir(){var e=Ye;Ye=[],at(e)}function ar(e){Ye.length===0&&queueMicrotask(ir),Ye.push(e)}function sr(){for(var e=O.b;e!==null&&!e.has_pending_snippet();)e=e.parent;return e===null&&In(),e}function mt(e){var t=H|$,n=k!==null&&(k.f&H)!==0?k:null;return O===null||n!==null&&(n.f&W)!==0?t|=W:O.f|=Pe,{ctx:j,deps:null,effects:null,equals:$t,f:t,fn:e,reactions:null,rv:0,v:P,wv:0,parent:n??O,ac:null}}function or(e,t){let n=O;n===null&&zn();var i=n.b,s=void 0,a=Ne(P),c=null,d=!k;return yr(()=>{try{var v=e();c&&Promise.resolve(v).catch(()=>{})}catch(_){v=Promise.reject(_)}var h=()=>v;s=c?.then(h,h)??Promise.resolve(v),c=s;var m=I,x=i.pending;d&&(i.update_pending_count(1),x||m.increment());const b=(_,y=void 0)=>{c=null,x||m.activate(),y?y!==pt&&(a.f|=he,$e(a,y)):((a.f&he)!==0&&(a.f^=he),$e(a,_)),d&&(i.update_pending_count(-1),x||m.decrement()),nn()};if(s.then(b,_=>b(null,_||"unknown")),m)return()=>{queueMicrotask(()=>m.neuter())}}),new Promise(v=>{function h(m){function x(){m===s?v(a):h(s)}m.then(x,x)}h(s)})}function Jt(e){const t=mt(e);return t.equals=Kt,t}function en(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)ie(t[n])}}function lr(e){for(var t=e.parent;t!==null;){if((t.f&H)===0)return t;t=t.parent}return null}function _t(e){var t,n=O;ue(lr(e));try{en(e),t=Cn(e)}finally{ue(n)}return t}function tn(e){var t=_t(e);if(e.equals(t)||(e.v=t,e.wv=wn()),!Ee){var n=(oe||(e.f&W)!==0)&&e.deps!==null?fe:R;q(e,n)}}function ur(e,t,n){const i=Re()?mt:Jt;if(t.length===0){n(e.map(i));return}var s=I,a=O,c=fr(),d=sr();Promise.all(t.map(v=>or(v))).then(v=>{s?.activate(),c();try{n([...e.map(i),...v])}catch(h){(a.f&Se)===0&&bt(h,a)}s?.deactivate(),nn()}).catch(v=>{d.error(v)})}function fr(){var e=O,t=k,n=j,i=I;return function(){ue(e),ee(t),Ge(n),i?.activate()}}function nn(){ue(null),ee(null),Ge(null)}const et=new Set;let I=null,Lt=new Set,We=[];function rn(){const e=We.shift();We.length>0&&queueMicrotask(rn),e()}let Me=[],yt=null,ot=!1;class we{current=new Map;#l=new Map;#i=new Set;#e=0;#u=null;#f=!1;#n=[];#a=[];#r=[];#t=[];#s=[];#c=[];#v=[];skipped_effects=new Set;process(t){Me=[];for(const s of t)this.#d(s);if(this.#n.length===0&&this.#e===0){this.#h();var n=this.#r,i=this.#t;this.#r=[],this.#t=[],this.#s=[],I=null,Tt(n),Tt(i),I===null?I=this:et.delete(this),this.#u?.resolve()}else this.#o(this.#r),this.#o(this.#t),this.#o(this.#s);for(const s of this.#n)ye(s);for(const s of this.#a)ye(s);this.#n=[],this.#a=[]}#d(t){t.f^=R;for(var n=t.first;n!==null;){var i=n.f,s=(i&(ae|ge))!==0,a=s&&(i&R)!==0,c=a||(i&Q)!==0||this.skipped_effects.has(n);if(!c&&n.fn!==null){if(s)n.f^=R;else if((i&Ht)!==0)this.#t.push(n);else if((i&R)===0)if((i&gt)!==0){var d=n.b?.pending?this.#a:this.#n;d.push(n)}else Xe(n)&&((n.f&Ce)!==0&&this.#s.push(n),ye(n));var v=n.first;if(v!==null){n=v;continue}}var h=n.parent;for(n=n.next;n===null&&h!==null;)n=h.next,h=h.parent}}#o(t){for(const n of t)((n.f&$)!==0?this.#c:this.#v).push(n),q(n,R);t.length=0}capture(t,n){this.#l.has(t)||this.#l.set(t,n),this.current.set(t,t.v)}activate(){I=this}deactivate(){I=null;for(const t of Lt)if(Lt.delete(t),t(),I!==null)break}neuter(){this.#f=!0}flush(){Me.length>0?cr():this.#h(),I===this&&(this.#e===0&&et.delete(this),this.deactivate())}#h(){if(!this.#f)for(const t of this.#i)t();this.#i.clear()}increment(){this.#e+=1}decrement(){if(this.#e-=1,this.#e===0){for(const t of this.#c)q(t,$),xe(t);for(const t of this.#v)q(t,fe),xe(t);this.#r=[],this.#t=[],this.flush()}else this.deactivate()}add_callback(t){this.#i.add(t)}settled(){return(this.#u??=Nn()).promise}static ensure(){if(I===null){const t=I=new we;et.add(I),we.enqueue(()=>{I===t&&t.flush()})}return I}static enqueue(t){We.length===0&&queueMicrotask(rn),We.unshift(t)}}function cr(){var e=_e;ot=!0;try{var t=0;for(Mt(!0);Me.length>0;){var n=we.ensure();if(t++>1e3){var i,s;vr()}n.process(Me),le.clear()}}finally{ot=!1,Mt(e),yt=null}}function vr(){try{Vn()}catch(e){bt(e,yt)}}let ve=null;function Tt(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var i=e[n++];if((i.f&(Se|Q))===0&&Xe(i)&&(ve=[],ye(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null&&i.ac===null?gn(i):i.fn=null),ve?.length>0)){le.clear();for(const s of ve)ye(s);ve=[]}}ve=null}}function xe(e){for(var t=yt=e;t.parent!==null;){t=t.parent;var n=t.f;if(ot&&t===O&&(n&Ce)!==0)return;if((n&(ge|ae))!==0){if((n&R)===0)return;t.f^=R}}Me.push(t)}const le=new Map;function Ne(e,t){var n={f:0,v:e,reactions:null,equals:$t,rv:0,wv:0};return n}function se(e,t){const n=Ne(e);return Sr(n),n}function an(e,t=!1,n=!0){const i=Ne(e);return t||(i.equals=Kt),Ie&&n&&j!==null&&j.l!==null&&(j.l.s??=[]).push(i),i}function ne(e,t,n=!1){k!==null&&(!J||(k.f&Ot)!==0)&&Re()&&(k.f&(H|Ce|gt|Ot))!==0&&!re?.includes(e)&&Yn();let i=n?Le(t):t;return $e(e,i)}function $e(e,t){if(!e.equals(t)){var n=e.v;Ee?le.set(e,t):le.set(e,n),e.v=t;var i=we.ensure();i.capture(e,n),(e.f&H)!==0&&((e.f&$)!==0&&_t(e),q(e,(e.f&W)===0?R:fe)),e.wv=wn(),sn(e,$),Re()&&O!==null&&(O.f&R)!==0&&(O.f&(ae|ge))===0&&(Y===null?Er([e]):Y.push(e))}return t}function tt(e){ne(e,e.v+1)}function sn(e,t){var n=e.reactions;if(n!==null)for(var i=Re(),s=n.length,a=0;a<s;a++){var c=n[a],d=c.f;if(!(!i&&c===O)){var v=(d&$)===0;v&&q(c,t),(d&H)!==0?sn(c,fe):v&&((d&Ce)!==0&&ve!==null&&ve.push(c),xe(c))}}}function Le(e){if(typeof e!="object"||e===null||De in e)return e;const t=vt(e);if(t!==Fn&&t!==Dn)return e;var n=new Map,i=ft(e),s=se(0),a=de,c=d=>{if(de===a)return d();var v=k,h=de;ee(null),jt(a);var m=d();return ee(v),jt(h),m};return i&&n.set("length",se(e.length)),new Proxy(e,{defineProperty(d,v,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&Hn();var m=n.get(v);return m===void 0?m=c(()=>{var x=se(h.value);return n.set(v,x),x}):ne(m,h.value,!0),!0},deleteProperty(d,v){var h=n.get(v);if(h===void 0){if(v in d){const m=c(()=>se(P));n.set(v,m),tt(s)}}else ne(h,P),tt(s);return!0},get(d,v,h){if(v===De)return e;var m=n.get(v),x=v in d;if(m===void 0&&(!x||Fe(d,v)?.writable)&&(m=c(()=>{var _=Le(x?d[v]:P),y=se(_);return y}),n.set(v,m)),m!==void 0){var b=U(m);return b===P?void 0:b}return Reflect.get(d,v,h)},getOwnPropertyDescriptor(d,v){var h=Reflect.getOwnPropertyDescriptor(d,v);if(h&&"value"in h){var m=n.get(v);m&&(h.value=U(m))}else if(h===void 0){var x=n.get(v),b=x?.v;if(x!==void 0&&b!==P)return{enumerable:!0,configurable:!0,value:b,writable:!0}}return h},has(d,v){if(v===De)return!0;var h=n.get(v),m=h!==void 0&&h.v!==P||Reflect.has(d,v);if(h!==void 0||O!==null&&(!m||Fe(d,v)?.writable)){h===void 0&&(h=c(()=>{var b=m?Le(d[v]):P,_=se(b);return _}),n.set(v,h));var x=U(h);if(x===P)return!1}return m},set(d,v,h,m){var x=n.get(v),b=v in d;if(i&&v==="length")for(var _=h;_<x.v;_+=1){var y=n.get(_+"");y!==void 0?ne(y,P):_ in d&&(y=c(()=>se(P)),n.set(_+"",y))}if(x===void 0)(!b||Fe(d,v)?.writable)&&(x=c(()=>se(void 0)),ne(x,Le(h)),n.set(v,x));else{b=x.v!==P;var S=c(()=>Le(h));ne(x,S)}var E=Reflect.getOwnPropertyDescriptor(d,v);if(E?.set&&E.set.call(m,h),!b){if(i&&typeof v=="string"){var N=n.get("length"),A=Number(v);Number.isInteger(A)&&A>=N.v&&ne(N,A+1)}tt(s)}return!0},ownKeys(d){U(s);var v=Reflect.ownKeys(d).filter(x=>{var b=n.get(x);return b===void 0||b.v!==P});for(var[h,m]of n)m.v!==P&&!(h in d)&&v.push(h);return v},setPrototypeOf(){Gn()}})}var Ft,on,ln,un;function hr(){if(Ft===void 0){Ft=window,on=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;ln=Fe(t,"firstChild").get,un=Fe(t,"nextSibling").get,kt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),kt(n)&&(n.__t=void 0)}}function wt(e=""){return document.createTextNode(e)}function fn(e){return ln.call(e)}function xt(e){return un.call(e)}function be(e,t){return fn(e)}function Ve(e,t=1,n=!1){let i=e;for(;t--;)i=xt(i);return i}function dr(e){e.textContent=""}function gr(){return!1}function Ct(e){var t=k,n=O;ee(null),ue(null);try{return e()}finally{ee(t),ue(n)}}function cn(e){O===null&&k===null&&Bn(),k!==null&&(k.f&W)!==0&&O===null&&qn(),Ee&&Un()}function pr(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ce(e,t,n,i=!0){var s=O;s!==null&&(s.f&Q)!==0&&(e|=Q);var a={ctx:j,deps:null,nodes_start:null,nodes_end:null,f:e|$,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{ye(a),a.f|=dt}catch(v){throw ie(a),v}else t!==null&&xe(a);if(i){var c=a;if(n&&c.deps===null&&c.teardown===null&&c.nodes_start===null&&c.first===c.last&&(c.f&Pe)===0&&(c=c.first),c!==null&&(c.parent=s,s!==null&&pr(c,s),k!==null&&(k.f&H)!==0&&(e&ge)===0)){var d=k;(d.effects??=[]).push(c)}}return a}function br(e){const t=ce(ht,null,!1);return q(t,R),t.teardown=e,t}function lt(e){cn();var t=O.f,n=!k&&(t&ae)!==0&&(t&dt)===0;if(n){var i=j;(i.e??=[]).push(e)}else return vn(e)}function vn(e){return ce(Ht|Wt,e,!1)}function mr(e){return cn(),ce(ht|Wt,e,!0)}function _r(e){we.ensure();const t=ce(ge|Pe,e,!0);return(n={})=>new Promise(i=>{n.outro?pn(t,()=>{ie(t),i(void 0)}):(ie(t),i(void 0))})}function yr(e){return ce(gt|Pe,e,!0)}function Dt(e,t=[],n=[]){ur(t,n,i=>{ce(ht,()=>e(...i.map(U)),!0)})}function wr(e,t=0){var n=ce(Ce|t,e,!0);return n}function St(e,t=!0){return ce(ae|Pe,e,!0,t)}function hn(e){var t=e.teardown;if(t!==null){const n=Ee,i=k;Nt(!0),ee(null);try{t.call(null)}finally{Nt(n),ee(i)}}}function dn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&Ct(()=>{s.abort(pt)});var i=n.next;(n.f&ge)!==0?n.parent=null:ie(n,t),n=i}}function xr(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&ae)===0&&ie(t),t=n}}function ie(e,t=!0){var n=!1;(t||(e.f&jn)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Cr(e.nodes_start,e.nodes_end),n=!0),dn(e,t&&!n),Ke(e,0),q(e,Se);var i=e.transitions;if(i!==null)for(const a of i)a.stop();hn(e);var s=e.parent;s!==null&&s.first!==null&&gn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Cr(e,t){for(;e!==null;){var n=e===t?null:xt(e);e.remove(),e=n}}function gn(e){var t=e.parent,n=e.prev,i=e.next;n!==null&&(n.next=i),i!==null&&(i.prev=n),t!==null&&(t.first===e&&(t.first=i),t.last===e&&(t.last=n))}function pn(e,t){var n=[];Et(e,n,!0),bn(n,()=>{ie(e),t&&t()})}function bn(e,t){var n=e.length;if(n>0){var i=()=>--n||t();for(var s of e)s.out(i)}else t()}function Et(e,t,n){if((e.f&Q)===0){if(e.f^=Q,e.transitions!==null)for(const c of e.transitions)(c.is_global||n)&&t.push(c);for(var i=e.first;i!==null;){var s=i.next,a=(i.f&Yt)!==0||(i.f&ae)!==0;Et(i,t,a?n:!1),i=s}}}function mn(e){_n(e,!0)}function _n(e,t){if((e.f&Q)!==0){e.f^=Q,(e.f&R)===0&&(q(e,$),xe(e));for(var n=e.first;n!==null;){var i=n.next,s=(n.f&Yt)!==0||(n.f&ae)!==0;_n(n,s?t:!1),n=i}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in()}}let _e=!1;function Mt(e){_e=e}let Ee=!1;function Nt(e){Ee=e}let k=null,J=!1;function ee(e){k=e}let O=null;function ue(e){O=e}let re=null;function Sr(e){k!==null&&(re===null?re=[e]:re.push(e))}let z=null,V=0,Y=null;function Er(e){Y=e}let yn=1,je=0,de=je;function jt(e){de=e}let oe=!1;function wn(){return++yn}function Xe(e){var t=e.f;if((t&$)!==0)return!0;if((t&fe)!==0){var n=e.deps,i=(t&W)!==0;if(n!==null){var s,a,c=(t&He)!==0,d=i&&O!==null&&!oe,v=n.length;if((c||d)&&(O===null||(O.f&Se)===0)){var h=e,m=h.parent;for(s=0;s<v;s++)a=n[s],(c||!a?.reactions?.includes(h))&&(a.reactions??=[]).push(h);c&&(h.f^=He),d&&m!==null&&(m.f&W)===0&&(h.f^=W)}for(s=0;s<v;s++)if(a=n[s],Xe(a)&&tn(a),a.wv>e.wv)return!0}(!i||O!==null&&!oe)&&q(e,R)}return!1}function xn(e,t,n=!0){var i=e.reactions;if(i!==null&&!re?.includes(e))for(var s=0;s<i.length;s++){var a=i[s];(a.f&H)!==0?xn(a,t,!1):t===a&&(n?q(a,$):(a.f&R)!==0&&q(a,fe),xe(a))}}function Cn(e){var t=z,n=V,i=Y,s=k,a=oe,c=re,d=j,v=J,h=de,m=e.f;z=null,V=0,Y=null,oe=(m&W)!==0&&(J||!_e||k===null),k=(m&(ae|ge))===0?e:null,re=null,Ge(e.ctx),J=!1,de=++je,e.ac!==null&&(Ct(()=>{e.ac.abort(pt)}),e.ac=null);try{e.f|=st;var x=e.fn,b=x(),_=e.deps;if(z!==null){var y;if(Ke(e,V),_!==null&&V>0)for(_.length=V+z.length,y=0;y<z.length;y++)_[V+y]=z[y];else e.deps=_=z;if(!oe||(m&H)!==0&&e.reactions!==null)for(y=V;y<_.length;y++)(_[y].reactions??=[]).push(e)}else _!==null&&V<_.length&&(Ke(e,V),_.length=V);if(Re()&&Y!==null&&!J&&_!==null&&(e.f&(H|fe|$))===0)for(y=0;y<Y.length;y++)xn(Y[y],e);return s!==null&&s!==e&&(je++,Y!==null&&(i===null?i=Y:i.push(...Y))),(e.f&he)!==0&&(e.f^=he),b}catch(S){return rr(S)}finally{e.f^=st,z=t,V=n,Y=i,k=s,oe=a,re=c,Ge(d),J=v,de=h}}function Ar(e,t){let n=t.reactions;if(n!==null){var i=Tn.call(n,e);if(i!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[i]=n[s],n.pop())}}n===null&&(t.f&H)!==0&&(z===null||!z.includes(t))&&(q(t,fe),(t.f&(W|He))===0&&(t.f^=He),en(t),Ke(t,0))}function Ke(e,t){var n=e.deps;if(n!==null)for(var i=t;i<n.length;i++)Ar(e,n[i])}function ye(e){var t=e.f;if((t&Se)===0){q(e,R);var n=O,i=_e;O=e,_e=!0;try{(t&Ce)!==0?xr(e):dn(e),hn(e);var s=Cn(e);e.teardown=typeof s=="function"?s:null,e.wv=yn;var a;Bt&&er&&(e.f&$)!==0&&e.deps}finally{_e=i,O=n}}}function U(e){var t=e.f,n=(t&H)!==0;if(k!==null&&!J){var i=O!==null&&(O.f&Se)!==0;if(!i&&!re?.includes(e)){var s=k.deps;if((k.f&st)!==0)e.rv<je&&(e.rv=je,z===null&&s!==null&&s[V]===e?V++:z===null?z=[e]:(!oe||!z.includes(e))&&z.push(e));else{(k.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[k]:a.includes(k)||a.push(k)}}}else if(n&&e.deps===null&&e.effects===null){var c=e,d=c.parent;d!==null&&(d.f&W)===0&&(c.f^=W)}if(Ee){if(le.has(e))return le.get(e);if(n){c=e;var v=c.v;return((c.f&R)===0&&c.reactions!==null||Sn(c))&&(v=_t(c)),le.set(c,v),v}}else n&&(c=e,Xe(c)&&tn(c));if((e.f&he)!==0)throw e.v;return e.v}function Sn(e){if(e.v===P)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(le.has(t)||(t.f&H)!==0&&Sn(t))return!0;return!1}function En(e){var t=J;try{return J=!0,e()}finally{J=t}}const kr=-7169;function q(e,t){e.f=e.f&kr|t}function Or(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(De in e)ut(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&De in n&&ut(n)}}}function ut(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let i in e)try{ut(e[i],t)}catch{}const n=vt(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const i=Vt(n);for(let s in i){const a=i[s].get;if(a)try{a.call(e)}catch{}}}}}const Lr=["touchstart","touchmove"];function Tr(e){return Lr.includes(e)}const Fr=new Set,Pt=new Set;function Dr(e,t,n,i={}){function s(a){if(i.capture||Te.call(t,a),!a.cancelBubble)return Ct(()=>n?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ar(()=>{t.addEventListener(e,s,i)}):t.addEventListener(e,s,i),s}function Mr(e,t,n,i,s){var a={capture:i,passive:s},c=Dr(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&br(()=>{t.removeEventListener(e,c,a)})}let It=null;function Te(e){var t=this,n=t.ownerDocument,i=e.type,s=e.composedPath?.()||[],a=s[0]||e.target;It=e;var c=0,d=It===e&&e.__root;if(d){var v=s.indexOf(d);if(v!==-1&&(t===document||t===window)){e.__root=t;return}var h=s.indexOf(t);if(h===-1)return;v<=h&&(c=v)}if(a=s[c]||e.target,a!==t){it(e,"currentTarget",{configurable:!0,get(){return a||n}});var m=k,x=O;ee(null),ue(null);try{for(var b,_=[];a!==null;){var y=a.assignedSlot||a.parentNode||a.host||null;try{var S=a["__"+i];if(S!=null&&(!a.disabled||e.target===a))if(ft(S)){var[E,...N]=S;E.apply(a,[e,...N])}else S.call(a,e)}catch(A){b?_.push(A):b=A}if(e.cancelBubble||y===t||y===null)break;a=y}if(b){for(let A of _)queueMicrotask(()=>{throw A});throw b}}finally{e.__root=t,delete e.currentTarget,ee(m),ue(x)}}}function Nr(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function jr(e,t){var n=O;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function An(e,t){var n=(t&Xn)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Nr(s?e:"<!>"+e),i=fn(i));var a=n||on?document.importNode(i,!0):i.cloneNode(!0);return jr(a,a),a}}function Rt(e,t){e!==null&&e.before(t)}function nt(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function Pr(e,t){return Ir(e,t)}const me=new Map;function Ir(e,{target:t,anchor:n,props:i={},events:s,context:a,intro:c=!0}){hr();var d=new Set,v=x=>{for(var b=0;b<x.length;b++){var _=x[b];if(!d.has(_)){d.add(_);var y=Tr(_);t.addEventListener(_,Te,{passive:y});var S=me.get(_);S===void 0?(document.addEventListener(_,Te,{passive:y}),me.set(_,1)):me.set(_,S+1)}}};v(ct(Fr)),Pt.add(v);var h=void 0,m=_r(()=>{var x=n??t.appendChild(wt());return St(()=>{if(a){Xt({});var b=j;b.c=a}s&&(i.$$events=s),h=e(x,i)||{},a&&Qt()}),()=>{for(var b of d){t.removeEventListener(b,Te);var _=me.get(b);--_===0?(document.removeEventListener(b,Te),me.delete(b)):me.set(b,_)}Pt.delete(v),x!==n&&x.parentNode?.removeChild(x)}});return Rr.set(h,m),h}let Rr=new WeakMap;function zr(e,t,n){for(var i=e.items,s=[],a=t.length,c=0;c<a;c++)Et(t[c].e,s,!0);var d=a>0&&s.length===0&&n!==null;if(d){var v=n.parentNode;dr(v),v.append(n),i.clear(),Z(e,t[0].prev,t[a-1].next)}bn(s,()=>{for(var h=0;h<a;h++){var m=t[h];d||(i.delete(m.k),Z(e,m.prev,m.next)),ie(m.e,!d)}})}function Ur(e,t,n,i,s,a=null){var c=e,d={flags:t,items:new Map,first:null};{var v=e;c=v.appendChild(wt())}var h=null,m=!1,x=new Map,b=Jt(()=>{var E=n();return ft(E)?E:E==null?[]:ct(E)}),_,y;function S(){qr(y,_,d,x,c,s,t,i,n),a!==null&&(_.length===0?h?mn(h):h=St(()=>a(c)):h!==null&&pn(h,()=>{h=null}))}wr(()=>{y??=O,_=U(b);var E=_.length;if(!(m&&E===0)){m=E===0;var N,A,L,M;if(gr()){var B=new Set,te=I;for(A=0;A<E;A+=1){L=_[A],M=i(L,A);var K=d.items.get(M)??x.get(M);K?kn(K,L,A):(N=On(null,d,null,null,L,M,A,s,t,n,!0),x.set(M,N)),B.add(M)}for(const[X,G]of d.items)B.has(X)||te.skipped_effects.add(G.e);te.add_callback(S)}else S();U(b)}})}function qr(e,t,n,i,s,a,c,d,v){var h=t.length,m=n.items,x=n.first,b=x,_,y=null,S=[],E=[],N,A,L,M;for(M=0;M<h;M+=1){if(N=t[M],A=d(N,M),L=m.get(A),L===void 0){var B=i.get(A);if(B!==void 0){i.delete(A),m.set(A,B);var te=y?y.next:b;Z(n,y,B),Z(n,B,te),rt(B,te,s),y=B}else{var K=b?b.e.nodes_start:s;y=On(K,n,y,y===null?n.first:y.next,N,A,M,a,c,v)}m.set(A,y),S=[],E=[],b=y.next;continue}if(kn(L,N,M),(L.e.f&Q)!==0&&mn(L.e),L!==b){if(_!==void 0&&_.has(L)){if(S.length<E.length){var X=E[0],G;y=X.prev;var ze=S[0],pe=S[S.length-1];for(G=0;G<S.length;G+=1)rt(S[G],X,s);for(G=0;G<E.length;G+=1)_.delete(E[G]);Z(n,ze.prev,pe.next),Z(n,y,ze),Z(n,pe,X),b=X,y=pe,M-=1,S=[],E=[]}else _.delete(L),rt(L,b,s),Z(n,L.prev,L.next),Z(n,L,y===null?n.first:y.next),Z(n,y,L),y=L;continue}for(S=[],E=[];b!==null&&b.k!==A;)(b.e.f&Q)===0&&(_??=new Set).add(b),E.push(b),b=b.next;if(b===null)continue;L=b}S.push(L),y=L,b=L.next}if(b!==null||_!==void 0){for(var Ae=_===void 0?[]:ct(_);b!==null;)(b.e.f&Q)===0&&Ae.push(b),b=b.next;var Qe=Ae.length;if(Qe>0){var Ue=h===0?s:null;zr(n,Ae,Ue)}}e.first=n.first&&n.first.e,e.last=y&&y.e;for(var Ze of i.values())ie(Ze.e);i.clear()}function kn(e,t,n,i){$e(e.v,t),e.i=n}function On(e,t,n,i,s,a,c,d,v,h,m){var x=(v&Wn)!==0,b=(v&Kn)===0,_=x?b?an(s,!1,!1):Ne(s):s,y=(v&$n)===0?c:Ne(c),S={i:y,v:_,k:a,a:null,e:null,prev:n,next:i};try{if(e===null){var E=document.createDocumentFragment();E.append(e=wt())}return S.e=St(()=>d(e,_,y,h),Zn),S.e.prev=n&&n.e,S.e.next=i&&i.e,n===null?m||(t.first=S):(n.next=S,n.e.next=S.e),i!==null&&(i.prev=S,i.e.prev=S.e),S}finally{}}function rt(e,t,n){for(var i=e.next?e.next.e.nodes_start:n,s=t?t.e.nodes_start:n,a=e.e.nodes_start;a!==null&&a!==i;){var c=xt(a);s.before(a),a=c}}function Z(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}const zt=[...` 	
\r\f \v\uFEFF`];function Br(e,t,n){var i=""+e;if(n){for(var s in n)if(n[s])i=i?i+" "+s:s;else if(i.length)for(var a=s.length,c=0;(c=i.indexOf(s,c))>=0;){var d=c+a;(c===0||zt.includes(i[c-1]))&&(d===i.length||zt.includes(i[d]))?i=(c===0?"":i.substring(0,c))+i.substring(d+1):c=d}}return i===""?null:i}function Vr(e,t,n,i,s,a){var c=e.__className;if(c!==n||c===void 0){var d=Br(n,i,a);d==null?e.removeAttribute("class"):e.className=d,e.__className=n}else if(a&&s!==a)for(var v in a){var h=!!a[v];(s==null||h!==!!s[v])&&e.classList.toggle(v,h)}return a}const Hr=Symbol("is custom element"),Gr=Symbol("is html");function ke(e,t,n,i){var s=Yr(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[Pn]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Wr(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Yr(e){return e.__attributes??={[Hr]:e.nodeName.includes("-"),[Gr]:e.namespaceURI===Qn}}var Ut=new Map;function Wr(e){var t=e.getAttribute("is")||e.nodeName,n=Ut.get(t);if(n)return n;Ut.set(t,n=[]);for(var i,s=e,a=Element.prototype;a!==s;){i=Vt(s);for(var c in i)i[c].set&&n.push(c);s=vt(s)}return n}function $r(e=!1){const t=j,n=t.l.u;if(!n)return;let i=()=>Or(t.s);if(e){let s=0,a={};const c=mt(()=>{let d=!1;const v=t.s;for(const h in v)v[h]!==a[h]&&(a[h]=v[h],d=!0);return d&&s++,s});i=()=>U(c)}n.b.length&&mr(()=>{qt(t,i),at(n.b)}),lt(()=>{const s=En(()=>n.m.map(Mn));return()=>{for(const a of s)typeof a=="function"&&a()}}),n.a.length&&lt(()=>{qt(t,i),at(n.a)})}function qt(e,t){if(e.l.s)for(const n of e.l.s)U(n);t()}function Kr(e){j===null&&Rn(),Ie&&j.l!==null?Xr(j).m.push(e):lt(()=>{const t=En(e);if(typeof t=="function")return t})}function Xr(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}(function(){function e(u,f){return(function(o){if(Array.isArray(o))return o})(u)||(function(o,r){var l=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(l!=null){var g,p,w=[],C=!0,T=!1;try{for(l=l.call(o);!(C=(g=l.next()).done)&&(w.push(g.value),!r||w.length!==r);C=!0);}catch(D){T=!0,p=D}finally{try{C||l.return==null||l.return()}finally{if(T)throw p}}return w}})(u,f)||(function(o,r){if(o){if(typeof o=="string")return t(o,r);var l=Object.prototype.toString.call(o).slice(8,-1);if(l==="Object"&&o.constructor&&(l=o.constructor.name),l==="Map"||l==="Set")return Array.from(o);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return t(o,r)}})(u,f)||(function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function t(u,f){(f==null||f>u.length)&&(f=u.length);for(var o=0,r=new Array(f);o<f;o++)r[o]=u[o];return r}function n(u,f){if(!(u instanceof f))throw new TypeError("Cannot call a class as a function")}function i(u,f){for(var o=0;o<f.length;o++){var r=f[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}function s(u,f,o){return f in u?Object.defineProperty(u,f,{value:o,enumerable:!0,configurable:!0,writable:!0}):u[f]=o,u}var a=(function(){function u(r,l,g){var p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};n(this,u),s(this,"gl",void 0),s(this,"type",void 0),s(this,"value",void 0),s(this,"typeFn",void 0),s(this,"_typeMap",{float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}),Object.assign(this,p),this.gl=r,this.type=l,this.value=g,this.typeFn=this._typeMap[this.type]||this._typeMap.float,this.update()}var f,o;return f=u,(o=[{key:"update",value:function(r){if(this.value){var l=this.value,g=null;this.typeFn.indexOf("Matrix")===0&&(l=this.transpose,g=this.value),this.gl.getContext()["uniform".concat(this.typeFn)](r,l,g)}}},{key:"getDeclaration",value:function(r,l,g){if(this.excludeFrom!==l){if(this.type==="array")return"".concat(this.value[0].getDeclaration(r,l,this.value.length),`
const int `).concat(r,"_length = ").concat(this.value.length,";");if(this.type==="struct"){var p=r.replace("u_","");p=p.charAt(0).toUpperCase()+p.slice(1);var w=Object.entries(this.value).map((function(C){var T=e(C,2),D=T[0];return T[1].getDeclaration(D,l).replace(/^uniform/,"")})).join("");return"uniform struct ".concat(p,` {
    `).concat(w,`
} `).concat(r).concat(g>0?"[".concat(g,"]"):"",";")}return"uniform ".concat(this.type," ").concat(r).concat(g>0?"[".concat(g,"]"):"",";")}}}])&&i(f.prototype,o),Object.defineProperty(f,"prototype",{writable:!1}),u})();function c(u,f){for(var o=0;o<f.length;o++){var r=f[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}function d(u,f,o){return f in u?Object.defineProperty(u,f,{value:o,enumerable:!0,configurable:!0,writable:!0}):u[f]=o,u}var v=(function(){function u(r,l,g){(function(w,C){if(!(w instanceof C))throw new TypeError("Cannot call a class as a function")})(this,u),d(this,"_class",u),d(this,"_canvas",void 0),d(this,"_context",void 0),d(this,"commonUniforms",{}),d(this,"meshes",[]),this.setCanvas(r);var p=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];this.commonUniforms={projectionMatrix:new a(this,"mat4",p),modelViewMatrix:new a(this,"mat4",p),resolution:new a(this,"vec2",[1,1]),aspectRatio:new a(this,"float",1)},this.setSize(l,g)}var f,o;return f=u,o=[{key:"setCanvas",value:function(r){this._canvas=r,this._context=r.getContext("webgl",{antialias:!0})}},{key:"getCanvas",value:function(){return this._canvas}},{key:"getContext",value:function(){return this._context}},{key:"setSize",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:640,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:480;this.getCanvas().width=r,this.getCanvas().height=l,this.getContext().viewport(0,0,r,l),this.commonUniforms.resolution.value=[r,l],this.commonUniforms.aspectRatio.value=r/l}},{key:"setOrthographicCamera",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:-2e3,w=arguments.length>4&&arguments[4]!==void 0?arguments[4]:2e3;this.commonUniforms.projectionMatrix.value=[2/this.getCanvas().width,0,0,0,0,2/this.getCanvas().height,0,0,0,0,2/(p-w),0,r,l,g,1]}},{key:"render",value:function(){this.getContext().clearColor(0,0,0,0),this.getContext().clearDepth(1),this.meshes.forEach((function(r){r.draw()}))}}],o&&c(f.prototype,o),Object.defineProperty(f,"prototype",{writable:!1}),u})();function h(u,f){return(function(o){if(Array.isArray(o))return o})(u)||(function(o,r){var l=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(l!=null){var g,p,w=[],C=!0,T=!1;try{for(l=l.call(o);!(C=(g=l.next()).done)&&(w.push(g.value),!r||w.length!==r);C=!0);}catch(D){T=!0,p=D}finally{try{C||l.return==null||l.return()}finally{if(T)throw p}}return w}})(u,f)||(function(o,r){if(o){if(typeof o=="string")return m(o,r);var l=Object.prototype.toString.call(o).slice(8,-1);if(l==="Object"&&o.constructor&&(l=o.constructor.name),l==="Map"||l==="Set")return Array.from(o);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return m(o,r)}})(u,f)||(function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function m(u,f){(f==null||f>u.length)&&(f=u.length);for(var o=0,r=new Array(f);o<f;o++)r[o]=u[o];return r}function x(u,f){if(!(u instanceof f))throw new TypeError("Cannot call a class as a function")}function b(u,f){for(var o=0;o<f.length;o++){var r=f[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}function _(u,f,o){return f in u?Object.defineProperty(u,f,{value:o,enumerable:!0,configurable:!0,writable:!0}):u[f]=o,u}var y=(function(){function u(r,l,g){var p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},w=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{};x(this,u),_(this,"gl",void 0),_(this,"uniformInstances",[]),Object.assign(this,w),this.gl=r,this.uniforms=p;var C=this.gl.getContext(),T=`
            precision highp float;
        `;this.vertexSource=`
            `.concat(T,`
            attribute vec4 position;
            attribute vec2 uv;
            attribute vec2 uvNorm;
            `).concat(this._getUniformVariableDeclarations(this.gl.commonUniforms,"vertex"),`
            `).concat(this._getUniformVariableDeclarations(p,"vertex"),`
            `).concat(l,`
        `),this.Source=`
            `.concat(T,`
            `).concat(this._getUniformVariableDeclarations(this.gl.commonUniforms,"fragment"),`
            `).concat(this._getUniformVariableDeclarations(p,"fragment"),`
            `).concat(g,`
        `),this.vertexShader=this._getShaderByType(C.VERTEX_SHADER,this.vertexSource),this.fragmentShader=this._getShaderByType(C.FRAGMENT_SHADER,this.Source),this.program=C.createProgram(),C.attachShader(this.program,this.vertexShader),C.attachShader(this.program,this.fragmentShader),C.linkProgram(this.program),C.getProgramParameter(this.program,C.LINK_STATUS)||console.error(C.getProgramInfoLog(this.program)),C.useProgram(this.program),this.attachUniforms(void 0,this.gl.commonUniforms),this.attachUniforms(void 0,this.uniforms)}var f,o;return f=u,(o=[{key:"_getShaderByType",value:function(r,l){var g=this.gl.getContext(),p=g.createShader(r);return g.shaderSource(p,l),g.compileShader(p),g.getShaderParameter(p,g.COMPILE_STATUS)||console.error(g.getShaderInfoLog(p)),p}},{key:"_getUniformVariableDeclarations",value:function(r,l){return Object.entries(r).map((function(g){var p=h(g,2),w=p[0];return p[1].getDeclaration(w,l)})).join(`
`)}},{key:"attachUniforms",value:function(r,l){var g=this;r?l.type==="array"?l.value.forEach((function(p,w){g.attachUniforms("".concat(r,"[").concat(w,"]"),p)})):l.type==="struct"?Object.entries(l.value).forEach((function(p){var w=h(p,2),C=w[0],T=w[1];g.attachUniforms("".concat(r,".").concat(C),T)})):this.uniformInstances.push({uniform:l,location:this.gl.getContext().getUniformLocation(this.program,r)}):Object.entries(l).forEach((function(p){var w=h(p,2),C=w[0],T=w[1];g.attachUniforms(C,T)}))}}])&&b(f.prototype,o),Object.defineProperty(f,"prototype",{writable:!1}),u})();function S(u,f){return(function(o){if(Array.isArray(o))return o})(u)||(function(o,r){var l=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(l!=null){var g,p,w=[],C=!0,T=!1;try{for(l=l.call(o);!(C=(g=l.next()).done)&&(w.push(g.value),!r||w.length!==r);C=!0);}catch(D){T=!0,p=D}finally{try{C||l.return==null||l.return()}finally{if(T)throw p}}return w}})(u,f)||(function(o,r){if(o){if(typeof o=="string")return E(o,r);var l=Object.prototype.toString.call(o).slice(8,-1);if(l==="Object"&&o.constructor&&(l=o.constructor.name),l==="Map"||l==="Set")return Array.from(o);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return E(o,r)}})(u,f)||(function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function E(u,f){(f==null||f>u.length)&&(f=u.length);for(var o=0,r=new Array(f);o<f;o++)r[o]=u[o];return r}function N(u,f){if(!(u instanceof f))throw new TypeError("Cannot call a class as a function")}function A(u,f){for(var o=0;o<f.length;o++){var r=f[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}function L(u,f,o){return f in u?Object.defineProperty(u,f,{value:o,enumerable:!0,configurable:!0,writable:!0}):u[f]=o,u}var M=(function(){function u(r,l,g){var p=this,w=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};N(this,u),L(this,"gl",void 0),L(this,"wireframe",!1),L(this,"attributeInstances",[]),Object.assign(this,w),this.geometry=l,this.material=g,this.gl=r,Object.entries(this.geometry.attributes).forEach((function(C){var T=S(C,2),D=T[0],qe=T[1];p.attributeInstances.push({attribute:qe,location:qe.attach(D,p.material.program)})})),this.gl.meshes.push(this)}var f,o;return f=u,(o=[{key:"draw",value:function(){var r=this.gl.getContext();r.useProgram(this.material.program),this.material.uniformInstances.forEach((function(g){var p=g.uniform,w=g.location;p.update(w)})),this.attributeInstances.forEach((function(g){var p=g.attribute,w=g.location;p.use(w)}));var l=this.wireframe?r.LINES:r.TRIANGLES;r.drawElements(l,this.geometry.attributes.index.values.length,r.UNSIGNED_SHORT,0)}},{key:"remove",value:function(){var r=this;this.gl.meshes=this.gl.meshes.filter((function(l){return l!=r}))}}])&&A(f.prototype,o),Object.defineProperty(f,"prototype",{writable:!1}),u})();function B(u,f){if(!(u instanceof f))throw new TypeError("Cannot call a class as a function")}function te(u,f){for(var o=0;o<f.length;o++){var r=f[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}function K(u,f,o){return f in u?Object.defineProperty(u,f,{value:o,enumerable:!0,configurable:!0,writable:!0}):u[f]=o,u}var X=(function(){function u(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};B(this,u),K(this,"gl",void 0),K(this,"type",void 0),K(this,"buffer",void 0),K(this,"normalized",!1),Object.assign(this,l),this.gl=r,this.type=this.gl.getContext().FLOAT,this.buffer=this.gl.getContext().createBuffer(),this.update()}var f,o;return f=u,(o=[{key:"update",value:function(){if(this.values){var r=this.gl.getContext();r.bindBuffer(this.target,this.buffer),r.bufferData(this.target,this.values,r.STATIC_DRAW)}}},{key:"attach",value:function(r,l){var g=this.gl.getContext(),p=g.getAttribLocation(l,r);return this.target===g.ARRAY_BUFFER&&(g.enableVertexAttribArray(p),g.vertexAttribPointer(p,this.size,this.type,this.normalized,0,0)),p}},{key:"use",value:function(r){var l=this.gl.getContext();l.bindBuffer(this.target,this.buffer),this.target===l.ARRAY_BUFFER&&(l.enableVertexAttribArray(r),l.vertexAttribPointer(r,this.size,this.type,this.normalized,0,0))}}])&&te(f.prototype,o),Object.defineProperty(f,"prototype",{writable:!1}),u})();function G(u,f){if(!(u instanceof f))throw new TypeError("Cannot call a class as a function")}function ze(u,f){for(var o=0;o<f.length;o++){var r=f[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}function pe(u,f,o){return f in u?Object.defineProperty(u,f,{value:o,enumerable:!0,configurable:!0,writable:!0}):u[f]=o,u}var Ae=(function(){function u(r,l,g,p,w,C){var T=arguments.length>6&&arguments[6]!==void 0?arguments[6]:{};G(this,u),pe(this,"gl",void 0),pe(this,"attributes",void 0),Object.assign(this,T),this.gl=r;var D=this.gl.getContext();D.createBuffer(),this.attributes={position:new X(this.gl,{target:D.ARRAY_BUFFER,size:3}),uv:new X(this.gl,{target:D.ARRAY_BUFFER,size:2}),uvNorm:new X(this.gl,{target:D.ARRAY_BUFFER,size:2}),index:new X(this.gl,{target:D.ELEMENT_ARRAY_BUFFER,size:3,type:D.UNSIGNED_SHORT})},this.setTopology(p,w),this.setSize(l,g,C)}var f,o;return f=u,o=[{key:"setTopology",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;this.xSegCount=r,this.ySegCount=l,this.vertexCount=(this.xSegCount+1)*(this.ySegCount+1),this.quadCount=this.xSegCount*this.ySegCount*2,this.attributes.uv.values=new Float32Array(2*this.vertexCount),this.attributes.uvNorm.values=new Float32Array(2*this.vertexCount),this.attributes.index.values=new Uint16Array(3*this.quadCount);for(var g=0;g<=this.ySegCount;g++)for(var p=0;p<=this.xSegCount;p++){var w=g*(this.xSegCount+1)+p;if(this.attributes.uv.values[2*w]=p/this.xSegCount,this.attributes.uv.values[2*w+1]=1-g/this.ySegCount,this.attributes.uvNorm.values[2*w]=p/this.xSegCount*2-1,this.attributes.uvNorm.values[2*w+1]=1-g/this.ySegCount*2,p<this.xSegCount&&g<this.ySegCount){var C=g*this.xSegCount+p;this.attributes.index.values[6*C]=w,this.attributes.index.values[6*C+1]=w+1+this.xSegCount,this.attributes.index.values[6*C+2]=w+1,this.attributes.index.values[6*C+3]=w+1,this.attributes.index.values[6*C+4]=w+1+this.xSegCount,this.attributes.index.values[6*C+5]=w+2+this.xSegCount}}this.attributes.uv.update(),this.attributes.uvNorm.update(),this.attributes.index.update()}},{key:"setSize",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"xz";this.width=r,this.height=l,this.orientation=g,this.attributes.position.values&&this.attributes.position.values.length===3*this.vertexCount||(this.attributes.position.values=new Float32Array(3*this.vertexCount));for(var p=r/-2,w=l/-2,C=r/this.xSegCount,T=l/this.ySegCount,D=0;D<=this.ySegCount;D++)for(var qe=w+D*T,Be=0;Be<=this.xSegCount;Be++){var Ln=p+Be*C,At=D*(this.xSegCount+1)+Be;this.attributes.position.values[3*At+"xyz".indexOf(g[0])]=Ln,this.attributes.position.values[3*At+"xyz".indexOf(g[1])]=-qe}this.attributes.position.update()}}],o&&ze(f.prototype,o),Object.defineProperty(f,"prototype",{writable:!1}),u})();function Qe(u,f){return(function(o){if(Array.isArray(o))return o})(u)||(function(o,r){var l=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(l!=null){var g,p,w=[],C=!0,T=!1;try{for(l=l.call(o);!(C=(g=l.next()).done)&&(w.push(g.value),!r||w.length!==r);C=!0);}catch(D){T=!0,p=D}finally{try{C||l.return==null||l.return()}finally{if(T)throw p}}return w}})(u,f)||(function(o,r){if(o){if(typeof o=="string")return Ue(o,r);var l=Object.prototype.toString.call(o).slice(8,-1);if(l==="Object"&&o.constructor&&(l=o.constructor.name),l==="Map"||l==="Set")return Array.from(o);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return Ue(o,r)}})(u,f)||(function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function Ue(u,f){(f==null||f>u.length)&&(f=u.length);for(var o=0,r=new Array(f);o<f;o++)r[o]=u[o];return r}function Ze(u,f){for(var o=0;o<f.length;o++){var r=f[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}function F(u,f,o){return f in u?Object.defineProperty(u,f,{value:o,enumerable:!0,configurable:!0,writable:!0}):u[f]=o,u}var Je=(function(){function u(r){if((function(l,g){if(!(l instanceof g))throw new TypeError("Cannot call a class as a function")})(this,u),F(this,"_class",u),F(this,"vertexShader",null),F(this,"uniforms",null),F(this,"time",1253106),F(this,"mesh",null),F(this,"material",null),F(this,"geometry",null),F(this,"scrollingTimeout",null),F(this,"scrollingRefreshDelay",200),F(this,"scrollObserver",null),F(this,"width",null),F(this,"minWidth",1111),F(this,"height",600),F(this,"xSegCount",null),F(this,"ySegCount",null),F(this,"freqX",14e-5),F(this,"freqY",29e-5),F(this,"freqDelta",1e-5),F(this,"activeColors",[1,1,1,1]),F(this,"shaderFiles",{vertex:`varying vec3 v_color;

void main() {
  float time = u_time * u_global.noiseSpeed;

  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;

  vec2 st = 1. - uvNorm.xy;

  //
  // Tilting the plane
  //

  // Front-to-back tilt
  float tilt = resolution.y / 2.0 * uvNorm.y;

  // Left-to-right angle
  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;

  // Up-down shift to offset incline
  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);

  //
  // Vertex noise
  //

  float noise = snoise(vec3(
    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,
    noiseCoord.y * u_vertDeform.noiseFreq.y,
    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed
  )) * u_vertDeform.noiseAmp;

  // Fade noise to zero at edges
  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);

  // Clamp to 0
  noise = max(0.0, noise);

  vec3 pos = vec3(
    position.x,
    position.y + tilt + incline + noise - offset,
    position.z
  );

  //
  // Vertex color, to be passed to fragment shader
  //

  if (u_active_colors[0] == 1.) {
    v_color = u_baseColor;
  }

  for (int i = 0; i < u_waveLayers_length; i++) {
    if (u_active_colors[i + 1] == 1.) {
      WaveLayers layer = u_waveLayers[i];

      float noise = smoothstep(
        layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          time * layer.noiseSpeed + layer.noiseSeed
        )) / 2.0 + 0.5
      );

      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));
    }
  }

  //
  // Finish
  //

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,noise:`//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}
`,blend:`//
// https://github.com/jamieowen/glsl-blend
//

// Normal

vec3 blendNormal(vec3 base, vec3 blend) {
    return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
    return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}

// Screen

float blendScreen(float base, float blend) {
    return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
    return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
    return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}

// Multiply

vec3 blendMultiply(vec3 base, vec3 blend) {
    return base*blend;
}

vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
    return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}

// Overlay

float blendOverlay(float base, float blend) {
    return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

vec3 blendOverlay(vec3 base, vec3 blend) {
    return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}

vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
    return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}

// Hard light

vec3 blendHardLight(vec3 base, vec3 blend) {
    return blendOverlay(blend,base);
}

vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
    return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Soft light

float blendSoftLight(float base, float blend) {
    return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
    return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));
}

vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
    return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Color dodge

float blendColorDodge(float base, float blend) {
    return (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}

vec3 blendColorDodge(vec3 base, vec3 blend) {
    return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));
}

vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
    return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Color burn

float blendColorBurn(float base, float blend) {
    return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

vec3 blendColorBurn(vec3 base, vec3 blend) {
    return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}

vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
    return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Vivid Light

float blendVividLight(float base, float blend) {
    return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));
}

vec3 blendVividLight(vec3 base, vec3 blend) {
    return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));
}

vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
    return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Lighten

float blendLighten(float base, float blend) {
    return max(blend,base);
}

vec3 blendLighten(vec3 base, vec3 blend) {
    return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));
}

vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
    return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear burn

float blendLinearBurn(float base, float blend) {
    // Note : Same implementation as BlendSubtractf
    return max(base+blend-1.0,0.0);
}

vec3 blendLinearBurn(vec3 base, vec3 blend) {
    // Note : Same implementation as BlendSubtract
    return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
    return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear dodge

float blendLinearDodge(float base, float blend) {
    // Note : Same implementation as BlendAddf
    return min(base+blend,1.0);
}

vec3 blendLinearDodge(vec3 base, vec3 blend) {
    // Note : Same implementation as BlendAdd
    return min(base+blend,vec3(1.0));
}

vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
    return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear light

float blendLinearLight(float base, float blend) {
    return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));
}

vec3 blendLinearLight(vec3 base, vec3 blend) {
    return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));
}

vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
    return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}
`,fragment:`varying vec3 v_color;

void main() {
    vec3 color = v_color;
    if (u_darken_top == 1.0) {
        vec2 st = gl_FragCoord.xy/resolution.xy;
        color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;
    }
    gl_FragColor = vec4(color, 1.0);
}
`}),F(this,"options",{}),F(this,"_flags",{playing:!0}),F(this,"_canvas",void 0),F(this,"_context",void 0),F(this,"_minigl",void 0),this.options=r,this.setCanvas(this.findCanvas(this.getOption("canvas"))),!this.getCanvas())throw"Missing Canvas. Pass the canvas to the Gradient constructor.";this._minigl=new v(this.getCanvas(),this.getCanvas().offsetWidth,this.getCanvas().offsetHeight),this.init()}var f,o;return f=u,o=[{key:"getOption",value:function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;return l===void 0&&r in this._class.defaultOptions&&(l=this._class.defaultOptions[r]),r in this.options?this.options[r]:l}},{key:"findCanvas",value:function(r){var l=typeof r=="string"?document.querySelector(r):r;return l instanceof HTMLCanvasElement?l:null}},{key:"setCanvas",value:function(r){r?(this._canvas=r,this._context=r.getContext("webgl",{antialias:!0})):(this._canvas=null,this._context=null)}},{key:"getCanvas",value:function(){return this._canvas}},{key:"getContext",value:function(){return this._context}},{key:"setFlag",value:function(r,l){return this._flags[r]=l}},{key:"getFlag",value:function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;return this._flags[r]||l}},{key:"handleScroll",value:function(){clearTimeout(this.scrollingTimeout),this.scrollingTimeout=setTimeout(this.handleScrollEnd,this.scrollingRefreshDelay),this.getFlag("playing")&&(this.setFlag("isScrolling",!0),this.pause())}},{key:"handleScrollEnd",value:function(){this.setFlag("isScrolling",!1),this.getFlag("isIntersecting")&&this.play()}},{key:"resize",value:function(){var r=Qe(this.getOption("density"),2),l=r[0],g=r[1];this.width=window.innerWidth,this._minigl.setSize(this.width,this.height),this._minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*l),this.ySegCount=Math.ceil(this.height*g),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}},{key:"animate",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,l=!!window.document.hidden||!this.getFlag("playing")||parseInt(r,10)%2==0,g=this.getFlag("lastFrame",0);if(l||(this.time+=Math.min(r-g,1e3/15),g=this.setFlag("lastFrame",r),this.mesh.material.uniforms.u_time.value=this.time,this._minigl.render()),g!==0&&this.getOption("static"))return this._minigl.render(),this.disconnect();this.getFlag("playing")&&requestAnimationFrame(this.animate.bind(this))}},{key:"pause",value:function(){this.setFlag("playing",!1)}},{key:"play",value:function(){requestAnimationFrame(this.animate.bind(this)),this.setFlag("playing",!0)}},{key:"disconnect",value:function(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}},{key:"initMaterial",value:function(){var r=this.getOption("colors").map((function(p){if(p.length===4){var w=p.substr(1).split("").map((function(C){return C+C})).join("");p="#".concat(w)}return p&&"0x".concat(p.substr(1))})).filter(Boolean).map(this.normalizeColor);this.uniforms={u_time:new a(this._minigl,"float",0),u_shadow_power:new a(this._minigl,"float",10),u_darken_top:new a(this._minigl,"float",this.getCanvas().dataset.jsDarkenTop?1:0),u_active_colors:new a(this._minigl,"vec4",this.activeColors),u_global:new a(this._minigl,"struct",{noiseFreq:new a(this._minigl,"vec2",[this.freqX,this.freqY]),noiseSpeed:new a(this._minigl,"float",5e-6)}),u_vertDeform:new a(this._minigl,"struct",{incline:new a(this._minigl,"float",Math.sin(this.getOption("angle"))/Math.cos(this.getOption("angle"))),offsetTop:new a(this._minigl,"float",-.5),offsetBottom:new a(this._minigl,"float",-.5),noiseFreq:new a(this._minigl,"vec2",[3,4]),noiseAmp:new a(this._minigl,"float",this.getOption("amplitude")),noiseSpeed:new a(this._minigl,"float",10),noiseFlow:new a(this._minigl,"float",3),noiseSeed:new a(this._minigl,"float",this.seed)},{excludeFrom:"fragment"}),u_baseColor:new a(this._minigl,"vec3",r[0],{excludeFrom:"fragment"}),u_waveLayers:new a(this._minigl,"array",[],{excludeFrom:"fragment"})};for(var l=1;l<r.length;l+=1){var g=new a(this._minigl,"struct",{color:new a(this._minigl,"vec3",r[l]),noiseFreq:new a(this._minigl,"vec2",[2+l/r.length,3+l/r.length]),noiseSpeed:new a(this._minigl,"float",11+.3*l),noiseFlow:new a(this._minigl,"float",6.5+.3*l),noiseSeed:new a(this._minigl,"float",this.seed+10*l),noiseFloor:new a(this._minigl,"float",.1),noiseCeil:new a(this._minigl,"float",.63+.07*l)});this.uniforms.u_waveLayers.value.push(g)}return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new y(this._minigl,this.vertexShader,this.shaderFiles.fragment,this.uniforms)}},{key:"initMesh",value:function(){this.material=this.initMaterial(),this.geometry=new Ae(this._minigl),this.mesh=new M(this._minigl,this.geometry,this.material),this.mesh.wireframe=this.getOption("wireframe")}},{key:"updateFrequency",value:function(r){this.freqX+=r,this.freqY+=r}},{key:"toggleColor",value:function(r){this.activeColors[r]=this.activeColors[r]===0?1:0}},{key:"init",value:function(){var r=this.getOption("loadedClass");r&&this.getCanvas().classList.add(r),this.initMesh(),this.resize(),requestAnimationFrame(this.animate.bind(this)),window.addEventListener("resize",this.resize)}},{key:"normalizeColor",value:function(r){return[(r>>16&255)/255,(r>>8&255)/255,(255&r)/255]}}],o&&Ze(f.prototype,o),Object.defineProperty(f,"prototype",{writable:!1}),u})();F(Je,"defaultOptions",{canvas:null,colors:["#f00","#0f0","#00f"],wireframe:!1,density:[.06,.16],angle:0,amplitude:320,static:!1,loadedClass:"is-loaded",zoom:1,speed:5,rotation:0}),window.Gradient=Je,window.jQuery&&(jQuery.fn.gradient=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return u.canvas=this.get(0),this._gradient=new Je(u),this})})();const Qr="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Qr);tr();const Zr={name:"Ayman Agamy",avatar:"/theOGcat.jpg",bio:"Developer, creator, and an avid sonic the hedgehog fan."},Jr=[{id:1,label:"Peek Transit App Store",icon:"/icons/appstore.png",url:"https://apps.apple.com/ca/app/peek-transit/id6741770809",description:"Peek Transit App on the App Store"},{id:2,label:"Peek Transit Play Store",icon:"/icons/playstore.png",url:"https://play.google.com/store/apps/details?id=com.aymanhki.peektransit&pcampaignid=web_share",description:"Peek Transit App on the Google Play Store"},{id:3,label:"GitHub",icon:"/icons/github.png",url:"https://github.com/aymhki",description:"Check out my code projects"}],Oe={profile:Zr,links:Jr};var ei=An('<button><img class="link-icon svelte-1wdclfi"/> <span class="link-label svelte-1wdclfi"> </span></button>'),ti=An('<main class="svelte-1wdclfi"><div class="profile-section svelte-1wdclfi"><img class="avatar svelte-1wdclfi"/> <h1 class="name svelte-1wdclfi"> </h1> <p class="bio svelte-1wdclfi"> </p></div> <div class="link-tree svelte-1wdclfi"></div></main>');function ni(e,t){Xt(t,!1);let n,i=an(!1);function s(){return window.matchMedia("(prefers-color-scheme: dark)").matches?["#017a7a","#C54000","#C8C8B0","#001119"]:["#02b8b8","#FF6600","#F5F5DC","#001f3f"]}function a(){window.Gradient?(n&&n.pause(),n=new window.Gradient({canvas:"#gradient-canvas",colors:s(),static:!1,wireframe:!1,density:[.05,.3],angle:0,amplitude:100})):console.error("Gradient library not loaded")}function c(){ne(i,window.matchMedia("(prefers-color-scheme: dark)").matches),a()}function d(E){window.open(E,"_blank")}Kr(()=>{ne(i,window.matchMedia("(prefers-color-scheme: dark)").matches),setTimeout(()=>{a();const E=window.matchMedia("(prefers-color-scheme: dark)");return E.addEventListener("change",c),()=>{E.removeEventListener("change",c),n&&n.pause()}},100)}),$r();var v=ti(),h=be(v),m=be(h),x=Ve(m,2),b=be(x),_=Ve(x,2),y=be(_),S=Ve(h,2);Ur(S,5,()=>Oe.links,E=>E.id,(E,N)=>{var A=ei();let L;var M=be(A),B=Ve(M,2),te=be(B);Dt(K=>{L=Vr(A,1,"link-button svelte-1wdclfi",null,L,K),ke(A,"aria-label",U(N).description),ke(M,"src",U(N).icon),ke(M,"alt",U(N).label),nt(te,U(N).label)},[()=>({dark:U(i)})]),Mr("click",A,()=>d(U(N).url)),Rt(E,A)}),Dt(()=>{ke(m,"src",Oe.profile.avatar),ke(m,"alt",Oe.profile.name),nt(b,Oe.profile.name),nt(y,Oe.profile.bio)}),Rt(e,v),Qt()}Pr(ni,{target:document.getElementById("app")});
