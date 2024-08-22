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
| binary crate | 執行檔 Crate: 能編譯成執行檔並執行的程式單元 | 有 main 函式的 crate |
| library crate | 函式庫 Crate: 用來定義分可享工具的單元 | 不具 main 函式 |
| crate root | Crate 源頭: Rust compiler - rustc 編譯時首先尋找的入口檔 | Crate root 預設指的是 src 下的 main.rs 與 lib.rs |
| Scope | 作用域 | 在模組這邊預設指的是相同資料夾中的 sibling modules。<br/>有加 pub 修飾者，則可全域使用。 |
| path | 路徑 | 模組系統中指的是，在 Module Tree 下找尋指定 module 的查找路徑。 |
| use | 將指定 module 引用時所需的指令 | 將指定 module 路徑所關聯的 module 引入\(import\)作用域<br/>或用來建立 module path 的捷徑時使用 |
| as | 模組設別名時關鍵字 | 當引用到同名不同模組時，取別名時使用 |
| pub | 公開 | public 讓指定項目動外公開 |
| glob | global 全域運算子 * | use 時可以用 wildcard 引用所有 public 項目 |


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
>> 1. [實作位置](#impl) : 就是相依的 rs 檔實際位置。    
>> 1. [模組宣告\(註冊\)](#declare) : 需要告知 rust compiler 自行開發的 modules 所在位置。分為[新式](#declare_new)與[舊式](#declare_old)宣告。    
>> 1. [模組引用](#import) : 程式開發了，Compiler 也知道程式的位置了。接下來就是如何使用它。  
>> 1. [lib 引用](#import_lib) : 專案管理下分拆的 lib crate 引用方式。  

### __實作位置__ <span id="impl">&nbsp;</span>
> 與 Java 不同，javac 會自行依據 source folder 的資料夾結構遍歷當中所有檔案進行 compile。  
> rustc 需要開發者主動告知那些檔案是要一起 compiled。   
> 所以，原則上我們可以在 src 資料夾內自行任意撰寫 rs 檔，   
> 但為了能被 rustc 知曉，需再進行 modules 宣告。   
> 宣告則必須遵循指定原則。  

### __模組宣告(註冊)__ <span id="declare">&nbsp;</span>
> 模組宣告的目的是用來讓 Rust 建立 Module Tree。  
> 有了 Module Tree 後，rs 程式在 use 才能方便找尋相依程式碼。  
>> 學習到目前，我個人傾向為若用舊式風格的話，mod.rs 就單純用來當 modules 註冊用。  
>> 這句話意味著 mod.rs 裡面除了註冊宣告外，也可以撰寫其他 functions、struct... 等 其他程式。
> 

> Modules 註冊有兩種風格:  
> 舊式風格: 以 **mod.rs 檔**(清單檔 Manifest file)來註冊整個**資料夾**內的 rs 檔。
> 新式風格: mod 語法會直接對應相依名稱的 rs 檔。

   
### __舊式宣告風格__ <span id="declare_old">&nbsp;</span>

> 舊式風格: 以資料夾名稱來進行 module 引用，再搭配 mod.rs 檔案，查詢實作檔位置。
> 由於 Rust 程式碼的入口是位在根目錄的 main.rs，根目錄沒名字所以相關初始 modules 註冊工作就會一併交給 main.rs 來處理。  
>
>> 重點:  
>> rustc 經由 mod 註冊語法得知相關實作查詢位置，而後藉此建立 modules tree。    
>> 主程式利用 module tree 結構，use 所需相關實作。
>> 使用(use 語法)時搭配 associated function operator :: 來指向目標實作。 


__舊式風格範例__
注意: 內註冊的對象為 **mod 語法引出的對象**  

* 舊式風格範例資料夾結構

```
src/main.rs

src/camping
src/camping/mod.rs

src/camping/camp_service.rs

src/camping/cook_module
src/camping/cook_module/mod.rs
src/camping/cook_module/boodle.rs
src/camping/cook_module/pancake.rs

src/camping/traffic_module
src/camping/traffic_module/mod.rs
src/camping/traffic_module/train.rs
src/camping/traffic_module/car.rs

```

* main.rs \(root\) 下的註冊方式
這邊因為先天限制**無法經由 mod.rs**註冊，所以直接註冊在 root 身上。

```
//main.rs 
// 註冊 camping 模組

//這邊意味著:
// 在當下資料夾內可能有一個 camping.rs 檔 或是 camping 資料夾
mod camping;  
```

* camping/mod.rs \(常規模組\)下的註冊方式  
  * <span style={{color: '#0044FF'}}> 模組資料夾名(camping)稱就是將來使用時的模組名 </span>  
  * cook_module, traffic_module 有 sub-modules。與 camping 模組相同需要建立模組資料夾   
  * camp_service 沒子模組，不須建立模組資料夾，但是會有一個 camp_service.rs     

```
// src/camping/mod.rs
// 註冊 cook_module, traffic_module, camp_service 模組

mod cook_module ; //with sub module
mod traffic_module ; // w/o pub : visible in current folder only
pub mod camp_service; //without sub module

// 其實，mod.rs 也可以提供其他 functions 
pub fn method_in_mod_rs() {
    println!("method_in_mod_rs")
} 
```

* cook_module traffic_module mod.rs 下的註冊方式  

```
//src/camping/cook_module/mod.rs
pub mod noodle;
pub mod pancake;


//src/camping/traffic_module/mod.rs
pub mod train;
pub mod car;

```

* 其他相關實作

```
//main.rs
mod camping;

fn main() {
    camping::camp_service::chill();
    camping::camp_service::have_noodle();
    camping::camp_service::have_pancake();
    camping::method_in_mod_rs();
}    


//camp_service.rs
use crate::camping::cook_module::noodle;
use crate::camping::cook_module::pancake;

pub fn chill() {
    println!("chill at camp_service.rs");
}

pub fn have_noodle() {
    noodle::prepare();
}

pub fn have_pancake() {
    pancake::prepare();
}

//noodle.rs
pub fn prepare(){
    println!("beef noodles");
}

//pancake.rs
pub fn prepare(){
    println!("chocolate pancake");
}

//car.rs
pub fn vehicle(){
    print!("Go by car")
}

//train.rs
pub fn vehicle(){
    print!("Go by train")
}
```

### __新式宣告風格__ <span id="declare_new">&nbsp;</span>
> 舊式風格下會出現程式碼中有非常多的 mod.rs 檔，造成維護困難。  
> 新式風格則省略 mod.rs 清單檔。  
> 整體**註冊方時與同於舊式風格中的 crate root 中註冊 modules 相同**。  
> 意即:  
> 在程式入口處 main.rs 中註冊 modules  
> 相關 sibling 模組就放在 src 資料夾中。  
> 若 sibling module 有子模組，  
> 則在 sibling rs 檔上註冊 \(與 main.rs 相同\)  
> 並以 sibling module 名為資料夾命名，並收集相關子模組檔 \(這邊也相同\)。  
>> 簡單的說就是 <span style={{color: '#0044FF'}}> **把 mod.rs 改以 module name 命名，並移出模組資料夾** </span>。   

* 新式風格範例資料夾結構

> src/main.rs  
>   
> src/camping  
> src/camping/mod.rs  
>   
> src/camping/camp_service.rs  
> 
> ~~src/camping/cook_module~~  
> ~~src/camping/cook_module/mod.rs~~  
> ***src/camping/cook_module.rs*** (新增，用以紀錄原先 mod.rs 內容)  
> src/camping/cook_module/boodle.rs  
> src/camping/cook_module/pancake.rs  
>   
> ~~src/camping/traffic_module~~  
> ~~src/camping/traffic_module/mod.rs~~  
> ***src/camping/traffic_module.rs*** (新增)  
> src/camping/traffic_module/train.rs  
> src/camping/traffic_module/car.rs  
>




### __模組引用__ <span id="import">&nbsp;</span>
> 關鍵字  
>> 模組引用 : __<span style={{color: '#0044FF'}}> use </span>__ <br/>
>> 別名引用 : __<span style={{color: '#0044FF'}}> use as </span>__ <br/>
>> lib crate 引用 : __<span style={{color: '#0044FF'}}> extern crate </span>__   

__模組引用語法__
* 建議在 rs 檔上方統一引用，以精簡敘述方便閱讀
  * 當然也可以在程式碼中以 certificated name 引用。
  * 注意完整名是由 crate 起始。  


__模組引用範例__

```
//main.rs
use crate::camping as camp;
use crate::travel::camping as travel_camp; //引用另一 module，但會出現名稱衝突，故以 as 取別名

fn main() {
    travel_camp::suggestions();
    camp::schedule();
}
```

### __lib crate 引用__ <span id="import_lib">&nbsp;</span>
> 關鍵字 : __<span style={{color: '#0044FF'}}> extern crate </span>__

__引用 lib crate 語法 1__  
* crate_name 預設為 package name \(專案名稱\)
  
```
    extern crate <package_name>;
```


__範例 cargo.toml__

> cargo.toml  中的 ***package block***   
>> name : **預設**使用(use 指令)時的名稱  


```toml
[package]
name = "insect_totem"
version = "0.1.0"
edition = "2021"
```

__預設 lib crate 引用範例__ : 以 package name 引用。

```rust
// main.rs
    extern crate insect_totem;
```


__引用 lib crate 語法 2: 設定客製化名稱__ 

* 若想更改預設慣例
  * 下面範例更改 lib crate 引用名稱由 insect_totem 改為 totem  
  * 預設與客製化名稱不可同時使用，以客製化名稱優先  
> cargo.toml  中的 ***lib block*** 用來設定 library create 相關資訊  
>> name : 使用(use 指令)時的**客製化名稱 **  
>> path : 自訂 library create root 位置。 


__引用 lib crate : 別名引用__
* cargo.toml: 更改預設名為 totem

```toml
[package]
name = "insect_totem"
version = "0.1.0"
edition = "2021"

[lib]
name="totem"
path="src/lib.rs"
```

* main.rs example (搭配 cargo.toml 設定)
  
```rust
// main.rs
    //extern crate insect_totem;
    extern crate totem;

```
