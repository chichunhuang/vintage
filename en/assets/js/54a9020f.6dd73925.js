"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[8625],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,l(l({ref:e},s),{},{components:n})):a.createElement(k,l({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[m]="string"==typeof t?t:r,l[1]=u;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8548:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Rust \u5217\u8209\u8207\u6a21\u5f0f\u914d\u5c0d",description:"Rust Enum and Pattern Matching",keywords:["Rust","enum","Pattern_Matching"]},l=void 0,u={unversionedId:"Rust\u8d77\u6b65\u8d70/Rust_Enum_Match",id:"Rust\u8d77\u6b65\u8d70/Rust_Enum_Match",title:"Rust \u5217\u8209\u8207\u6a21\u5f0f\u914d\u5c0d",description:"Rust Enum and Pattern Matching",source:"@site/docs/003_Rust\u8d77\u6b65\u8d70/010_Rust_Enum_Match.md",sourceDirName:"003_Rust\u8d77\u6b65\u8d70",slug:"/Rust\u8d77\u6b65\u8d70/Rust_Enum_Match",permalink:"/en/docs/Rust\u8d77\u6b65\u8d70/Rust_Enum_Match",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Rust \u5217\u8209\u8207\u6a21\u5f0f\u914d\u5c0d",description:"Rust Enum and Pattern Matching",keywords:["Rust","enum","Pattern_Matching"]},sidebar:"totem_sidebar",previous:{title:"Rust Struct \u7d50\u69cb\u9ad4",permalink:"/en/docs/Rust\u8d77\u6b65\u8d70/Rust_Struct"},next:{title:"Rust_Data_Type_String",permalink:"/en/docs/Rust\u8d77\u6b65\u8d70/Rust_Data_Type_String"}},o={},p=[{value:'Rust Enum <span id="enum">\xa0</span>',id:"rust-enum-",level:2},{value:'Rust enum \u57fa\u672c\u4f7f\u7528\u65b9\u5f0f <span id="basic_enum">\xa0</span>',id:"rust-enum-\u57fa\u672c\u4f7f\u7528\u65b9\u5f0f-",level:2},{value:'Rust enum \u57fa\u672c\u4f7f\u7528\u65b9\u5f0f2(\u4e0d\u540c\u578b\u5225\u6578\u91cf fields)<span id="basic_enum2">\xa0</span>',id:"rust-enum-\u57fa\u672c\u4f7f\u7528\u65b9\u5f0f2\u4e0d\u540c\u578b\u5225\u6578\u91cf-fields",level:2},{value:'Option \u6a19\u6e96\u51fd\u5f0f\u5eab\u4e2d\u7279\u6b8a\u7684 rust enum<span id="none_some">\xa0</span>',id:"option-\u6a19\u6e96\u51fd\u5f0f\u5eab\u4e2d\u7279\u6b8a\u7684-rust-enum",level:2},{value:"None \u8207 Some: Option \u6a19\u6e96\u51fd\u5f0f\u5eab\u4e2d\u7279\u6b8a\u7684 rust enum",id:"none-\u8207-some-option-\u6a19\u6e96\u51fd\u5f0f\u5eab\u4e2d\u7279\u6b8a\u7684-rust-enum",level:2},{value:'Enum and Match Pattern/Switch Case <span id="switch_case">\xa0</span>',id:"enum-and-match-patternswitch-case-",level:2},{value:"Pattern matching: enum",id:"pattern-matching-enum",level:3},{value:"Pattern matching \u8a9e\u6cd5",id:"pattern-matching-\u8a9e\u6cd5",level:3}],s={toc:p},m="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("span",{id:"Rust_Pattern_Match"},"\xa0"),(0,r.kt)("h1",{id:"rust-enum-and-pattern-matching"},"Rust Enum and Pattern Matching",(0,r.kt)("span",{id:"matching"},"\xa0")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Java \u4e2d\u6709 enum \u9019\u500b\u7279\u6b8a\u95dc\u9375\u5b57\uff0c\u7528\u4f86\u5efa\u7acb\u4e00\u7cfb\u5217\u540c\u578b\u5225\u7684 static instances\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Rust \u4e2d\u4e5f\u6709\uff0c\u4e5f\u7a31\u70ba enum\uff0c\u4f7f\u7528\u4e0a\u4e5f\u985e\u4f3c\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u56e0\u70ba enum \u540c\u70ba Java static instance \u7684\u6982\u5ff5\uff0c\u6240\u4ee5\u4e5f\u80fd\u904b\u7528\u5728 Pattern Matching\u3002 ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"./Rust_Loop_Condition#switch_case"},"Rust Pattern matching \u7c21\u55ae\u7684\u6bd4\u55bb\u5c31\u662f\u5176\u4ed6\u8a9e\u8a00\u7684 switch/case \u5206\u652f\u7d50\u69cb"),(0,r.kt)("br",{parentName:"p"}),"\n","\u56e0\u70ba Rust enum instance \u53ef\u4ee5\u518d\u651c\u5e36\u7368\u81ea\u578b\u5225\u7684\u8cc7\u6599\uff0c\u56e0\u6b64\u4f7f\u7528\u4e0a\u589e\u52a0\u66f4\u591a\u8b8a\u5316\u3002  ")),(0,r.kt)("h2",{id:"rust-enum-"},"Rust Enum ",(0,r.kt)("span",{id:"enum"},"\xa0")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#basic_enum"},"Rust enum \u57fa\u672c\u4f7f\u7528\u65b9\u5f0f1 (with same-type fields)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#basic_enum"},"Rust enum \u57fa\u672c\u4f7f\u7528\u65b9\u5f0f2 (with diff-type fields)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#none_some"},"None \u8207 Some: Option \u6a19\u6e96\u51fd\u5f0f\u5eab\u4e2d\u7279\u6b8a\u7684 rust enum")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#switch_case"},"Enum and Match Pattern/ Switch Case"))),(0,r.kt)("h2",{id:"rust-enum-\u57fa\u672c\u4f7f\u7528\u65b9\u5f0f-"},"Rust enum \u57fa\u672c\u4f7f\u7528\u65b9\u5f0f ",(0,r.kt)("span",{id:"basic_enum"},"\xa0")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8a9e\u6cd5\u6ce8\u610f: \u6700\u5f8c\u4e00\u500b variant \u5f8c\u662f\u4ee5",(0,r.kt)("span",{style:{color:"#FF1100"}},(0,r.kt)("strong",{parentName:"li"},"\u9017\u865f\u7d50\u5c3e"))),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u65b9\u6cd5\u985e\u4f3c Java \u9808\u5e36\u985e\u5225\u540d\u7a31\u3002"),(0,r.kt)("li",{parentName:"ul"},"enum \u672c\u8eab\u662f\u4e00\u7a2e struct type\uff0c\u6240\u4ee5\u4e5f\u53ef\u4ee5\u651c\u5e36 fields\uff0c\u8a9e\u6cd5\u4e0a\u4e5f\u672a\u9650\u5236 fields \u7684\u8cc7\u6599\u578b\u5225\u3002\n** \u4f46\u7279\u5225\u7684\u662f\uff0c Rust \u5141\u8a31\u6bcf\u500b variants \u64c1\u6709\u4e0d\u540c\u6578\u91cf/\u578b\u5225\u7684 fields\u3002  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'//\u5b9a\u7fa9\u5340\nenum ProcessStatus{\n    Start(String),\n    Processing(String, String), //variants \u53ef\u64c1\u6709\u4e0d\u540c\u6578\u91cf/\u578b\u5225\u7684 fields\u3002\n    End(String), // \u9019\u908a\u662f\u4ee5\u9017\u865f\u7d50\u5c3e \n}\n\n//\u4f7f\u7528\u5340\nlet init_status = ProcessStatus::Start(String::from("\u958b\u59cb"));\nlet exe_status = ProcessStatus::Processing(String::from("\u9032\u884c\u4e2d", "Processing"));\nlet done_status = ProcessStatus::End(String::from("\u5b8c\u5de5"));\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"")),(0,r.kt)("h2",{id:"rust-enum-\u57fa\u672c\u4f7f\u7528\u65b9\u5f0f2\u4e0d\u540c\u578b\u5225\u6578\u91cf-fields"},"Rust enum \u57fa\u672c\u4f7f\u7528\u65b9\u5f0f2(\u4e0d\u540c\u578b\u5225\u6578\u91cf fields)",(0,r.kt)("span",{id:"basic_enum2"},"\xa0")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8a9e\u6cd5\u6ce8\u610f: \u540c\u6a23\u6700\u5f8c\u4e00\u500b variant \u5f8c\u662f\u4ee5",(0,r.kt)("span",{style:{color:"#FF1100"}},(0,r.kt)("strong",{parentName:"p"},"\u9017\u865f\u7d50\u5c3e")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"enum \u672c\u8eab\u662f\u4e00\u7a2e struct type\uff0c\u6240\u4ee5\u4e5f\u53ef\u4ee5\u651c\u5e36 fields\uff0c\u8a9e\u6cd5\u4e0a\u4e5f\u672a\u9650\u5236 fields \u7684\u8cc7\u6599\u578b\u5225\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rust \u5141\u8a31\u6bcf\u500b variants \u64c1\u6709\u4e0d\u540c\u6578\u91cf/\u578b\u5225\u7684 fields\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{style:{color:"#0044FF"}}," **\u4e0b\u65b9\u7bc4\u4f8b\u52a0\u8d08\u53d6 field \u65b9\u5f0f** "),"** Rust enum \u5141\u8a31\u8b8a\u9ad4(variants)\u5b58\u5728\u3002\u4e5f\u5c31\u662f\u8aaa\u6bcf\u500b enum instance \u53ef\u4ee5\u5177\u6709\u4e0d\u540c\u6578\u91cf\u8207\u578b\u5225\u7684 fileds\u3002 ** \u4e0b\u9762\u4ecb\u7d39\u5982\u4f55\u53d6\u51fa enum instance \u8b8a\u9ad4\u5404\u81ea\u7684\u5c08\u5c6c field \u5167\u5bb9\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'enum TextFieldDataType {\n    StringType(String),\n    DateType(DateTime<Utc>),\n    NumericType(i32),\n    ArrayType(i32, i32, i32, i32),\n    EmptyTYpe(),\n}\n\npub fn fetch_enum_field_value() {\n\n// Style 1: \u5728 Match Pattern \u4e0a\u4fbf\u4e00\u4e26\u5ba3\u544a\u8b8a\u6578\u3002\n    let extract_a =\n        TextFieldDataType::StringType(String::from("extract by [pattern matching + upacking]"));\n    match extract_a {\n        TextFieldDataType::StringType(field) => println!("style A = {}", field),\n        _ => print!("skip"),\n    }\n\n// Style 2: \u4f7f\u7528 if let \u5c08\u7528\u8a9e\u6cd5\uff0c\u540c\u6a23\u5728 Match Pattern \u4e2d\u5ba3\u544a\u8b8a\u6578\u3002 \n    let extract_b = TextFieldDataType::StringType(String::from("extract by [if let + upacking]"));\n    let mut field: String = String::from("");\n    if let TextFieldDataType::StringType(value) = extract_b {\n        field = value;\n    }\n    println!("style B =  {}", field);\n\n// Style 3: if let \u8a9e\u6cd5\n    let extract_c = TextFieldDataType::StringType(String::from("extract by [if let + upacking]2"));\n    if let TextFieldDataType::StringType(field) = extract_c {\n        println!("style C: {}", field);\n    }\n\n// Style 4: Variant \u4e2d\u6709\u591a\u500b\u81ea\u8a02 fields \u6642\uff0c\u53ef\u4ee5\u7528 \u89e3\u5305\u8a9e\u6cd5 \u53d6\u51fa\u7126\u9ede\u3002\n    let extract_d = TextFieldDataType::ArrayType(10, 20, 30, 40);\n    let mut second = 0;\n    if let TextFieldDataType::ArrayType(first, second, _, _) = extract_d {\n        println!("style D, with ignored : {}", second);\n    }\n    ////\u89e3\u5305\u6642\u4ee5 _ \u4f86\u70ba\u4e0d\u91cd\u8981\u7684\u8b8a\u6578\u53d6\u4e00\u500b\u66ab\u6642\u7684\u540d\u7a31\u4f54\u4f4d\u7b26 placeholder\u3002\n}\n')),(0,r.kt)("h2",{id:"option-\u6a19\u6e96\u51fd\u5f0f\u5eab\u4e2d\u7279\u6b8a\u7684-rust-enum"},"Option \u6a19\u6e96\u51fd\u5f0f\u5eab\u4e2d\u7279\u6b8a\u7684 rust enum",(0,r.kt)("span",{id:"none_some"},"\xa0")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7528\u9014:Rust \u4e0d\u61c9\u8a72\u4e5f\u4e0d\u5141\u8a31\u51fa\u73fe Null Pointer Exception \u4e4b\u985e\u7684\u60c5\u5883\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7576\u6709\u53ef\u80fd\u51fa\u73fe\u7a7a\u503c\u7684\u60c5\u5883\u6642\uff0c\u5728 rust \u4e2d\u9078\u64c7\u4ee5 Option<T",">"," \u4f5c\u70ba\u56de\u50b3\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Option enum \u4e0b\u6709\u5169\u500b instance : None \u8207 Some<T",">","\u3002 None \u53ef\u7528\u4f86\u501f\u4ee3\u70ba\u7a7a\u503c\u3002  ")),(0,r.kt)("h2",{id:"none-\u8207-some-option-\u6a19\u6e96\u51fd\u5f0f\u5eab\u4e2d\u7279\u6b8a\u7684-rust-enum"},"None \u8207 Some: Option \u6a19\u6e96\u51fd\u5f0f\u5eab\u4e2d\u7279\u6b8a\u7684 rust enum"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u540c\u6a23\u7684 Java \u4e2d\u4e5f\u6709 Option \u7528\u4f86\u907f\u514d Null Pointer Exception\uff0cRust \u4e2d\u7684 None \u8207 Some \u4e5f\u5177\u6709\u76f8\u540c\u7684\u8a2d\u8a08\u76ee\u7684\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Rust enum variants \u56e0\u70ba\u53ef\u4ee5\u64c1\u6709\u4e0d\u540c\u6578\u91cf\u8207\u578b\u5225\u6210\u54e1\u8b8a\u6578\u7684\u7279\u6027\uff0c\u56e0\u800c\u88ab\u9078\u7528\u4f86\u6642\u505a Option\u3002   "),(0,r.kt)("p",{parentName:"blockquote"},"\u7c21\u55ae\u7684\u8aaa\u4fbf\u662f: Option \u9019\u500b\u7d50\u69cb(struct/type)\u6709 Some \u8207 None \u9019\u5169\u7a2e\u8b8a\u9ad4(Variants)\u3002  "),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"\u56e0\u6b64\u53ef\u4ee5\u5229\u7528 Option \u52a0\u4e0a\u5b9a\u7fa9\u6cdb\u578b\u6210\u54e1\u7684\u65b9\u5f0f\u4f86\u5b9a\u7fa9\u6709\u80fd\u70ba\u7a7a\u503c\u7684\u8b8a\u6578\u7684\u578b\u5225\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7576\u8b8a\u6578\u6709\u503c\u6642: \u4ee5 Some<type",">"," \u5c01\u88dd\u56de\u50b3\u503c",(0,r.kt)("br",{parentName:"p"}),"\n","\u7576\u8b8a\u6578\u7f3a\u503c\u6642: \u5247\u76f4\u63a5\u7d66\u4e88 None",(0,r.kt)("br",{parentName:"p"}),"\n","\u6ce8\u610f: ",(0,r.kt)("span",{style:{color:"#FF1100"}},(0,r.kt)("strong",{parentName:"p"}," Some \u7684 value \u53ea\u80fd\u53d6\u51fa\u4e00\u6b21")),"\uff0c\u53d6\u51fa\u5f8c\u5373\u6b78\u9084\u8a18\u61b6\u9ad4\u3002  "))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Option:\u53d6\u503c\u7bc4\u4f8b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"let content = opt.unwrap(); \u4f7f\u7528 unwrap \u53ef\u53d6\u51fa Option \u5167\u5bb9\u3002  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn dummy_dataset_find_by_name(name : String) -> Option<String> {\n    return Some(String::from("Insect totem"));\n}\n\npub fn option_exercise(){\n\n    let totem: Option<String> = dummy_dataset_find_by_name(String::from("key"));\n    \n    //style A\n    let content = totem.unwrap();\n    print!("My name is {}", content);   \n}\n\npub fn option_exercise2(){\n\n    let totem: Option<String> = dummy_dataset_find_by_name(String::from("key"));\n    \n    //style B\n    if let Some(value: String) = totem {\n        print!("My name is {}", value);\n    }    \n}\n\npub fn option_exercise3(){\n    let totem: Option<String> = dummy_dataset_find_by_name(String::from("key"));\n    //style C\n    let mut certified_name: String = String::from("not found");\n    if let Some(value) = totem {\n        certified_name = value;\n    }\n    print!("My name is {}", certified_name);\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Some: use moved value \u7bc4\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn option_exercise_error_moved_value(){\n    // \u9019\u500b\u7bc4\u4f8b\u6703\u51fa\u932f\n    let totem: Option<String> = dummy_dataset_find_find_by_name(String::from("key"));\n    \n    if let Some(value: String) = totem {\n        print!("My name is {}", value);\n    }  \n    //=> Some \u7684 value \u5df2\u7d93\u53d6\u51fa\n    \n    let mut certified_name: String = String::from("not found");\n    if let Some(value2) = totem { // \u9019\u908a\u6703\u5831\u932f use of moved value\n        certified_name = value2;\n    }\n    print!("My name is {}", certified_name);\n}\n\n')),(0,r.kt)("h2",{id:"enum-and-match-patternswitch-case-"},"Enum and Match Pattern/Switch Case ",(0,r.kt)("span",{id:"switch_case"},"\xa0")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pattern matching \u5728 Java \u4e2d\u7a31\u70ba Switch Case\uff0c\u6574\u9ad4\u6982\u5ff5\u76f8\u540c\uff0c\u4f7f\u7528\u4e0a\u6709\u4e00\u4e9b\u5c0f\u51fa\u5165\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5148\u8aaa\u660e Rust \u4e2d\u7684 Patterns \u9650\u5236:  "),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"Patterns \u53ef\u4ee5\u662f \u5b57\u9762\u91cf\u3001\u8b8a\u6578\u540d\u3001enum\u3001\u842c\u7528\u5b57\u5143","(","\u4f54\u4f4d\u7b26",")","\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u5206\u652f\u7684\u6a21\u5f0f\u5fc5\u9808\u76e1\u8209\u6240\u6709\u53ef\u80fd\u6027"),"\uff0c\u4e0d\u7136\u6703 Compile Error\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4f54\u4f4d\u7b26\u4ee3\u66ff\u5176\u4ed6\u6240\u6709\u672a\u5217\u51fa\u7684 patterns(Java switch-case \u4e2d\u7684 default)",(0,r.kt)("br",{parentName:"p"}),"\n","\u4ee5 ","(",")",": \u55ae\u5143\u6578\u503c\u4f86\u4ee3\u8868\u4e0d\u505a\u4efb\u4f55\u4e8b\u60c5",(0,r.kt)("br",{parentName:"p"}),"\n","if let \u8b8a\u9ad4  "))),(0,r.kt)("h3",{id:"pattern-matching-enum"},"Pattern matching: enum"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"enum \u53ef",(0,r.kt)("strong",{parentName:"p"},"\u76e1\u8209"),"\uff0c\u6545\u5e38\u5728 pattern \u4e2d\u4f7f\u7528\u3002  "),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"\u6bcf\u500b Match Pattern \u5f8c\u61c9\u8a72\u4ee5\u9017\u865f\u505a\u7d50\u5c3e\uff0c\u4f46\u82e5\u662f\u591a\u884c\u5340\u584a\u4ee5\u5927\u62ec\u865f\u9650\u5236\u4f4f\u7684\u8a71\u5247\u53ef\u7701\u7565\u3002"))),(0,r.kt)("h3",{id:"pattern-matching-\u8a9e\u6cd5"},"Pattern matching \u8a9e\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pattern matching Syntax")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"=> \u7528\u4f86\u5f15\u51fa\u5f8c\u7e8c\u8a72\u57f7\u884c\u7684 Statement \u6216 Expression  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6bcf\u500b Matching \u5f8c\u61c9\u8a72\u4ee5\u9017\u865f\u7d50\u5c3e\u505a\u5206\u9694  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Patterns \u5fc5\u9808\u76e1\u8209  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7121\u6cd5\u76e1\u8209\u6240\u6709 Patterns \u53ef\u4ee5\u4ee5 ","_"," \u6216 other \u4f86\u4ee3\u66ff\u5269\u9918\u53ef\u80fd\u6027\uff0c\u4e26\u4ee5 ","(",")","\u55ae\u5143\u6578\u503c\u4f86\u4ee3\u8868\u4e0d\u505a\u4efb\u4f55\u4e8b\u60c5  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u9762\u7bc4\u4f8b\u793a\u7bc4: Pattern Matching\uff0c\u7576\u7b26\u5408\u6307\u5b9a Pattern \u6642\u57f7\u884c\u7279\u5b9a\u52d5\u4f5c\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"match example")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'enum QuestionType {\n    DVG(u32),\n    Multiple(Vec<u32>),\n    FillIn(String),\n}\n\nfn fetch_answer(question: QuestionType) -> String {\n    match question {\n        QuestionType::DVG(dvg) => {\n            return extract_dvg_answer(dvg);\n        } \n\n        QuestionType::Multiple(multi) => {\n            return extract_multi_answer(multi);\n        }, //\u5927\u62ec\u865f\u5c01\u88dd\uff0c\u6240\u4ee5\u9017\u865f\u53ef\u7701\u7565\n        \n        QuestionType::FillIn(fillin) => {\n            return extract_fillin_answer(fillin);\n        }\n    }\n}\n\nfn extract_dvg_answer(dvganswer: u32) -> String {\n    return dvganswer.clone().to_string();\n}\n\nfn extract_fillin_answer(fillin: String) -> String {\n    return fillin;\n}\n\nfn extract_multi_answer(multi: Vec<u32>) -> String {\n    let mut combine = "".to_owned();\n    for item in multi {\n        combine.push_str(&";".to_owned());\n        combine.push_str(&item.to_string());\n    }\n    return combine;\n}\n\npub fn match_exercise() {\n    let dvg = QuestionType::DVG(10);\n    let multi = QuestionType::Multiple(vec![1, 3, 5]);\n    let fillin = QuestionType::FillIn("Hello, I\'m Totem.".to_owned());\n    println!("-----");\n    println!("DVG answer is : {}", fetch_answer(dvg));\n    println!("Multiple answer is : {}", fetch_answer(multi));\n    println!("FillIn answer is : {}", fetch_answer(fillin));\n    \n    //DVG answer is : 10\n    //Multiple answer is : ;1;3;5\n    //FillIn answer is : Hello, I\'m Totem.\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u9762\u7bc4\u4f8b\u793a\u7bc4: Pattern Matching \u7121\u6cd5\u76e1\u8209\u6642\u7684\u8655\u7406\u65b9\u5f0f")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pattern Matching \u4e26\u672a\u9650\u5236\u53ea\u80fd\u7528 enum\uff0c\u5176\u4ed6 \u6578\u5b57\u3001literal \u7b49\u4e5f\u884c\u3002\u4f46\u537b\u6703\u6709\u76e1\u8209\u7684\u554f\u984c\u3002  "),(0,r.kt)("p",{parentName:"blockquote"},"\u89e3\u6c7a\u65b9\u5f0f\u70ba catch all:",(0,r.kt)("br",{parentName:"p"}),"\n","Catch All \u5206\u70ba\u5169\u7a2e\u60c5\u5883(\u5169\u7a2e placeholders):  "),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"underscore \u4e0b\u756b\u7dda ","_"," : \u4e0d\u5728\u4e4e\u50b3\u5165\u53c3\u6578\u5f8c\u7e8c\u4f7f\u7528\u6642\uff0c\u53ef\u4ee5\u4f7f\u7528 underscore \u642d\u914d\u55ae\u5143\u6578\u503c ","(",")"," \u4f7f\u7528\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","other : \u4ee5 other \u4ee3\u66ff\u672a\u5217\u8209\u51fa\u7684\u5176\u4ed6\u4efb\u4e00\u914d\u52d5\u60c5\u5883\u3002other \u53ef\u76f4\u63a5\u60f3\u6210\u662f\u50b3\u5165\u53c3\u6578\u7684\u81e8\u6642\u8b8a\u6578\u3002\u5be6\u6e2c\u7d50\u679c\uff0c\u4ee5\u5176\u4ed6\u5b57\u773c\u4ee3\u66ff\u4e5f\u53ef\u9054\u5230\u76ee\u7684\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6ce8\u610f: \u9808\u6ce8\u610f\u7684\u662f\u56e0\u70ba Pattern Matching \u662f\u4f9d\u5e8f\u5411\u4e0b\u6bd4\u5c0d\uff0c\u56e0\u6b64 ","_"," \u6216 other \u90fd\u9700\u662f\u6700\u5f8c\u4e00\u500b Pattern\u3002  "))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"match example: catch all")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn catch_all_exercise(){\n    let choice = "1";\n\n    match  choice {\n        "NA" => description(choice),\n        "ND" => description(choice),\n        "N" => description(choice),\n        "R" => description(choice),\n        "Z" => description(choice),\n\n        _plachholder => selected(choice),\n    }\n    \n    //Answer: 1\n}\n\n\nfn description(choice: &str){\n    print!("Force Single: {} ", choice )\n}\nfn selected(choice: &str){\n    print!("Answer: {} ", choice )\n}\n')))}c.isMDXComponent=!0}}]);