var D=Object.defineProperty;var G=(t,e,o)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var p=(t,e,o)=>(G(t,typeof e!="symbol"?e+"":e,o),o);import{g,c as u,L as x,G as l,J as i,K as f,d as $,u as v,B as K,z as L,e as V,i as h,a as y,aK as j,Q as k,h as M}from"./index.a647277d.js";import{k as O}from"./Space.dae50986.js";import{R as W}from"./AxiosRequest.bad9c7d0.js";function q(t,e){return g(()=>{for(const o of e)if(t[o]!==void 0)return t[o];return t[e[e.length-1]]})}const r="0!important",C="-1px!important";function d(t){return i(t+"-type",[l("& +",[u("button",{},[i(t+"-type",[f("border",{borderLeftWidth:r}),f("state-border",{left:C})])])])])}function c(t){return i(t+"-type",[l("& +",[u("button",[i(t+"-type",[f("border",{borderTopWidth:r}),f("state-border",{top:C})])])])])}const H=u("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[x("vertical",{flexDirection:"row"},[x("rtl",[u("button",[l("&:first-child:not(:last-child)",`
 margin-right: ${r};
 border-top-right-radius: ${r};
 border-bottom-right-radius: ${r};
 `),l("&:last-child:not(:first-child)",`
 margin-left: ${r};
 border-top-left-radius: ${r};
 border-bottom-left-radius: ${r};
 `),l("&:not(:first-child):not(:last-child)",`
 margin-left: ${r};
 margin-right: ${r};
 border-radius: ${r};
 `),d("default"),i("ghost",[d("primary"),d("info"),d("success"),d("warning"),d("error")])])])]),i("vertical",{flexDirection:"column"},[u("button",[l("&:first-child:not(:last-child)",`
 margin-bottom: ${r};
 margin-left: ${r};
 margin-right: ${r};
 border-bottom-left-radius: ${r};
 border-bottom-right-radius: ${r};
 `),l("&:last-child:not(:first-child)",`
 margin-top: ${r};
 margin-left: ${r};
 margin-right: ${r};
 border-top-left-radius: ${r};
 border-top-right-radius: ${r};
 `),l("&:not(:first-child):not(:last-child)",`
 margin: ${r};
 border-radius: ${r};
 `),c("default"),i("ghost",[c("primary"),c("info"),c("success"),c("warning"),c("error")])])])]),I={size:{type:String,default:void 0},vertical:Boolean},X=$({name:"ButtonGroup",props:I,setup(t){const{mergedClsPrefixRef:e,mergedRtlRef:o}=v(t);return K("-button-group",H,e),L(O,t),{rtlEnabled:V("ButtonGroup",o,e),mergedClsPrefix:e}},render(){const{mergedClsPrefix:t}=this;return h("div",{class:[`${t}-button-group`,this.rtlEnabled&&`${t}-button-group--rtl`,this.vertical&&`${t}-button-group--vertical`],role:"group"},this.$slots)}}),N=u("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[i("strong",`
 font-weight: var(--n-font-weight-strong);
 `),i("italic",{fontStyle:"italic"}),i("underline",{textDecoration:"underline"}),i("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),F=Object.assign(Object.assign({},y.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),Y=$({name:"Text",props:F,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:o}=v(t),s=y("Typography","-text",N,j,t,e),a=g(()=>{const{depth:m,type:b}=t,R=b==="default"?m===void 0?"textColor":`textColor${m}Depth`:k("textColor",b),{common:{fontWeightStrong:B,fontFamilyMono:_,cubicBezierEaseInOut:P},self:{codeTextColor:z,codeBorderRadius:S,codeColor:T,codeBorder:w,[R]:E}}=s.value;return{"--n-bezier":P,"--n-text-color":E,"--n-font-weight-strong":B,"--n-font-famliy-mono":_,"--n-code-border-radius":S,"--n-code-text-color":z,"--n-code-color":T,"--n-code-border":w}}),n=o?M("text",g(()=>`${t.type[0]}${t.depth||""}`),a,t):void 0;return{mergedClsPrefix:e,compitableTag:q(t,["as","tag"]),cssVars:o?void 0:a,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var t,e,o;const{mergedClsPrefix:s}=this;(t=this.onRender)===null||t===void 0||t.call(this);const a=[`${s}-text`,this.themeClass,{[`${s}-text--code`]:this.code,[`${s}-text--delete`]:this.delete,[`${s}-text--strong`]:this.strong,[`${s}-text--italic`]:this.italic,[`${s}-text--underline`]:this.underline}],n=(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e);return this.code?h("code",{class:a,style:this.cssVars},this.delete?h("del",null,n):n):this.delete?h("del",{class:a,style:this.cssVars},n):h(this.compitableTag||"span",{class:a,style:this.cssVars},n)}});class Z{constructor(e){p(this,"service");e.baseURL="https://api.2some.one/dev/2someone",this.service=new W(e)}createPost(e,o,s,a){const n={receiver_room_id:e,title:o,content:s,attachment_url:a};return this.service.post("/post/v1/create",n)}getPost(e){return this.service.get(`/post/v1/get/${e}`)}}export{Z as P,Y as _,X as a,q as u};
