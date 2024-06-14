"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[807],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),i=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},p=function(t){var e=i(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=i(r),b=a,d=c["".concat(s,".").concat(b)]||c[b]||m[b]||l;return r?n.createElement(d,u(u({ref:e},p),{},{components:r})):n.createElement(d,u({ref:e},p))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,u=new Array(l);u[0]=b;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:a,u[1]=o;for(var i=2;i<l;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8761:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const l={title:"Rust \u8b8a\u6578",description:"Rust Variables",keywords:["Rust","Variable"]},u="Rust \u8b8a\u6578",o={unversionedId:"Rust\u8d77\u6b65\u8d70/Rust_Variable",id:"Rust\u8d77\u6b65\u8d70/Rust_Variable",title:"Rust \u8b8a\u6578",description:"Rust Variables",source:"@site/docs/003_Rust\u8d77\u6b65\u8d70/004_Rust_Variable.md",sourceDirName:"003_Rust\u8d77\u6b65\u8d70",slug:"/Rust\u8d77\u6b65\u8d70/Rust_Variable",permalink:"/en/docs/Rust\u8d77\u6b65\u8d70/Rust_Variable",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Rust \u8b8a\u6578",description:"Rust Variables",keywords:["Rust","Variable"]},sidebar:"totem_sidebar",previous:{title:"Rust \u8cc7\u6599\u578b\u5225",permalink:"/en/docs/Rust\u8d77\u6b65\u8d70/Rust_Data_Type"},next:{title:"Rust \u51fd\u5f0f",permalink:"/en/docs/Rust\u8d77\u6b65\u8d70/Rust_Function"}},s={},i=[{value:"Rust \u53ef\u8b8a\u8207\u4e0d\u53ef\u8b8a\u8b8a\u6578(mutable and immutable variables)",id:"rust-\u53ef\u8b8a\u8207\u4e0d\u53ef\u8b8a\u8b8a\u6578mutable-and-immutable-variables",level:2},{value:"Rust \u5e38\u6578 Constant",id:"rust-\u5e38\u6578-constant",level:2}],p={toc:i},c="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rust-\u8b8a\u6578"},"Rust \u8b8a\u6578"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91cd\u9ede\u6458\u8981",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud83d\udea9 \u53ef\u8b8a\u8b8a\u6578/\u4e0d\u53ef\u8b8a\u8b8a\u6578 : let / mut  "),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udea9 ",(0,a.kt)("strong",{parentName:"li"},"Shadowing:")," Rust \u7279\u6b8a\u7684\u7279\u6027\uff0c\u540c\u4e00\u500b\u8b8a\u6578\u53ef\u4ee5 ",(0,a.kt)("strong",{parentName:"li"},"\u518d\u6b21\u5ba3\u544a\u4e26\u8f49\u63db\u578b\u5225")," \u3002  "),(0,a.kt)("li",{parentName:"ul"},"\u5e38\u6578 : const   ")))),(0,a.kt)("h2",{id:"rust-\u53ef\u8b8a\u8207\u4e0d\u53ef\u8b8a\u8b8a\u6578mutable-and-immutable-variables"},"Rust \u53ef\u8b8a\u8207\u4e0d\u53ef\u8b8a\u8b8a\u6578(mutable and immutable variables)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rust \u7528 ",(0,a.kt)("strong",{parentName:"p"},"let")," \u9375\u5b57\u9032\u884c\u8b8a\u6578\u9700\u544a\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u8b8a\u6578\u5ba3\u544a\u5f8c\u9810\u8a2d\u662f immutable\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u82e5\u8981\u5ba3\u544a\u53ef\u8b8a\u8b8a\u6578\u5247\u9808\u52a0\u4e0a ",(0,a.kt)("strong",{parentName:"p"},"mut")," \u95dc\u9375\u5b57\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rust Mutable and Immutable Variables")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'\n// Immutable Variable \u4ee5 let \u5ba3\u544a\nlet gender = "Male";\n\n// Mutable Variable \u4ee5 let mut \u5ba3\u544a\nlet mut age = 45;\n\n')),(0,a.kt)("h2",{id:"rust-\u5e38\u6578-constant"},"Rust \u5e38\u6578 Constant"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rust \u7528 ",(0,a.kt)("strong",{parentName:"p"},"const")," \u9375\u5b57\u9032\u884c\u5e38\u6578\u9700\u544a\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5e38\u6578\u5ba3\u544a\u6642\u9700\u984d\u5916 ",(0,a.kt)("strong",{parentName:"p"},"\u544a\u77e5\u578b\u5225")," ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rust Constant")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"//\u5e38\u6578 \u4ee5 const \u5ba3\u544a\uff0c\u4e14\u9808\u5ba3\u544a\u578b\u5225\u3002\nconst  short_pi:f32 = 3.14;\nconst  long_pi:f64 = 3.1415926535;\n\n")))}m.isMDXComponent=!0}}]);