---
title: Rust 內部 Module
description: Rust Nested Module
keywords: [Rust, Module System]
---

# 內部 Module
這邊指的是在一個 module 內，同時宣告並實作另一個 module。  
就像是 Java 的 nested class...   
直接看範例

__同 rs 檔中使用: 不須 use statement__

```
//nested_module.rs

//同樣要先宣告與註冊
pub mod num_tool {
    pub fn add(a:i32, b:i32) -> i32{
        return  a+b;
    }
} 

pub fn go(){
    println!("hello: nested module exercise_inplace invoke");
    let result = num_tool::add(1, 2);
    println!("result = {result}");
}

```

__其他 rs 檔中使用__
* 與一般使用相同

```
//nested_module/foreinger_invoker.rs

use crate::practice::nested_module::num_tool;

pub fn go(){
    println!("hello: nested module exercise_foreinger_invoker");
    let result = num_tool::add(4, 5);
    println!("result = {result}");
}

```