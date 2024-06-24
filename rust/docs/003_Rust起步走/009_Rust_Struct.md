---
title: Rust Struct 結構體
description: Rust Struct
keywords: [Rust, Struct]
---

# Rust Struct 結構體
> 以比較孰悉的 Java 來比喻，Rust Struct 指的是 Java 的 Class。  

* 重點摘要
    * structure 結構定義  
    * fields 定義 : struct 內的欄位  
    * impl blocks : methods 定義  
        * struct 與 methods 不需要像 Java 收集在同一個 block 之內。  
    * associated functions 定義 : 類似 Java static functions  
    * enum 結構定義  
    * enum 與 switch 結構  
    * instance : 由 struct 所創建的實例  
    
## Rust Struct

__Struct Syntax__
* 關鍵字 struct

```rust
struct TypeName {
    filed1: type1,
    filed2: type2,
}
```

__Struct 定義範例__

```rust
//core.rs

pub struct Account {
   pub name : String,
   pub age : u32,
   pub address : String,
   pub expired: bool,
}

```

__Struct Instance 建立範例1__

```rust
// run.rs

mod core;

// 此處有加上 mut，宣告可改變 field 內容值。  
let mut acc = struct_exe::Account{
    name : String::from("Totem"),
    age : 40,
    address :  String::from("TW,Asia,Earth"),
    expired: false
};

println!("name={}" , acc.name);
acc.name = String::from("Insect Totem");
println!("name={}" , acc.name);
``` 


    
    
## Pattern Match <span id="Rust_Pattern_Match">&nbsp;</span>
note: ref 補充 007_Rust_Loop_Condition

```rust
```
