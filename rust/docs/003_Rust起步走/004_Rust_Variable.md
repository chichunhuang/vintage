---
title: Rust 變數
description: Rust Variables
keywords: [Rust,Variable]
---

# Rust 變數
* 重點摘要
    * 🚩 可變變數/不可變變數 : let / mut  
    * 🚩 __Shadowing:__ Rust 特殊的特性，同一個變數可以 **再次宣告並轉換型別** 。  
    * 常數 : const   
    
## Rust 可變與不可變變數(mutable and immutable variables)
> Rust 用 **let** 鍵字進行變數需告。  
> 變數宣告後預設是 immutable。  
> 若要宣告可變變數則須加上 **mut** 關鍵字。

__Rust Mutable and Immutable Variables__

```rust

// Immutable Variable 以 let 宣告
let gender = "Male";

// Mutable Variable 以 let mut 宣告
let mut age = 45;

```


## Rust 常數 Constant
> Rust 用 **const** 鍵字進行常數需告。  
> 常數宣告時需額外 **告知型別** 


__Rust Constant__

```rust
//常數 以 const 宣告，且須宣告型別。
const  short_pi:f32 = 3.14;
const  long_pi:f64 = 3.1415926535;

``` 
