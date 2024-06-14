"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[4924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),a=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=a(n),k=i,g=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var a=2;a<o;a++)l[a]=n[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var r=n(7462),i=(n(7294),n(3905));const o={title:"Rust \u6240\u6709\u6b0a",description:"Ownership",keywords:["Rust","Ownership"]},l="Rust \u6240\u6709\u6b0a ( Ownership )",s={unversionedId:"Rust\u8d77\u6b65\u8d70/Rust_Ownership",id:"Rust\u8d77\u6b65\u8d70/Rust_Ownership",title:"Rust \u6240\u6709\u6b0a",description:"Ownership",source:"@site/docs/003_Rust\u8d77\u6b65\u8d70/007_Rust_Ownership.md",sourceDirName:"003_Rust\u8d77\u6b65\u8d70",slug:"/Rust\u8d77\u6b65\u8d70/Rust_Ownership",permalink:"/docs/Rust\u8d77\u6b65\u8d70/Rust_Ownership",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Rust \u6240\u6709\u6b0a",description:"Ownership",keywords:["Rust","Ownership"]},sidebar:"totem_sidebar",previous:{title:"Rust \u8ff4\u5708\u8207\u6d41\u7a0b\u63a7\u5236",permalink:"/docs/Rust\u8d77\u6b65\u8d70/Rust_Loop_Condition"},next:{title:"Rust \u53c3\u8003\u8207\u501f\u7528",permalink:"/docs/Rust\u8d77\u6b65\u8d70/Rust_References_Borrowing"}},p={},a=[{value:"(primitive type)\u8b8a\u6578\u62f7\u8c9d",id:"primitive-type\u8b8a\u6578\u62f7\u8c9d",level:2},{value:"Trait Copy (\u7279\u5fb5\u62f7\u8c9d\u6a19\u8a18)",id:"trait-copy-\u7279\u5fb5\u62f7\u8c9d\u6a19\u8a18",level:2}],u={toc:a},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rust-\u6240\u6709\u6b0a--ownership-"},"Rust \u6240\u6709\u6b0a ( Ownership )"),(0,i.kt)("p",null," Rust \u8a9e\u8a00\u4e0b\u7684\u8a18\u61b6\u9ad4\u7ba1\u7406"),(0,i.kt)("h1",{id:"\u5783\u573e\u56de\u6536\u6a5f\u5236garbage-collector-gc"},"\u5783\u573e\u56de\u6536\u6a5f\u5236\uff08garbage collector, GC\uff09"),(0,i.kt)("p",null,'"\u7576\u8a18\u61b6\u9ad4\u5728\u64c1\u6709\u5b83\u7684\u8b8a\u6578\u96e2\u958b\u4f5c\u7528\u57df\u6642\u5c31\u6703\u81ea\u52d5\u91cb\u653e\u3002"',(0,i.kt)("br",{parentName:"p"}),"\n","\u8b8a\u6578\u96e2\u958b scope\uff0c \u81ea\u52d5\u91cb\u653e\u8a18\u61b6\u9ad4(\u81ea\u52d5\u547c\u53eb drop function)"),(0,i.kt)("h1",{id:"heap-and-stack"},"heap and stack"),(0,i.kt)("p",null,"\u8a3b:rust tw \u7ffb\u8b6f\uff0c heap \u5806\u7a4d\uff0cstack: \u5806\u758a"),(0,i.kt)("p",null,"heap: \u53ef\u4ee5\u60f3\u6210\u662f java primitive type \u7684\u8a18\u61b6\u9ad4\u7ba1\u7406\u3002 ex: long v = 100L;\nstack: \u53ef\u4ee5\u60f3\u6210\u662f java primitive type \u7684 wrapper \u8a18\u61b6\u9ad4\u7ba1\u7406(\u4e0d\u8003\u616e\u6700\u4f73\u5316)\u3002 ex: Long v = new Long(100);"),(0,i.kt)("h1",{id:"\u95dc\u65bc\u6240\u6709\u6b0a-ownership-\u7269\u4ef6\u578b\u5225-stack-\u8a18\u61b6\u9ad4\u7ba1\u7406"},"\u95dc\u65bc\u6240\u6709\u6b0a Ownership (\u7269\u4ef6\u578b\u5225, stack \u8a18\u61b6\u9ad4\u7ba1\u7406)"),(0,i.kt)("p",null,"\u9019\u908a\u5728\u8aaa\u7684\u8207\u4e00\u822c \u5f37\u884c\u5225\u8a9e\u8a00 \u8a18\u61b6\u9ad4\u7ba1\u7406\u985e\u4f3c\u3002\n\u4f46 Rust \u4e0d\u5141\u8a31\u7121\u6548\u8b8a\u6578\u5b58\u5728\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u500b pointer \u53ea\u6709\u4e00\u500b\u8b8a\u6578\u80fd\u64c1\u6709\u3002\n=> \u76f8\u540c\u8cc7\u6599(\u610f\u7fa9\u4e0a\u76f8\u540c)\uff0c\u9700\u7528 clone \u9032\u884c\u8a18\u61b6\u9ad4\u8907\u88fd\u3002\u6216\u662f trait copy (ch10)\n",(0,i.kt)("strong",{parentName:"li"},"NoteMessage"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'    let s1 = String::from("hello");\n    let s2 = s1;\n\n    println!("{}, world!", s1);  // error here\n')),(0,i.kt)("p",null,"\u76f8\u540c\u8655"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8b8a\u6578\u6709\u4f5c\u7528\u57df\u9650\u5236\u5b58\u6d3b\u7bc4\u570d\uff0c\u8b8a\u6578\u96e2\u958b scope\uff0c \u81ea\u52d5\u91cb\u653e\u8a18\u61b6\u9ad4(\u81ea\u52d5\u547c\u53eb drop function)"),(0,i.kt)("li",{parentName:"ol"},"\u8b8a\u6578\u7684 pointer \u53ef\u4ee5\u88ab\u642c\u79fb\u7d66\u5176\u4ed6\u65b0\u8b8a\u6578\u3002\n(* \u8a3b: \u9019\u908a\u7a31\u4f5c\u642c\u79fb move\uff0c\u800c\u975e copy\u3002\n\u56e0\u70ba\u820a\u8b8a\u6578\u6703\u5931\u53bb pointer\uff0c\u8b8a\u6210\u7121\u6548\u7684\u8b8a\u6578)")),(0,i.kt)("p",null,"\u5dee\u7570\u8655:\n\u8a18\u61b6\u9ad4\u56de\u6536\u6a5f\u5236\uff0c\u8207\u8a18\u61b6\u9ad4\u5206\u914d\u65b9\u5f0f\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8b8a\u6578\u7684 pointer \u53ef\u4ee5\u88ab\u642c\u79fb\u7d66\u5176\u4ed6\u65b0\u8b8a\u6578\u3002\n\u820a\u8b8a\u6578 pointer \u88ab \u8907\u88fd\u5f8c\uff0c\u6703\u99ac\u4e0a\u88ab drop\u3002\u4ea6\u5373\u820a\u8b8a\u6578\u5931\u6548\u3002\n(\u907f\u514d\u540c\u4e00\u584a\u8a18\u61b6\u9ad4 \u88ab\u91cb\u653e\u591a\u6b21)")),(0,i.kt)("h1",{id:"\u7269\u4ef6\u8b8a\u6578\u62f7\u8c9d"},"(\u7269\u4ef6)\u8b8a\u6578\u62f7\u8c9d"),(0,i.kt)("p",null,"terms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6dfa\u62f7\u8c9d\uff08shallow copy\uff09:\u62f7\u8c9d\u6307\u6a19\u3001\u9577\u5ea6\u548c\u5bb9\u91cf\u800c\u6c92\u6709\u62f7\u8c9d\u5be6\u969b\u5167\u5bb9"),(0,i.kt)("li",{parentName:"ul"},"\u6df1\u62f7\u8c9d\uff08deep copy\uff09")),(0,i.kt)("p",null,"Rust way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rust move: \u6dfa\u62f7\u8c9d\uff08shallow copy\uff09+ \u79fb\u9664\u820a\u8b8a\u6578 pointer"),(0,i.kt)("li",{parentName:"ul"},"Rust clone() ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"todo: \u78ba\u8a8d\u662f\u5426\u6240\u6709\u539f\u751f sdk \u578b\u5225\u90fd\u6709\u6b64 fun, ref ch5"),(0,i.kt)("li",{parentName:"ul"},"clone : copy stack \u4e0a\u7684 pointer \uff0c and copy heap \u4e0a\u7684 \u771f\u5be6\u8cc7\u6599")))),(0,i.kt)("p",null,"#Copy and trait copy"),(0,i.kt)("h2",{id:"primitive-type\u8b8a\u6578\u62f7\u8c9d"},"(primitive type)\u8b8a\u6578\u62f7\u8c9d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rust \u56e0\u70ba \u8cc7\u6599\u8207 pointer \u90fd\u5728 stack \u4e0a\uff0c\u53ef\u4ee5\u76f4\u63a5\u8907\u88fd\u4f7f\u7528\u3002"),(0,i.kt)("li",{parentName:"ul"},"primitive type: \u56e0\u70ba\u6709\u5be6\u4f5c Copy \u7279\u5fb5\uff0c\u7576\u8b8a\u6578\u5728\u8ce6\u503c\u7d66\u5176\u4ed6\u8b8a\u6578\u5f8c\u4ecd\u7136\u6703\u662f\u6709\u6548\u7684\u3002"),(0,i.kt)("li",{parentName:"ul"},"ex: u32, bool , f64, char\ntuple (\u524d\u63d0\u662f elements \u4e5f\u5fc5\u9808\u5be6\u4f5c trait copy ) ")),(0,i.kt)("h2",{id:"trait-copy-\u7279\u5fb5\u62f7\u8c9d\u6a19\u8a18"},"Trait Copy (\u7279\u5fb5\u62f7\u8c9d\u6a19\u8a18)"),(0,i.kt)("p",null,"ch10\n\u5982\u679c\u4e00\u500b\u578b\u5225\u6709 Copy \u7279\u5fb5\u7684\u8a71\uff0c\u4e00\u500b\u8b8a\u6578\u5728\u8ce6\u503c\u7d66\u5176\u4ed6\u8b8a\u6578\u5f8c\u4ecd\u7136\u6703\u662f\u6709\u6548\u7684\u3002    "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7576\u578b\u5225\u6709\u5be6\u4f5c\uff08implement\uff09Drop \u7279\u5fb5\u7684\u8a71\uff0cRust \u4e0d\u6703\u5141\u8a31\u6211\u5011\u8b93\u6b64\u578b\u5225\u64c1\u6709 Copy \u7279\u5fb5\u3002")),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"\u7269\u4ef6pointer\u6240\u6709\u6b0a\u8207\u51fd\u5f0f-\u540c\u8b8a\u6578pointer\u79fb\u4ea4"},"(\u7269\u4ef6)pointer\u6240\u6709\u6b0a\u8207\u51fd\u5f0f: \u540c\u8b8a\u6578pointer\u79fb\u4ea4"),(0,i.kt)("p",null,"\u6ce8\u610f:\n\u8207\u524d\u9762 (\u7269\u4ef6)\u8b8a\u6578\u62f7\u8c9d \u6642\u76f8\u4f3c\uff0c\u7576\u4e00\u500b\u7269\u4ef6\u8b8a\u6578\u628a pointer \u50b3\u905e(move to)\u65b0\u8b8a\u6578\u6642\uff0c\u820a\u8b8a\u6578\u5931\u53bb pointer \u56e0\u800c\u5931\u6548\u3002\n\u5728\u51fd\u6578\u60c5\u5883\u4e2d\uff0c (\u7269\u4ef6)\u8b8a\u6578 move pointer \u7d66\u51fd\u6578\u6642\u3002\u51fd\u6578\u63a5\u6536\u4e86 pointer\uff0c\u6240\u4ee5\u820a\u8b8a\u6578\u5931\u6548\u3002\n==> \u9084\u597d IDE \u6703\u63d0\u9192\u4f60"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NoteMessage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'fn main(){\n\nlet greeting =String:: from("Hello");\nmyprint(greeting);\n\n// println!("message {greety}"); # greeting \u662f String\uff0cpointer \u5728\u50b3\u905e\u7d66 myprint() \u6642\u5df2\u5931\u6548\n\n}\n\n\nfn myprint(message: String){\n    println!("{}", message);\n}\n\n\n// official example\nfn main() {\n    let s = String::from("hello");  // s \u9032\u5165\u4f5c\u7528\u57df\n\n    takes_ownership(s);             // s \u7684\u503c\u9032\u5165\u51fd\u5f0f\n                                    // \u6240\u4ee5 s \u4e5f\u5728\u6b64\u7121\u6548\n\n    let x = 5;                      // x \u9032\u5165\u4f5c\u7528\u57df\n\n    makes_copy(x);                  // x \u672c\u8a72\u79fb\u52d5\u9032\u51fd\u5f0f\u88e1\n                                    // \u4f46 i32 \u6709 Copy\uff0c\u6240\u4ee5 x \u53ef\u7e7c\u7e8c\u4f7f\u7528\n\n} // x \u5728\u6b64\u96e2\u958b\u4f5c\u7528\u57df\uff0c\u63a5\u8457\u662f s\u3002\u4f46\u56e0\u70ba s \u7684\u503c\u5df2\u7d93\u88ab\u79fb\u52d5\u4e86\n  // \u5b83\u4e0d\u6703\u6709\u4efb\u4f55\u52d5\u4f5c\n\nfn takes_ownership(some_string: String) { // some_string \u9032\u5165\u4f5c\u7528\u57df\n    println!("{}", some_string);\n} // some_string \u5728\u6b64\u96e2\u958b\u4f5c\u7528\u57df\u4e26\u547c\u53eb `drop`\n  // \u4f54\u7528\u7684\u8a18\u61b6\u9ad4\u88ab\u91cb\u653e\n\nfn makes_copy(some_integer: i32) { // some_integer \u9032\u5165\u4f5c\u7528\u57df\n    println!("{}", some_integer);\n} /\n\n')),(0,i.kt)("h1",{id:"function-\u56de\u50b3\u503c\u8207\u4f5c\u7528\u57df"},"function \u56de\u50b3\u503c\u8207\u4f5c\u7528\u57df"),(0,i.kt)("p",null,"pointer \u79fb\u4ea4\u540c\u6a23\u6703\u767c\u751f\u5728\uff0c\u51fd\u6578\u5c07\u7d50\u679c\u56de\u50b3\u6642\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NoteMessage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let s1 = gives_ownership();         // gives_ownership \u79fb\u52d5\u5b83\u7684\u56de\u50b3\u503c\u7d66 s1\n\n    let s2 = String::from("\u54c8\u56c9");     // s2 \u9032\u5165\u4f5c\u7528\u57df\n\n    let s3 = takes_and_gives_back(s2);  // s2 \u79fb\u5165 takes_and_gives_back\n                                        // \u8a72\u51fd\u5f0f\u53c8\u5c07\u5176\u56de\u50b3\u503c\u79fb\u5230 s3\n} // s3 \u5728\u6b64\u96e2\u958b\u4f5c\u7528\u57df\u4e26\u91cb\u653e\n  // s2 \u5df2\u88ab\u79fb\u8d70\uff0c\u6240\u4ee5\u6c92\u6709\u4efb\u4f55\u52d5\u4f5c\u767c\u751f\n  // s1 \u96e2\u958b\u4f5c\u7528\u57df\u4e26\u91cb\u653e\n\nfn gives_ownership() -> String {             // gives_ownership \u6703\u5c07\u4ed6\u7684\u56de\u50b3\u503c\n                                             // \u79fb\u52d5\u7d66\u547c\u53eb\u5b83\u7684\u51fd\u5f0f\n\n    let some_string = String::from("\u4f60\u7684\u5b57\u4e32"); // some_string \u9032\u5165\u4f5c\u7528\u57df\n\n    some_string                              // \u56de\u50b3 some_string \u4e26\u79fb\u52d5\u7d66\n                                             // \u547c\u53eb\u5b83\u7684\u51fd\u5f0f\n}\n\n// \u6b64\u51fd\u5f0f\u6703\u53d6\u5f97\u4e00\u500b String \u7136\u5f8c\u56de\u50b3\u5b83\nfn takes_and_gives_back(a_string: String) -> String { // a_string \u9032\u5165\u4f5c\u7528\u57df\n\n    a_string  // \u56de\u50b3 a_string \u4e26\u79fb\u52d5\u7d66\u547c\u53eb\u7684\u51fd\u5f0f\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"references-and-borrowing"},"References and Borrowing"))}m.isMDXComponent=!0}}]);