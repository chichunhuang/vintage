---
title: Rust Enum and Match Pattern
description: Rust Enum and Match Pattern
keywords: [Rust,Enum]
---

# Rust Enum and Match Pattern <span id="matching">&nbsp;</span>
* [Pattern match: 類似其他語言的 switch/case 分支結構](./Rust_Loop_Condition#matching)



## Rusr Enum <span id="enum">&nbsp;</span>


### 自 enum filed 取值方式
* Rust enum 允許變體(variants)存在。也就是說每個 enum instance 可以具有不同數量與型別的 fileds。  
* 下面介紹如何取出 enum instance 變體各自的專屬 field 內容。  

```rust
use chrono::{DateTime, Datelike, Timelike, Utc};

enum TextFieldDataType {
    StringType(String),
    DateType(DateTime<Utc>),
    NumericType(i32),
    ArrayType(i32, i32, i32, i32),
    EmptyTYpe(),
}

pub fn fetch_enum_field_value() {
    let extract_a =
        TextFieldDataType::StringType(String::from("extract by [pattern matching + unpacking]"));
    match extract_a {
        TextFieldDataType::StringType(field) => println!("style A = {}", field),
        _ => print!("skip"),
    }

    let extract_b = TextFieldDataType::StringType(String::from("extract by [if let + unpacking]"));
    let mut field: String = String::from("");
    if let TextFieldDataType::StringType(value) = extract_b {
        field = value;
    }
    println!("style B =  {}", field);

    let extract_c = TextFieldDataType::StringType(String::from("extract by [if let + unpacking]2"));
    if let TextFieldDataType::StringType(field) = extract_c {
        println!("style C: {}", field);
    }

    let extract_d = TextFieldDataType::ArrayType(10, 20, 30, 40);
    let mut second = 0;
    if let TextFieldDataType::ArrayType(first, second, _, _) = extract_d {
        println!("style D, with placeholder : {}", second);
    }
    //解包時以 _ 來為不重要的變數取一個暫時的名稱佔位符 placeholder。
}

```
