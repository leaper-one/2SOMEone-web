import{n as _e,F as ve,C as me,q as De,s as ge,t as Ve,g as k,v as ye,x as xe,c as q,d as se,y as Me,z as Ae,r as _,A as Ke,i as g,B as m,D as We,E as Ce,G as w,H as b,I as ue,J as Le,a as N,K as qe,u as we,L as Ne,e as Se,M as a,O as W,h as Qe,N as Ue,P as Je,Q as Xe,R as Ye,S as Ze,T as fe}from"./index.bd68ce5d.js";function eo(e,t="default",s=[]){const i=e.$slots[t];return i===void 0?s:i()}function ae(e,t=!0,s=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&s.push(_e(String(r)));return}if(Array.isArray(r)){ae(r,t,s);return}if(r.type===ve){if(r.children===null)return;Array.isArray(r.children)&&ae(r.children,t,s)}else r.type!==me&&s.push(r)}}),s}function ze(e,...t){if(Array.isArray(e))e.forEach(s=>ze(s,...t));else return e(...t)}function D(e){return e.some(t=>De(t)?!(t.type===me||t.type===ve&&!D(t.children)):!0)?e:null}function go(e,t){return e&&D(e())||t()}function yo(e,t,s){return e&&D(e(t))||s(t)}function be(e,t){const s=e&&D(e());return t(s||null)}function oo(e){return!(e&&D(e()))}function pe(e){return e.replace(/#|\(|\)|,|\s/g,"_")}const V=typeof document<"u"&&typeof window<"u",he=xe("n-form-item");function ro(e,{defaultSize:t="medium",mergedSize:s,mergedDisabled:r}={}){const i=ge(he,null);Ve(he,null);const f=k(s?()=>s(i):()=>{const{size:v}=e;if(v)return v;if(i){const{mergedSize:x}=i;if(x.value!==void 0)return x.value}return t}),S=k(r?()=>r(i):()=>{const{disabled:v}=e;return v!==void 0?v:i?i.disabled.value:!1}),y=k(()=>{const{status:v}=e;return v||(i==null?void 0:i.mergedValidationStatus.value)});return ye(()=>{i&&i.restoreValidation()}),{mergedSizeRef:f,mergedDisabledRef:S,mergedStatusRef:y,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}const to=q("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),no=se({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Me("-base-wave",to,Ae(e,"clsPrefix"));const t=_(null),s=_(!1);let r=null;return ye(()=>{r!==null&&window.clearTimeout(r)}),{active:s,selfRef:t,play(){r!==null&&(window.clearTimeout(r),s.value=!1,r=null),Ke(()=>{var i;(i=t.value)===null||i===void 0||i.offsetHeight,s.value=!0,r=window.setTimeout(()=>{s.value=!1,r=null},1e3)})}}},render(){const{clsPrefix:e}=this;return g("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:R}=We;function io({duration:e=".2s",delay:t=".1s"}={}){return[m("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),m("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),m("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${R},
 max-width ${e} ${R} ${t},
 margin-left ${e} ${R} ${t},
 margin-right ${e} ${R} ${t};
 `),m("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${R} ${t},
 max-width ${e} ${R},
 margin-left ${e} ${R},
 margin-right ${e} ${R};
 `)]}const ao=V&&"chrome"in window;V&&navigator.userAgent.includes("Firefox");const so=V&&navigator.userAgent.includes("Safari")&&!ao;function j(e){return Ce(e,[255,255,255,.16])}function L(e){return Ce(e,[0,0,0,.12])}const lo=xe("n-button-group"),co=m([q("button",`
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
 `,[w("color",[b("border",{borderColor:"var(--n-border-color)"}),w("disabled",[b("border",{borderColor:"var(--n-border-color-disabled)"})]),ue("disabled",[m("&:focus",[b("state-border",{borderColor:"var(--n-border-color-focus)"})]),m("&:hover",[b("state-border",{borderColor:"var(--n-border-color-hover)"})]),m("&:active",[b("state-border",{borderColor:"var(--n-border-color-pressed)"})]),w("pressed",[b("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),w("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[b("border",{border:"var(--n-border-disabled)"})]),ue("disabled",[m("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[b("state-border",{border:"var(--n-border-focus)"})]),m("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[b("state-border",{border:"var(--n-border-hover)"})]),m("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[b("state-border",{border:"var(--n-border-pressed)"})]),w("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[b("state-border",{border:"var(--n-border-pressed)"})])]),w("loading","cursor: wait;"),q("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[w("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),V&&"MozBoxSizing"in document.createElement("div").style?m("&::moz-focus-inner",{border:0}):null,b("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),b("border",{border:"var(--n-border)"}),b("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),b("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[q("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Le({top:"50%",originalTransform:"translateY(-50%)"})]),io()]),b("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[m("~",[b("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),w("block",`
 display: flex;
 width: 100%;
 `),w("dashed",[b("border, state-border",{borderStyle:"dashed !important"})]),w("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),m("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),m("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),uo=Object.assign(Object.assign({},N.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!so}}),$e=se({name:"Button",props:uo,setup(e){const t=_(null),s=_(null),r=_(!1),i=qe(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),f=ge(lo,{}),{mergedSizeRef:S}=ro({},{defaultSize:"medium",mergedSize:n=>{const{size:p}=e;if(p)return p;const{size:z}=f;if(z)return z;const{mergedSize:o}=n||{};return o?o.value:"medium"}}),y=k(()=>e.focusable&&!e.disabled),v=n=>{var p;y.value||n.preventDefault(),!e.nativeFocusBehavior&&(n.preventDefault(),!e.disabled&&y.value&&((p=t.value)===null||p===void 0||p.focus({preventScroll:!0})))},x=n=>{var p;if(!e.disabled&&!e.loading){const{onClick:z}=e;z&&ze(z,n),e.text||(p=s.value)===null||p===void 0||p.play()}},Q=n=>{switch(n.key){case"Enter":if(!e.keyboard)return;r.value=!1}},U=n=>{switch(n.key){case"Enter":if(!e.keyboard||e.loading){n.preventDefault();return}r.value=!0}},O=()=>{r.value=!1},{inlineThemeDisabled:G,mergedClsPrefixRef:$,mergedRtlRef:J}=we(e),B=N("Button","-button",co,Ne,e,$),E=Se("Button",J,$),F=k(()=>{const n=B.value,{common:{cubicBezierEaseInOut:p,cubicBezierEaseOut:z},self:o}=n,{rippleDuration:X,opacityDisabled:M,fontWeight:Y,fontWeightStrong:Z}=o,C=S.value,{dashed:ee,type:I,ghost:oe,text:P,color:c,round:le,circle:re,textColor:H,secondary:Be,tertiary:ce,quaternary:Te,strong:Pe}=e,Re={"font-weight":Pe?Z:Y};let d={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const A=I==="tertiary",de=I==="default",l=A?"default":I;if(P){const u=H||c,h=u||o[a("textColorText",l)];d={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":h,"--n-text-color-hover":u?j(u):o[a("textColorTextHover",l)],"--n-text-color-pressed":u?L(u):o[a("textColorTextPressed",l)],"--n-text-color-focus":u?j(u):o[a("textColorTextHover",l)],"--n-text-color-disabled":u||o[a("textColorTextDisabled",l)]}}else if(oe||ee){const u=H||c;d={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":c||o[a("rippleColor",l)],"--n-text-color":u||o[a("textColorGhost",l)],"--n-text-color-hover":u?j(u):o[a("textColorGhostHover",l)],"--n-text-color-pressed":u?L(u):o[a("textColorGhostPressed",l)],"--n-text-color-focus":u?j(u):o[a("textColorGhostHover",l)],"--n-text-color-disabled":u||o[a("textColorGhostDisabled",l)]}}else if(Be){const u=de?o.textColor:A?o.textColorTertiary:o[a("color",l)],h=c||u,K=I!=="default"&&I!=="tertiary";d={"--n-color":K?W(h,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":K?W(h,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":K?W(h,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":K?W(h,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":h,"--n-text-color-hover":h,"--n-text-color-pressed":h,"--n-text-color-focus":h,"--n-text-color-disabled":h}}else if(ce||Te){const u=de?o.textColor:A?o.textColorTertiary:o[a("color",l)],h=c||u;ce?(d["--n-color"]=o.colorTertiary,d["--n-color-hover"]=o.colorTertiaryHover,d["--n-color-pressed"]=o.colorTertiaryPressed,d["--n-color-focus"]=o.colorSecondaryHover,d["--n-color-disabled"]=o.colorTertiary):(d["--n-color"]=o.colorQuaternary,d["--n-color-hover"]=o.colorQuaternaryHover,d["--n-color-pressed"]=o.colorQuaternaryPressed,d["--n-color-focus"]=o.colorQuaternaryHover,d["--n-color-disabled"]=o.colorQuaternary),d["--n-ripple-color"]="#0000",d["--n-text-color"]=h,d["--n-text-color-hover"]=h,d["--n-text-color-pressed"]=h,d["--n-text-color-focus"]=h,d["--n-text-color-disabled"]=h}else d={"--n-color":c||o[a("color",l)],"--n-color-hover":c?j(c):o[a("colorHover",l)],"--n-color-pressed":c?L(c):o[a("colorPressed",l)],"--n-color-focus":c?j(c):o[a("colorFocus",l)],"--n-color-disabled":c||o[a("colorDisabled",l)],"--n-ripple-color":c||o[a("rippleColor",l)],"--n-text-color":H||(c?o.textColorPrimary:A?o.textColorTertiary:o[a("textColor",l)]),"--n-text-color-hover":H||(c?o.textColorHoverPrimary:o[a("textColorHover",l)]),"--n-text-color-pressed":H||(c?o.textColorPressedPrimary:o[a("textColorPressed",l)]),"--n-text-color-focus":H||(c?o.textColorFocusPrimary:o[a("textColorFocus",l)]),"--n-text-color-disabled":H||(c?o.textColorDisabledPrimary:o[a("textColorDisabled",l)])};let te={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};P?te={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:te={"--n-border":o[a("border",l)],"--n-border-hover":o[a("borderHover",l)],"--n-border-pressed":o[a("borderPressed",l)],"--n-border-focus":o[a("borderFocus",l)],"--n-border-disabled":o[a("borderDisabled",l)]};const{[a("height",C)]:ne,[a("fontSize",C)]:ke,[a("padding",C)]:Ee,[a("paddingRound",C)]:Fe,[a("iconSize",C)]:Ie,[a("borderRadius",C)]:He,[a("iconMargin",C)]:je,waveOpacity:Oe}=o,Ge={"--n-width":re&&!P?ne:"initial","--n-height":P?"initial":ne,"--n-font-size":ke,"--n-padding":re||P?"initial":le?Fe:Ee,"--n-icon-size":Ie,"--n-icon-margin":je,"--n-border-radius":P?"initial":re||le?ne:He};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":p,"--n-bezier-ease-out":z,"--n-ripple-duration":X,"--n-opacity-disabled":M,"--n-wave-opacity":Oe},Re),d),te),Ge)}),T=G?Qe("button",k(()=>{let n="";const{dashed:p,type:z,ghost:o,text:X,color:M,round:Y,circle:Z,textColor:C,secondary:ee,tertiary:I,quaternary:oe,strong:P}=e;p&&(n+="a"),o&&(n+="b"),X&&(n+="c"),Y&&(n+="d"),Z&&(n+="e"),ee&&(n+="f"),I&&(n+="g"),oe&&(n+="h"),P&&(n+="i"),M&&(n+="j"+pe(M)),C&&(n+="k"+pe(C));const{value:c}=S;return n+="l"+c[0],n+="m"+z[0],n}),F,e):void 0;return{selfElRef:t,waveElRef:s,mergedClsPrefix:$,mergedFocusable:y,mergedSize:S,showBorder:i,enterPressed:r,rtlEnabled:E,handleMousedown:v,handleKeydown:U,handleBlur:O,handleKeyup:Q,handleClick:x,customColorCssVars:k(()=>{const{color:n}=e;if(!n)return null;const p=j(n);return{"--n-border-color":n,"--n-border-color-hover":p,"--n-border-color-pressed":L(n),"--n-border-color-focus":p,"--n-border-color-disabled":n}}),cssVars:G?void 0:F,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,tag:t,onRender:s}=this;s==null||s();const r=be(this.$slots.default,i=>i&&g("span",{class:`${e}-button__content`},i));return g(t,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&r,g(Ue,{width:!0},{default:()=>be(this.$slots.icon,i=>(this.loading||i)&&g("span",{class:`${e}-button__icon`,style:{margin:oo(this.$slots.default)?"0":""}},g(Je,null,{default:()=>this.loading?g(Xe,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):g("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},i)})))}),this.iconPlacement==="left"&&r,this.text?null:g(no,{ref:"waveElRef",clsPrefix:e}),this.showBorder?g("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?g("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),xo=$e,Co=$e,fo=()=>Ye,bo={name:"Space",self:fo},po=bo;let ie;const ho=()=>{if(!V)return!0;if(ie===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),ie=t}return ie},vo=Object.assign(Object.assign({},N.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),wo=se({name:"Space",props:vo,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:s}=we(e),r=N("Space","-space",void 0,po,e,t),i=Se("Space",s,t);return{useGap:ho(),rtlEnabled:i,mergedClsPrefix:t,margin:k(()=>{const{size:f}=e;if(Array.isArray(f))return{horizontal:f[0],vertical:f[1]};if(typeof f=="number")return{horizontal:f,vertical:f};const{self:{[a("gap",f)]:S}}=r.value,{row:y,col:v}=Ze(S);return{horizontal:fe(v),vertical:fe(y)}})}},render(){const{vertical:e,align:t,inline:s,justify:r,itemStyle:i,margin:f,wrap:S,mergedClsPrefix:y,rtlEnabled:v,useGap:x,wrapItem:Q,internalUseGap:U}=this,O=ae(eo(this));if(!O.length)return null;const G=`${f.horizontal}px`,$=`${f.horizontal/2}px`,J=`${f.vertical}px`,B=`${f.vertical/2}px`,E=O.length-1,F=r.startsWith("space-");return g("div",{role:"none",class:[`${y}-space`,v&&`${y}-space--rtl`],style:{display:s?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(r)?"flex-"+r:r,flexWrap:!S||e?"nowrap":"wrap",marginTop:x||e?"":`-${B}`,marginBottom:x||e?"":`-${B}`,alignItems:t,gap:x?`${f.vertical}px ${f.horizontal}px`:""}},!Q&&(x||U)?O:O.map((T,n)=>g("div",{role:"none",style:[i,{maxWidth:"100%"},x?"":e?{marginBottom:n!==E?J:""}:v?{marginLeft:F?r==="space-between"&&n===E?"":$:n!==E?G:"",marginRight:F?r==="space-between"&&n===0?"":$:"",paddingTop:B,paddingBottom:B}:{marginRight:F?r==="space-between"&&n===E?"":$:n!==E?G:"",marginLeft:F?r==="space-between"&&n===0?"":$:"",paddingTop:B,paddingBottom:B}]},T)))}});export{xo as N,Co as X,wo as _,go as a,yo as b,ze as c,so as d,pe as e,ae as f,eo as g,lo as h,V as i,oo as j,be as r,ro as u};
