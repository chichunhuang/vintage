"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[8616],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(n),d=o,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||a;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3233:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,l={unversionedId:"Rust\u8d77\u6b65\u8d70/Rust_Data_Type_String",id:"Rust\u8d77\u6b65\u8d70/Rust_Data_Type_String",title:"Rust_Data_Type_String",description:"String Concatenation",source:"@site/docs/003_Rust\u8d77\u6b65\u8d70/0031_Rust_Data_Type_String.md",sourceDirName:"003_Rust\u8d77\u6b65\u8d70",slug:"/Rust\u8d77\u6b65\u8d70/Rust_Data_Type_String",permalink:"/docs/Rust\u8d77\u6b65\u8d70/Rust_Data_Type_String",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{},sidebar:"totem_sidebar",previous:{title:"Rust \u5217\u8209\u8207\u6a21\u5f0f\u914d\u5c0d",permalink:"/docs/Rust\u8d77\u6b65\u8d70/Rust_Enum_Match"},next:{title:"Rust_Data_Type_Vctor",permalink:"/docs/Rust\u8d77\u6b65\u8d70/Rust_Data_Type_Vctor"}},s={},p=[{value:"String Concatenation",id:"string-concatenation",level:2}],u={toc:p},c="wrapper";function g(t){let{components:e,...n}=t;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"string-concatenation"},"String Concatenation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"String.push_str(&str);"),(0,o.kt)("li",{parentName:"ul"},"String.push_str(&String);"),(0,o.kt)("li",{parentName:"ul"},"operator + (String + &str)"),(0,o.kt)("li",{parentName:"ul"},"format macro (String+ String) or (&str+ &str)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"String + &str")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'\nfn main() {\n    let mut owned_string: String = "hello ".to_owned();\n    let borrowed_string: &str = "world";\n    \n    owned_string.push_str(borrowed_string);\n    println!("{owned_string}");\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"String + String")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut owned_string: String = "hello ".to_owned();\n    let another_owned_string: String = "world".to_owned();\n    \n    owned_string.push_str(&another_owned_string);\n    println!("{owned_string}");\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," use + operator to combine String and &str ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruet"},'fn main() {\n    let owned_string: String = "hello ".to_owned();\n    let borrowed_string: &str = "world";\n    \n    let new_owned_string = owned_string + borrowed_string;\n    println!("{new_owned_string}");\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Concate 2 %str by format macro")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruet"},'fn main() {\n    let borrowed_string: &str = "hello ";\n    let another_borrowed_string: &str = "world";\n    \n    let together = format!("{borrowed_string}{another_borrowed_string}");\n    println!("{}", together);\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Concate 2String by format macro")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruet"},'fn main() {\n    let owned_string: String = "hello ".to_owned();\n    let another_owned_string: String = "world".to_owned();\n    \n    let together = format!("{owned_string}{another_owned_string}");\n    println!("{}", together);\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," use + operator to combine String and &str ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruet"},'fn main() {\n    let owned_string: String = "hello ".to_owned();\n    let borrowed_string: &str = "world";\n    \n    let together = owned_string.clone() + borrowed_string;\n    println!("{together}");\n}\n\n')))}g.isMDXComponent=!0}}]);