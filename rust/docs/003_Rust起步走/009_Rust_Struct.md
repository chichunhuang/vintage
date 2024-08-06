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
    
## Rust 結構體(Struct)

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

## 方法(Struct Method) <span id="rust_method">&nbsp;</span>
> Method 指的是針對 struct 所建立的相依函式，  
> 且 Method 的 Signature 的第一個 parameter 應該是 self。 
> method 藉由 self 與 struct instance 綁定。   
>> 1. 與 Java 不同，Java 語言中 methods 與 class 封裝在同一個 Block 之內。  
>>    Rust 則是定義在不同的區塊內(impl block)，所以藉由 self 與之綁定。    
>>    而 **impl block 上則需標註所關聯的 struct** 類別。  
>> 2. method 第一個 parameter 若不為 self 的 method 稱為 **關聯函式\(Associated Functions\) ** 。   
>>    這便就類似 Java 中的 Util 類別時做結構。如 StringUtil 下的多個 static functions。
>> 3. 一個 STRUCT 可以有多個關聯的 impl blocks。  

### Rust Method 定義語法
* impl method signature 的 &self 是 self: &Self 簡筆。  
    * Self(大寫 S) 指向 impl 的主體 struct，也就說 self 為 struct instance 參照的簡寫方式。  
* 一個 struct 可以有多個 impl block 定義區。     

__Rust Method: impl block Syntax __

```rust
impl MyStruct {
    fn my_common_method(&self, p1: type1, pN: typeN) -> returnType{
        do...
    }
    
    fn my_associated_method(p1: type1, pN: typeN) -> returnType{
        do...
    }
}
```

__Rust Method Example__

```rust
pub struct Television{
    power : bool,
}

// method 
impl Television {
    pub fn turn_on(&mut self)-> bool{
    //signature 等同於(self: &mut Self)
       self.power = true;
       return self.power;
    }

    fn turn_off(&mut self)-> bool{
       self.power = false;
       return self.power;
    }
}

pub fn method_exercise(){
    let mut sony = Television{
        power: false,
    };

    sony.turn_on();
    println!("The television is: {}", if sony.power { "on" } else { "off" } );

    sony.turn_off();
    println!("The television is: {}", if sony.power { "on" } else { "off" } );
}

```


## 關聯函式(Associated Functions) 定義語法
> 可以想成是 Java 的 static methods。  
>> Method Signature 第一 parameter 不為 &self 的 function，稱為 associated function。(因為不與 struct 相依所以稱 function)  
> 
* 關鍵字 <span style={{color: '#0044FF'}}> **S**elf </span>: **Self 型別指的是 impl block 要實作型別的別名(alias)**。
    * 所以實際使用時也可以直接使用 struct name。  
* 依據慣例 Associated Functions 也是 snake case。     

__Associated Functions Example__

```rust
#[derive(Debug)] // {:#?}, 允需 print! 巨集執行 debug print
pub struct Person{
    name : String,
    role : String,
}

impl Person {
    // Rust 界的優雅用法 
    // a: Self alias
    // 回傳 last expression 
    pub fn teacher(name : String) -> Self{
        Self{
            name,
            role: String::from("Teacher"),
        }
    }

    // 這邊以 Self 借代 Person 型別。
    pub fn student(name : String) -> Self{
        let ret = Self{
            name,
            role: String::from("Student"),
        };
        return ret;
    }

    // 回傳 last expression
    pub fn principal(name : String) -> Person{
        Person{
            name,
            role: String::from("Student"),
        }
    }
}

pub fn associated_function_exercise(){
    let winnie = Person::teacher(String::from("Winnie the Pooh"));
    let totem = Person::student(String::from("Totem"));
    let lady = Person::principal(String::from("LadyBird"));

    println!("My teacher is {:#?}", winnie);
    println!("My name is {}", totem.name);
    println!("My principle is {}", lady.name);
}
```


## enum 與 Pattern Matching 
> Java 中有 enum 這個特殊關鍵字，用來建立一系列同型別的 static instances。  
> Rust 中也有，也稱為 enum，使用上也類似。  
> 因為 enum 同為 Java static instance 的概念，所以也能運用在 Pattern Matching。  
> 
>> 參考 :  
>> [Rust enum](./Rust_Enum_Match)  
>> [Rust Pattern Matching](./Rust_Loop_Condition#matching)  


 TODO: enum 建構方式與使用摘要