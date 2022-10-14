var j=Object.defineProperty;var D=(t,e,r)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var b=(t,e,r)=>(D(t,typeof e!="symbol"?e+"":e,r),r);import{g,c as u,I as v,B as l,G as s,H as h,d as x,u as $,y as G,t as V,e as I,i as f,s as K,aR as L,at as M,a as y,aS as N,M as H,h as O}from"./index.28c2506b.js";import{h as W}from"./Space.9755a61a.js";import{R as k}from"./AxiosRequest.ad1408ea.js";function q(t,e){return g(()=>{for(const r of e)if(t[r]!==void 0)return t[r];return t[e[e.length-1]]})}const o="0!important",C="-1px!important";function d(t){return s(t+"-type",[l("& +",[u("button",{},[s(t+"-type",[h("border",{borderLeftWidth:o}),h("state-border",{left:C})])])])])}function c(t){return s(t+"-type",[l("& +",[u("button",[s(t+"-type",[h("border",{borderTopWidth:o}),h("state-border",{top:C})])])])])}const A=u("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[v("vertical",{flexDirection:"row"},[v("rtl",[u("button",[l("&:first-child:not(:last-child)",`
 margin-right: ${o};
 border-top-right-radius: ${o};
 border-bottom-right-radius: ${o};
 `),l("&:last-child:not(:first-child)",`
 margin-left: ${o};
 border-top-left-radius: ${o};
 border-bottom-left-radius: ${o};
 `),l("&:not(:first-child):not(:last-child)",`
 margin-left: ${o};
 margin-right: ${o};
 border-radius: ${o};
 `),d("default"),s("ghost",[d("primary"),d("info"),d("success"),d("warning"),d("error")])])])]),s("vertical",{flexDirection:"column"},[u("button",[l("&:first-child:not(:last-child)",`
 margin-bottom: ${o};
 margin-left: ${o};
 margin-right: ${o};
 border-bottom-left-radius: ${o};
 border-bottom-right-radius: ${o};
 `),l("&:last-child:not(:first-child)",`
 margin-top: ${o};
 margin-left: ${o};
 margin-right: ${o};
 border-top-left-radius: ${o};
 border-top-right-radius: ${o};
 `),l("&:not(:first-child):not(:last-child)",`
 margin: ${o};
 border-radius: ${o};
 `),c("default"),s("ghost",[c("primary"),c("info"),c("success"),c("warning"),c("error")])])])]),F={size:{type:String,default:void 0},vertical:Boolean},tt=x({name:"ButtonGroup",props:F,setup(t){const{mergedClsPrefixRef:e,mergedRtlRef:r}=$(t);return G("-button-group",A,e),V(W,t),{rtlEnabled:I("ButtonGroup",r,e),mergedClsPrefix:e}},render(){const{mergedClsPrefix:t}=this;return f("div",{class:[`${t}-button-group`,this.rtlEnabled&&`${t}-button-group--rtl`,this.vertical&&`${t}-button-group--vertical`],role:"group"},this.$slots)}});function et(){const t=K(L,null);return t===null&&M("use-notification","No outer `n-notification-provider` found."),t}const U=u("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[s("strong",`
 font-weight: var(--n-font-weight-strong);
 `),s("italic",{fontStyle:"italic"}),s("underline",{textDecoration:"underline"}),s("code",`
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
 `)]),J=Object.assign(Object.assign({},y.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),ot=x({name:"Text",props:J,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:r}=$(t),i=y("Typography","-text",U,N,t,e),a=g(()=>{const{depth:m,type:p}=t,R=p==="default"?m===void 0?"textColor":`textColor${m}Depth`:H("textColor",p),{common:{fontWeightStrong:B,fontFamilyMono:_,cubicBezierEaseInOut:P},self:{codeTextColor:S,codeBorderRadius:w,codeColor:z,codeBorder:T,[R]:E}}=i.value;return{"--n-bezier":P,"--n-text-color":E,"--n-font-weight-strong":B,"--n-font-famliy-mono":_,"--n-code-border-radius":w,"--n-code-text-color":S,"--n-code-color":z,"--n-code-border":T}}),n=r?O("text",g(()=>`${t.type[0]}${t.depth||""}`),a,t):void 0;return{mergedClsPrefix:e,compitableTag:q(t,["as","tag"]),cssVars:r?void 0:a,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var t,e,r;const{mergedClsPrefix:i}=this;(t=this.onRender)===null||t===void 0||t.call(this);const a=[`${i}-text`,this.themeClass,{[`${i}-text--code`]:this.code,[`${i}-text--delete`]:this.delete,[`${i}-text--strong`]:this.strong,[`${i}-text--italic`]:this.italic,[`${i}-text--underline`]:this.underline}],n=(r=(e=this.$slots).default)===null||r===void 0?void 0:r.call(e);return this.code?f("code",{class:a,style:this.cssVars},this.delete?f("del",null,n):n):this.delete?f("del",{class:a,style:this.cssVars},n):f(this.compitableTag||"span",{class:a,style:this.cssVars},n)}});class rt{constructor(e){b(this,"service");e.baseURL="https://api.2some.one/dev/2someone",this.service=new k(e)}createPost(e,r,i,a){const n={receiver_room_id:e,title:r,content:i,attachment_url:a};return this.service.post("/post/v1/create",n)}getPost(e){return this.service.get(`/post/v1/get/${e}`)}}export{rt as P,ot as _,tt as a,q as b,et as u};
