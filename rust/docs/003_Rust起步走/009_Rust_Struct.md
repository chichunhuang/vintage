---
title: Rust Struct 結構體
description: Rust Struct
keywords: [Rust, Struct]
---

# Rust Struct 結構體
> 以比較孰悉的 Java 來比喻，Rust Struct 指的是 Java 的 Class。  
> Rust : 
>> Method(方法): Method 指的是 struct 結構的抽象行為。可以想成是 struct 所塑模概念的動作與特性，簡單的解釋可想成是與 struct 相依存的 functions。  
>> Function(函式): 這邊指的是可以單獨存在的一級公民。    
>> Field(欄位): 與 Java 一樣，struct 的屬性稱 field。  
>> Instance(實例): 以 struct 為模板所建立出來的物件稱為 instance。  

* 重點摘要
    * structure 結構 **定義** 方式  
    * fields **定義** : struct 內的欄位  
    * impl blocks : methods **定義**   
        * struct 與 methods 不需要像 Java 收集在同一個 block 之內。  
    * associated functions 定義 : 類似 Java static functions  
    * [enum 結構定義](./Rust_Enum_Match#enum)  
    * enum 與 switch 結構  
    * instance : 由 struct 所創建的實例 
    * Rust struct 特殊處:  
    
## Rust Struct

### 結構體宣告與屬性宣告

__Struct Syntax__
* 關鍵字 struct
* 結構體宣告與屬性宣告

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
   pub age : i32,
   pub address : String,
   pub expired: bool,
   pub role : String,
}

```

__**Struct Instance 建立範例1**__

```rust
// run.rs

mod core;

// 此處有加上 mut，宣告可改變 field 內容值。  
let mut acc = struct_exe::Account{
    //注意: 建構子內是類似 key-value pair 的 JSON 結構，不是用等號
    name : String::from("Totem"),
    age : 40,
    address :  String::from("TW,Asia,Earth"),
    expired: false,
    role: String::from("Programmer")
};

println!("name={}" , acc.name);
acc.name = String::from("Insect Totem");
println!("name={}" , acc.name);

```

__Struct Instance 建立範例2__
* 簡化 instance 建構語法，**當 argument 與 parameter 同名時** 可採用 field init shorthand 語法。    


```rust

// name, age 自動 mappong
fn build_student(name: String, age: i32){
    name,
    age,
    address :  String::from(""),
    expired: false,
    role: String::from("Student")
}

```

__Struct Instance 建立範例3__
* 結構體更新語法(struct update syntax)  
* 簡單的說就是建立 instance 時，instance 所需的資料由另一個(種) instance 取得。  

```rust

let tom: Boy = ........ 略

// name, age 自動 mappong
let mut acc = struct_exe::Account{
    //注意: 建構子內是類似 key-value pair 的 JSON 結構，不是用等號
    name : tom.name,
    age : tom.age,
    address : tom.age,
    expired: false,
    role: String::from("Programmer")
};

```

### 元組結構體宣告(Tuple structs)
* 特殊的 struct 建構方式，直接以 [tuple](./Rust_Data_Type#rust_tuple) 的方式建構。
    * Rust Tuple:  immutable，固定長度，元素不要求同型別。  

```ruet
pub struct Color(i32, i32, i32);

pub fn rainbow() -> (Color, Color, Color, Color) {
    let black = Color(0, 0, 0);
    let red = Color(255, 0, 255);
    let green = Color(0, 255, 0);
    let blue = Color(0, 0, 255);

    println!("{}", green.1 );
    return (black, red, green, blue);
}
```

### 類單元結構體(unit-like structs)
* unit-like struct 指的是沒有 field 的 struct。

```ruust
struct UnitLike;

fn main(){
    let obj = UnitLike;
}

```



## Pattern Match <span id="Rust_Pattern_Match">&nbsp;</span>
note: ref 補充 007_Rust_Loop_Condition

```rust
```
