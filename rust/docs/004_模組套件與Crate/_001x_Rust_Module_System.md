---
title: Rust 模組系統X
description: Rust Module SystemsX
---

# Rust 模組系統

| 關鍵字 | 釋義 | 註|
|------|-----|-----|
| module | 模組，是 functions, structs, traits, impl blocks 或是其他 modules 的集合 | toml 檔 |
| package | 套件: 由一系列相關功能的 crate 所組成的單元 | 內含一個 Cargo.toml 套件設定檔，用來說明如何建構 crates<br/>  必須具有至少一個 crate<br/>  其中可以是 1...* 個 binary crates<br/>  但僅可以擁有 0...1 個 library crate   |
| crate | Rust compiler 視為程式碼的最小單位。需要一起 compile 的相關程式碼。 |  |
| binary crate | 執行檔 Crate: 能編譯成執行檔並執行的程式單元 | 有 main 函式 |
| library crate | 函式庫 Crate: 用來定義分可享工具的單元 | 不具 main 函式 |
| crate root | Crate 源頭: Rust compiler - rustc 編譯時首先尋找的入口檔 |  |
| workspace | 工作空間 | zzzz |
| Scope | 作用域 | zzzz |
| path | 路徑 | zzzz |
| use | 將指定 module 路徑所關聯的 module 引入\(import\)作用域<br/>或用來建立 module path 的捷徑時使用 | zzzz |
| as | xxxx | zzzz |
| pub | public 讓指定項目動外公開 | zzzz |
| glob | global 全域運算子 | zzzz |


## Rust 專案結構
> cargo.toml 檔: 套件設定檔-用來註記程式的入口等資訊... 
> src 資料夾慣例內容 :   
> src/main.rs : 此檔案是與套件同名的 binary crate 的 crate root  
> src/lib.rs : 有此檔案的話，lib.rs 會被視為包含一個與套件同名的 library crate  
> src/a/b : 自行撰寫的 rust files 資料夾  
> src/a/b/mod.rs : 用來登錄 b 資料夾下 modules 用的設定檔  


## Module 模組
> Module 撰寫:  
>> 1. **rs 檔案中的一小區塊** : ex - rs 檔中的定義的 mod blocks 範圍。  
>> 2. **整個 rs 檔**。若 rs 檔中沒有額外指名的 mod block，則整個 rs 檔就是一個以 rs 檔名命名的 module。  
> 有了 Module 之後，為了讓其他程式能取用 modules 須設定 module path，也就是 mod.rs 設定。這邊會依據 Rust 版本而有多種設定方式基本上向下相容。  
> 
>> <span style={{color: '#FF1100'}}> **注意** </span>:  
>> **路徑維護** : <span style={{color: '#0044FF'}}> **mod.rs 以及 mod 語法** </span>是用來維護 rustc 查找 modules 時使用的路徑。  
>> **模組方法呼叫** : 其他 crates 或是 crate 中 rs 使用 modules 仍要使用 <span style={{color: '#0044FF'}}> **use 關鍵字** </span> import 相關 modules。  

## 註冊 modules 路徑路徑 
> 這個路徑會提供給 rustc 查找相關 rust 程式用  

__註冊方式__ 
* 單一資料夾內可以放置 mod.rs 檔。檔案內容為每單一個 modules rs 檔的名稱。  
** 可以增加 pub 修飾詞，更改 module 的可見度。
* 同 rs 檔中的 module blocks，在檔案內使用時不需在 mod.rs 中註冊路徑。因為已經被限制在一起，且也是以 mod 語法宣告 block。所以不須額外再註冊路徑。

> 這些 module 註冊後所串出來的模組查找路徑稱為 module path。  
 
__使用 modules 路徑__

* 指以 mod 語法引入的其他 modules 的相關位置
* crate root (如:main.rs) 使用其他 modules

> main.rs 位在 source 的 root folder 之內的預設 crate root。  
> main.rs 中所宣告的 mod imported_module 指向 
>> **同層的** imported_module.rs 或 
>> **同層的** imported_module 資料夾下的 mod.rs 所指定的內容。
TODO rust example

* 一般 *.rs 檔使用其他 modules (稱: 子模組宣告)

> current.rs 中若宣告 mod imported_module， 則指向 
>> **次一層的** imported_module.rs (./current/imported_module.rs)  
>> **次一層的** imported_module 資料夾下的 mod.rs 所指定的內容。 (./current/imported_module/mod.rs)
TODO rust example





## Module Path 模組路徑
> mod 宣告以及 mod.rs 定義出了 crate 中程式碼的相依關係。  
> 這個相依關係可用來查找相關的模組，相依的查找路徑就稱為 Module Path。  
> 此時在這個 crate 中的程式便可依據 Module Path 指向指定的 module，並使用相關開放的模組功能。
> 
>> 語法:
>> 由 crate 關鍵字以連續兩個 :: 為串接符只想最終的 module 或 module 下的 function。  
>>
>> ex: 直接呼叫 module 內的方法:     
>> crate::structure::enum_exercise::fetch_enum_field_value();  

>> ex2: 先以 use 語法 import 指定 module
>> ex:  
>> use structure::enum_exercise as tempModule;
>> tempModule::fetch_enum_field_value(); 

 
__使用同檔案中的其他 module__
> 在同一個 rs 檔中可使用 mod 關鍵字宣告 module block。  
> 還**需以 use path 的方式指向 module 內容**，或加上 as 給予別名。  
> 然後 function 便可使用此模組。  
TODO rust example





### 

cargo.toml
rust 的編譯是由 cargo.toml 所驅動，
一個 rust 模組只能編出一個 rlib，
由 cargo.toml 的 [lib] 所指定，
例如我這個專案指定 library 名稱跟路徑如下：

[lib]
name = "TotemUtil"
path = "src/lib.rs"

