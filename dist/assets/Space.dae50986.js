import{n as bt,F as Ge,C as Ne,q as pt,d as ce,s as gt,t as mt,v as we,x as yt,y as Le,z as xt,g as F,A as je,c as ae,B as wt,D as zt,r as Q,E as Ct,i as z,G as x,H as St,I as qe,J as O,K as g,L as Be,M as Rt,a as de,O as Bt,u as Ke,P as Tt,e as Xe,Q as a,R as re,h as Et,N as Ot,S as $t,T as kt,U as Pt}from"./index.a647277d.js";function Te(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function yr(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function xr(e,t){const r=e.trim().split(/\s+/g),o={top:r[0]};switch(r.length){case 1:o.right=r[0],o.bottom=r[0],o.left=r[0];break;case 2:o.right=r[1],o.left=r[1],o.bottom=r[0];break;case 3:o.right=r[1],o.bottom=r[2],o.left=r[1];break;case 4:o.right=r[1],o.bottom=r[2],o.left=r[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return t===void 0?o:o[t]}function Ht(e,t){const[r,o]=e.split(" ");return t?t==="row"?r:o:{row:r,col:o||r}}function Dt(e,t="default",r=[]){const n=e.$slots[t];return n===void 0?r:n()}function ye(e,t=!0,r=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&r.push(bt(String(o)));return}if(Array.isArray(o)){ye(o,t,r);return}if(o.type===Ge){if(o.children===null)return;Array.isArray(o.children)&&ye(o.children,t,r)}else o.type!==Ne&&r.push(o)}}),r}function Qe(e,...t){if(Array.isArray(e))e.forEach(r=>Qe(r,...t));else return e(...t)}function Y(e){return e.some(t=>pt(t)?!(t.type===Ne||t.type===Ge&&!Y(t.children)):!0)?e:null}function wr(e,t){return e&&Y(e())||t()}function zr(e,t,r){return e&&Y(e(t))||r(t)}function Ee(e,t){const r=e&&Y(e());return t(r||null)}function It(e){return!(e&&Y(e()))}function Oe(e){return e.replace(/#|\(|\)|,|\s/g,"_")}const Z=typeof document<"u"&&typeof window<"u";function $e(e,t){console.error(`[vueuc/${e}]: ${t}`)}var N=[],Mt=function(){return N.some(function(e){return e.activeTargets.length>0})},Ft=function(){return N.some(function(e){return e.skippedTargets.length>0})},ke="ResizeObserver loop completed with undelivered notifications.",_t=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:ke}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=ke),window.dispatchEvent(e)},J;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(J||(J={}));var L=function(e){return Object.freeze(e)},At=function(){function e(t,r){this.inlineSize=t,this.blockSize=r,L(this)}return e}(),Ue=function(){function e(t,r,o,n){return this.x=t,this.y=r,this.width=o,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,L(this)}return e.prototype.toJSON=function(){var t=this,r=t.x,o=t.y,n=t.top,l=t.right,d=t.bottom,m=t.left,u=t.width,b=t.height;return{x:r,y:o,top:n,right:l,bottom:d,left:m,width:u,height:b}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),ze=function(e){return e instanceof SVGElement&&"getBBox"in e},Je=function(e){if(ze(e)){var t=e.getBBox(),r=t.width,o=t.height;return!r&&!o}var n=e,l=n.offsetWidth,d=n.offsetHeight;return!(l||d||e.getClientRects().length)},Pe=function(e){var t;if(e instanceof Element)return!0;var r=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},Vt=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},U=typeof window<"u"?window:{},oe=new WeakMap,He=/auto|scroll/,Wt=/^tb|vertical/,Gt=/msie|trident/i.test(U.navigator&&U.navigator.userAgent),$=function(e){return parseFloat(e||"0")},j=function(e,t,r){return e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=!1),new At((r?t:e)||0,(r?e:t)||0)},De=L({devicePixelContentBoxSize:j(),borderBoxSize:j(),contentBoxSize:j(),contentRect:new Ue(0,0,0,0)}),Ye=function(e,t){if(t===void 0&&(t=!1),oe.has(e)&&!t)return oe.get(e);if(Je(e))return oe.set(e,De),De;var r=getComputedStyle(e),o=ze(e)&&e.ownerSVGElement&&e.getBBox(),n=!Gt&&r.boxSizing==="border-box",l=Wt.test(r.writingMode||""),d=!o&&He.test(r.overflowY||""),m=!o&&He.test(r.overflowX||""),u=o?0:$(r.paddingTop),b=o?0:$(r.paddingRight),_=o?0:$(r.paddingBottom),k=o?0:$(r.paddingLeft),H=o?0:$(r.borderTopWidth),A=o?0:$(r.borderRightWidth),T=o?0:$(r.borderBottomWidth),q=o?0:$(r.borderLeftWidth),S=k+b,E=u+_,R=q+A,C=H+T,s=m?e.offsetHeight-C-e.clientHeight:0,p=d?e.offsetWidth-R-e.clientWidth:0,B=n?S+R:0,i=n?E+C:0,D=o?o.width:$(r.width)-B-p,P=o?o.height:$(r.height)-i-s,K=D+S+p+R,X=P+E+s+C,w=L({devicePixelContentBoxSize:j(Math.round(D*devicePixelRatio),Math.round(P*devicePixelRatio),l),borderBoxSize:j(K,X,l),contentBoxSize:j(D,P,l),contentRect:new Ue(k,u,D,P)});return oe.set(e,w),w},Ze=function(e,t,r){var o=Ye(e,r),n=o.borderBoxSize,l=o.contentBoxSize,d=o.devicePixelContentBoxSize;switch(t){case J.DEVICE_PIXEL_CONTENT_BOX:return d;case J.BORDER_BOX:return n;default:return l}},Nt=function(){function e(t){var r=Ye(t);this.target=t,this.contentRect=r.contentRect,this.borderBoxSize=L([r.borderBoxSize]),this.contentBoxSize=L([r.contentBoxSize]),this.devicePixelContentBoxSize=L([r.devicePixelContentBoxSize])}return e}(),et=function(e){if(Je(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},Lt=function(){var e=1/0,t=[];N.forEach(function(d){if(d.activeTargets.length!==0){var m=[];d.activeTargets.forEach(function(b){var _=new Nt(b.target),k=et(b.target);m.push(_),b.lastReportedSize=Ze(b.target,b.observedBox),k<e&&(e=k)}),t.push(function(){d.callback.call(d.observer,m,d.observer)}),d.activeTargets.splice(0,d.activeTargets.length)}});for(var r=0,o=t;r<o.length;r++){var n=o[r];n()}return e},Ie=function(e){N.forEach(function(r){r.activeTargets.splice(0,r.activeTargets.length),r.skippedTargets.splice(0,r.skippedTargets.length),r.observationTargets.forEach(function(n){n.isActive()&&(et(n.target)>e?r.activeTargets.push(n):r.skippedTargets.push(n))})})},jt=function(){var e=0;for(Ie(e);Mt();)e=Lt(),Ie(e);return Ft()&&_t(),e>0},pe,tt=[],qt=function(){return tt.splice(0).forEach(function(e){return e()})},Kt=function(e){if(!pe){var t=0,r=document.createTextNode(""),o={characterData:!0};new MutationObserver(function(){return qt()}).observe(r,o),pe=function(){r.textContent="".concat(t?t--:t++)}}tt.push(e),pe()},Xt=function(e){Kt(function(){requestAnimationFrame(e)})},le=0,Qt=function(){return!!le},Ut=250,Jt={attributes:!0,characterData:!0,childList:!0,subtree:!0},Me=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Fe=function(e){return e===void 0&&(e=0),Date.now()+e},ge=!1,Yt=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var r=this;if(t===void 0&&(t=Ut),!ge){ge=!0;var o=Fe(t);Xt(function(){var n=!1;try{n=jt()}finally{if(ge=!1,t=o-Fe(),!Qt())return;n?r.run(1e3):t>0?r.run(t):r.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,r=function(){return t.observer&&t.observer.observe(document.body,Jt)};document.body?r():U.addEventListener("DOMContentLoaded",r)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Me.forEach(function(r){return U.addEventListener(r,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),Me.forEach(function(r){return U.removeEventListener(r,t.listener,!0)}),this.stopped=!0)},e}(),xe=new Yt,_e=function(e){!le&&e>0&&xe.start(),le+=e,!le&&xe.stop()},Zt=function(e){return!ze(e)&&!Vt(e)&&getComputedStyle(e).display==="inline"},er=function(){function e(t,r){this.target=t,this.observedBox=r||J.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=Ze(this.target,this.observedBox,!0);return Zt(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),tr=function(){function e(t,r){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=r}return e}(),ne=new WeakMap,Ae=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},ie=function(){function e(){}return e.connect=function(t,r){var o=new tr(t,r);ne.set(t,o)},e.observe=function(t,r,o){var n=ne.get(t),l=n.observationTargets.length===0;Ae(n.observationTargets,r)<0&&(l&&N.push(n),n.observationTargets.push(new er(r,o&&o.box)),_e(1),xe.schedule())},e.unobserve=function(t,r){var o=ne.get(t),n=Ae(o.observationTargets,r),l=o.observationTargets.length===1;n>=0&&(l&&N.splice(N.indexOf(o),1),o.observationTargets.splice(n,1),_e(-1))},e.disconnect=function(t){var r=this,o=ne.get(t);o.observationTargets.slice().forEach(function(n){return r.unobserve(t,n.target)}),o.activeTargets.splice(0,o.activeTargets.length)},e}(),rr=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");ie.connect(this,t)}return e.prototype.observe=function(t,r){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Pe(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");ie.observe(this,t,r)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Pe(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");ie.unobserve(this,t)},e.prototype.disconnect=function(){ie.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class or{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new rr(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const r of t){const o=this.elHandlersMap.get(r.target);o!==void 0&&o(r)}}registerHandler(t,r){this.elHandlersMap.set(t,r),this.observer.observe(t)}unregisterHandler(t){!this.elHandlersMap.has(t)||(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}const Ve=new or,Cr=ce({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const r=gt().proxy;function o(n){const{onResize:l}=e;l!==void 0&&l(n)}mt(()=>{const n=r.$el;if(n===void 0){$e("resize-observer","$el does not exist.");return}if(n.nextElementSibling!==n.nextSibling&&n.nodeType===3&&n.nodeValue!==""){$e("resize-observer","$el can not be observed (it may be a text node).");return}n.nextElementSibling!==null&&(Ve.registerHandler(n.nextElementSibling,o),t=!0)}),we(()=>{t&&Ve.unregisterHandler(r.$el.nextElementSibling)})},render(){return yt(this.$slots,"default")}}),We=je("n-form-item");function nr(e,{defaultSize:t="medium",mergedSize:r,mergedDisabled:o}={}){const n=Le(We,null);xt(We,null);const l=F(r?()=>r(n):()=>{const{size:u}=e;if(u)return u;if(n){const{mergedSize:b}=n;if(b.value!==void 0)return b.value}return t}),d=F(o?()=>o(n):()=>{const{disabled:u}=e;return u!==void 0?u:n?n.disabled.value:!1}),m=F(()=>{const{status:u}=e;return u||(n==null?void 0:n.mergedValidationStatus.value)});return we(()=>{n&&n.restoreValidation()}),{mergedSizeRef:l,mergedDisabledRef:d,mergedStatusRef:m,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}const ir=ae("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),sr=ce({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){wt("-base-wave",ir,zt(e,"clsPrefix"));const t=Q(null),r=Q(!1);let o=null;return we(()=>{o!==null&&window.clearTimeout(o)}),{active:r,selfRef:t,play(){o!==null&&(window.clearTimeout(o),r.value=!1,o=null),Ct(()=>{var n;(n=t.value)===null||n===void 0||n.offsetHeight,r.value=!0,o=window.setTimeout(()=>{r.value=!1,o=null},1e3)})}}},render(){const{clsPrefix:e}=this;return z("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:M}=St;function ar({duration:e=".2s",delay:t=".1s"}={}){return[x("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),x("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),x("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${M},
 max-width ${e} ${M} ${t},
 margin-left ${e} ${M} ${t},
 margin-right ${e} ${M} ${t};
 `),x("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${M} ${t},
 max-width ${e} ${M},
 margin-left ${e} ${M},
 margin-right ${e} ${M};
 `)]}const lr=Z&&"chrome"in window;Z&&navigator.userAgent.includes("Firefox");const cr=Z&&navigator.userAgent.includes("Safari")&&!lr;function G(e){return qe(e,[255,255,255,.16])}function se(e){return qe(e,[0,0,0,.12])}const dr=je("n-button-group"),ur=x([ae("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[O("color",[g("border",{borderColor:"var(--n-border-color)"}),O("disabled",[g("border",{borderColor:"var(--n-border-color-disabled)"})]),Be("disabled",[x("&:focus",[g("state-border",{borderColor:"var(--n-border-color-focus)"})]),x("&:hover",[g("state-border",{borderColor:"var(--n-border-color-hover)"})]),x("&:active",[g("state-border",{borderColor:"var(--n-border-color-pressed)"})]),O("pressed",[g("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),O("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[g("border",{border:"var(--n-border-disabled)"})]),Be("disabled",[x("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[g("state-border",{border:"var(--n-border-focus)"})]),x("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[g("state-border",{border:"var(--n-border-hover)"})]),x("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[g("state-border",{border:"var(--n-border-pressed)"})]),O("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[g("state-border",{border:"var(--n-border-pressed)"})])]),O("loading","cursor: wait;"),ae("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[O("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Z&&"MozBoxSizing"in document.createElement("div").style?x("&::moz-focus-inner",{border:0}):null,g("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),g("border",{border:"var(--n-border)"}),g("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),g("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[ae("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Rt({top:"50%",originalTransform:"translateY(-50%)"})]),ar()]),g("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[x("~",[g("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),O("block",`
 display: flex;
 width: 100%;
 `),O("dashed",[g("border, state-border",{borderStyle:"dashed !important"})]),O("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),x("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),x("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),fr=Object.assign(Object.assign({},de.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!cr}}),rt=ce({name:"Button",props:fr,setup(e){const t=Q(null),r=Q(null),o=Q(!1),n=Bt(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),l=Le(dr,{}),{mergedSizeRef:d}=nr({},{defaultSize:"medium",mergedSize:s=>{const{size:p}=e;if(p)return p;const{size:B}=l;if(B)return B;const{mergedSize:i}=s||{};return i?i.value:"medium"}}),m=F(()=>e.focusable&&!e.disabled),u=s=>{var p;m.value||s.preventDefault(),!e.nativeFocusBehavior&&(s.preventDefault(),!e.disabled&&m.value&&((p=t.value)===null||p===void 0||p.focus({preventScroll:!0})))},b=s=>{var p;if(!e.disabled&&!e.loading){const{onClick:B}=e;B&&Qe(B,s),e.text||(p=r.value)===null||p===void 0||p.play()}},_=s=>{switch(s.key){case"Enter":if(!e.keyboard)return;o.value=!1}},k=s=>{switch(s.key){case"Enter":if(!e.keyboard||e.loading){s.preventDefault();return}o.value=!0}},H=()=>{o.value=!1},{inlineThemeDisabled:A,mergedClsPrefixRef:T,mergedRtlRef:q}=Ke(e),S=de("Button","-button",ur,Tt,e,T),E=Xe("Button",q,T),R=F(()=>{const s=S.value,{common:{cubicBezierEaseInOut:p,cubicBezierEaseOut:B},self:i}=s,{rippleDuration:D,opacityDisabled:P,fontWeight:K,fontWeightStrong:X}=i,w=d.value,{dashed:ue,type:V,ghost:fe,text:I,color:f,round:Ce,circle:he,textColor:W,secondary:ot,tertiary:Se,quaternary:nt,strong:it}=e,st={"font-weight":it?X:K};let h={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const ee=V==="tertiary",Re=V==="default",c=ee?"default":V;if(I){const v=W||f,y=v||i[a("textColorText",c)];h={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":y,"--n-text-color-hover":v?G(v):i[a("textColorTextHover",c)],"--n-text-color-pressed":v?se(v):i[a("textColorTextPressed",c)],"--n-text-color-focus":v?G(v):i[a("textColorTextHover",c)],"--n-text-color-disabled":v||i[a("textColorTextDisabled",c)]}}else if(fe||ue){const v=W||f;h={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":f||i[a("rippleColor",c)],"--n-text-color":v||i[a("textColorGhost",c)],"--n-text-color-hover":v?G(v):i[a("textColorGhostHover",c)],"--n-text-color-pressed":v?se(v):i[a("textColorGhostPressed",c)],"--n-text-color-focus":v?G(v):i[a("textColorGhostHover",c)],"--n-text-color-disabled":v||i[a("textColorGhostDisabled",c)]}}else if(ot){const v=Re?i.textColor:ee?i.textColorTertiary:i[a("color",c)],y=f||v,te=V!=="default"&&V!=="tertiary";h={"--n-color":te?re(y,{alpha:Number(i.colorOpacitySecondary)}):i.colorSecondary,"--n-color-hover":te?re(y,{alpha:Number(i.colorOpacitySecondaryHover)}):i.colorSecondaryHover,"--n-color-pressed":te?re(y,{alpha:Number(i.colorOpacitySecondaryPressed)}):i.colorSecondaryPressed,"--n-color-focus":te?re(y,{alpha:Number(i.colorOpacitySecondaryHover)}):i.colorSecondaryHover,"--n-color-disabled":i.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":y,"--n-text-color-hover":y,"--n-text-color-pressed":y,"--n-text-color-focus":y,"--n-text-color-disabled":y}}else if(Se||nt){const v=Re?i.textColor:ee?i.textColorTertiary:i[a("color",c)],y=f||v;Se?(h["--n-color"]=i.colorTertiary,h["--n-color-hover"]=i.colorTertiaryHover,h["--n-color-pressed"]=i.colorTertiaryPressed,h["--n-color-focus"]=i.colorSecondaryHover,h["--n-color-disabled"]=i.colorTertiary):(h["--n-color"]=i.colorQuaternary,h["--n-color-hover"]=i.colorQuaternaryHover,h["--n-color-pressed"]=i.colorQuaternaryPressed,h["--n-color-focus"]=i.colorQuaternaryHover,h["--n-color-disabled"]=i.colorQuaternary),h["--n-ripple-color"]="#0000",h["--n-text-color"]=y,h["--n-text-color-hover"]=y,h["--n-text-color-pressed"]=y,h["--n-text-color-focus"]=y,h["--n-text-color-disabled"]=y}else h={"--n-color":f||i[a("color",c)],"--n-color-hover":f?G(f):i[a("colorHover",c)],"--n-color-pressed":f?se(f):i[a("colorPressed",c)],"--n-color-focus":f?G(f):i[a("colorFocus",c)],"--n-color-disabled":f||i[a("colorDisabled",c)],"--n-ripple-color":f||i[a("rippleColor",c)],"--n-text-color":W||(f?i.textColorPrimary:ee?i.textColorTertiary:i[a("textColor",c)]),"--n-text-color-hover":W||(f?i.textColorHoverPrimary:i[a("textColorHover",c)]),"--n-text-color-pressed":W||(f?i.textColorPressedPrimary:i[a("textColorPressed",c)]),"--n-text-color-focus":W||(f?i.textColorFocusPrimary:i[a("textColorFocus",c)]),"--n-text-color-disabled":W||(f?i.textColorDisabledPrimary:i[a("textColorDisabled",c)])};let ve={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};I?ve={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:ve={"--n-border":i[a("border",c)],"--n-border-hover":i[a("borderHover",c)],"--n-border-pressed":i[a("borderPressed",c)],"--n-border-focus":i[a("borderFocus",c)],"--n-border-disabled":i[a("borderDisabled",c)]};const{[a("height",w)]:be,[a("fontSize",w)]:at,[a("padding",w)]:lt,[a("paddingRound",w)]:ct,[a("iconSize",w)]:dt,[a("borderRadius",w)]:ut,[a("iconMargin",w)]:ft,waveOpacity:ht}=i,vt={"--n-width":he&&!I?be:"initial","--n-height":I?"initial":be,"--n-font-size":at,"--n-padding":he||I?"initial":Ce?ct:lt,"--n-icon-size":dt,"--n-icon-margin":ft,"--n-border-radius":I?"initial":he||Ce?be:ut};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":p,"--n-bezier-ease-out":B,"--n-ripple-duration":D,"--n-opacity-disabled":P,"--n-wave-opacity":ht},st),h),ve),vt)}),C=A?Et("button",F(()=>{let s="";const{dashed:p,type:B,ghost:i,text:D,color:P,round:K,circle:X,textColor:w,secondary:ue,tertiary:V,quaternary:fe,strong:I}=e;p&&(s+="a"),i&&(s+="b"),D&&(s+="c"),K&&(s+="d"),X&&(s+="e"),ue&&(s+="f"),V&&(s+="g"),fe&&(s+="h"),I&&(s+="i"),P&&(s+="j"+Oe(P)),w&&(s+="k"+Oe(w));const{value:f}=d;return s+="l"+f[0],s+="m"+B[0],s}),R,e):void 0;return{selfElRef:t,waveElRef:r,mergedClsPrefix:T,mergedFocusable:m,mergedSize:d,showBorder:n,enterPressed:o,rtlEnabled:E,handleMousedown:u,handleKeydown:k,handleBlur:H,handleKeyup:_,handleClick:b,customColorCssVars:F(()=>{const{color:s}=e;if(!s)return null;const p=G(s);return{"--n-border-color":s,"--n-border-color-hover":p,"--n-border-color-pressed":se(s),"--n-border-color-focus":p,"--n-border-color-disabled":s}}),cssVars:A?void 0:R,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){const{mergedClsPrefix:e,tag:t,onRender:r}=this;r==null||r();const o=Ee(this.$slots.default,n=>n&&z("span",{class:`${e}-button__content`},n));return z(t,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&o,z(Ot,{width:!0},{default:()=>Ee(this.$slots.icon,n=>(this.loading||n)&&z("span",{class:`${e}-button__icon`,style:{margin:It(this.$slots.default)?"0":""}},z($t,null,{default:()=>this.loading?z(kt,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):z("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},n)})))}),this.iconPlacement==="left"&&o,this.text?null:z(sr,{ref:"waveElRef",clsPrefix:e}),this.showBorder?z("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?z("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),Sr=rt,Rr=rt,hr=()=>Pt,vr={name:"Space",self:hr},br=vr;let me;const pr=()=>{if(!Z)return!0;if(me===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),me=t}return me},gr=Object.assign(Object.assign({},de.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Br=ce({name:"Space",props:gr,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:r}=Ke(e),o=de("Space","-space",void 0,br,e,t),n=Xe("Space",r,t);return{useGap:pr(),rtlEnabled:n,mergedClsPrefix:t,margin:F(()=>{const{size:l}=e;if(Array.isArray(l))return{horizontal:l[0],vertical:l[1]};if(typeof l=="number")return{horizontal:l,vertical:l};const{self:{[a("gap",l)]:d}}=o.value,{row:m,col:u}=Ht(d);return{horizontal:Te(u),vertical:Te(m)}})}},render(){const{vertical:e,align:t,inline:r,justify:o,itemStyle:n,margin:l,wrap:d,mergedClsPrefix:m,rtlEnabled:u,useGap:b,wrapItem:_,internalUseGap:k}=this,H=ye(Dt(this));if(!H.length)return null;const A=`${l.horizontal}px`,T=`${l.horizontal/2}px`,q=`${l.vertical}px`,S=`${l.vertical/2}px`,E=H.length-1,R=o.startsWith("space-");return z("div",{role:"none",class:[`${m}-space`,u&&`${m}-space--rtl`],style:{display:r?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(o)?"flex-"+o:o,flexWrap:!d||e?"nowrap":"wrap",marginTop:b||e?"":`-${S}`,marginBottom:b||e?"":`-${S}`,alignItems:t,gap:b?`${l.vertical}px ${l.horizontal}px`:""}},!_&&(b||k)?H:H.map((C,s)=>z("div",{role:"none",style:[n,{maxWidth:"100%"},b?"":e?{marginBottom:s!==E?q:""}:u?{marginLeft:R?o==="space-between"&&s===E?"":T:s!==E?A:"",marginRight:R?o==="space-between"&&s===0?"":T:"",paddingTop:S,paddingBottom:S}:{marginRight:R?o==="space-between"&&s===E?"":T:s!==E?A:"",marginLeft:R?o==="space-between"&&s===0?"":T:"",paddingTop:S,paddingBottom:S}]},C)))}});export{Cr as V,Rr as X,Br as _,Sr as a,wr as b,Qe as c,xr as d,zr as e,ye as f,Dt as g,cr as h,Z as i,Oe as j,dr as k,It as l,yr as p,Ee as r,nr as u};
