---
title: Rust 模組系統
description: Rust Module Systems
keywords: [Rust, Module System]
---

# Rust 模組系統

| 關鍵字 | 解釋 | 註與釋義|
|------|-----|-----|
| module | 模組，是 functions, structs, traits, impl blocks 或是其他 modules 的集合 | 以OOP概念來說，<br/>module 就是一個 functional group，將相關商業邏輯的資料集中的一個區塊<br/>語法上可以槽串在某個 rs 檔中，不過還是建議獨立成一個單獨的 rs 檔。 |
| package | 套件: 由一系列相關功能的 crate 所組成的單元 | 內含一個 Cargo.toml 套件設定檔，用來說明如何建構 crates<br/>必須具有至少一個 crate<br/>  其中可以是 1...* 個 binary crates<br/>  但僅可以擁有 0...1 個 library crate   |
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


## Package 套件
> Package 套件 : 基本上使用 cargo new project 指令建立的專案便是一個所謂的套件。  
> 一個套件裡面可以有多個 Crates。其中只能有一個 library crate。多個 binary crates。  
> library crate 是依據商業功能或邏輯所產出程式碼封裝單元。  
> binary crate 則可簡單想成為套件封裝成 exe 執行檔時的程式對外入口。也就是 main 的所在位置。  
> module 則是依商業邏輯或程式封裝單元所產生的資料與資料夾結構。可簡單想成是將複雜程式歸類拆解後所產生的小單元。  
>>  
>> 所以:  
>> library crate 是專案開發時的所有功能程式的主要位置  
>> modules 則是你管理自己程式碼的方式，這直接影響將來的維護難易程度  
>> binary library 則是你程式碼 main 的入口處  

```
目前(初學中)的想法: 
A : 若是單純的工具專案 Util Project。  
library crate 則放置單純或跨專案可重複使用的工具程式碼處。
binary crate 則為工具程式對外的主要入口。

B : 若是一個客製化的商業專案
與 **商業邏輯相關的程式碼** 應該拆分成多個 modules 統一放在 binary crate 之中。  
畢竟，概念上來說 library crate 應該是放可跨專案重複使用的程式碼區。  

當然統一放在 library crate 中的指定 modules 下應該也行，  
封裝隱藏對外入口便是，只是感覺上會影響未來維護。  
```

## Crates 
> Crates 是 Rust 語言中的**慣例結構**。  
> 在 src/main.rs 所引出的相關程式部分稱為 binary crate  
> 在 src/lib.rs 所引出的相關程式部分稱為 library crate  
>> 相關預設慣例可以經由 cargo.toml 更改設定  

__Rust Package 慣例結構__
> cargo.toml 檔: 套件設定檔-用來註記程式的入口等資訊... 
> src 資料夾慣例內容 :   
>> src/main.rs : 預設是與套件同名的 binary crate 的 crate root  
>> src/lib.rs : 有此檔案的話，lib.rs 會被視為包含一個與套件同名的 library crate 

## Module 模組 <span id="module">&nbsp;</span>
* [Nested Modules](./Rust_Nested_Module) 感覺上不方便維護，最終 refatoring 結果應該也是放到獨立檔案中，所以另開主題介紹。

> Modules 是程式碼的管理方式，所以 library crate 與 binary crates 都可再細分為多層次的 modules。  

> Module 有三個重要概念  
>> 1. 實作位置 : 就是相依的 rs 檔實際位置。    
>> 1. 模組宣告(註冊) : 需要告知 rust compiler 自行開發的 modules 所在位置。  
>> 1. 模組引用 : 程式開發了，Compiler 也知道程式的位置了。接下來就是如何使用它。  

__實作位置__
> 與 Java 不同，javac 會自行依據 source folder 的資料夾結構遍歷當中所有檔案進行 compile。  
> rustc 需要開發者主動告知那些檔案是要一起 compiled。   
> 所以，原則上我們可以在 src 資料夾內自行任意撰寫 rs 檔，   
> 但為了能被 rustc 知曉，需再進行 modules 宣告。   

__模組宣告(註冊)__
> Modules 註冊有兩種風格:  
> 新式風格:   
> 在上層\(parent module\)的某一個 module 註冊下層\(child module\) 模組。  
> 也就是在

* 若想更改預設慣例

> cargo.toml  中的 lib block 用來設定 library create 相關資訊  
>> name : 使用(use 指令)時的名稱 
>> path : 自訂 library create root 位置。 

```tolm
[lib]
name="totem"
path="src/lib.rs"
```

__模組引用__
* 內部
* 外部
* binary root 引用自訂 library root 方式


** binary root 引用自訂 library root **
* extern crate create_name;
```rust
// main.rs

extern crate totem;

```

 
