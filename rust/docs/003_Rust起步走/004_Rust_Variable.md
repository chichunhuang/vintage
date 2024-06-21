---
title: Rust 變數
description: Rust Variables
keywords: [Rust,Variable]
---

# Rust 變數
* 重點摘要
    * 🚩 宣告時: 可變變數/不可變變數 : let mut x / let x
        * 不允許無效變數，所以宣告後方一定會加上 = 等號與 資料初始化。 let x = String::from("Hello World")
    * 🚩 函數使用物件指標時(invoke): 可變指標/不可變指標 :  &mut x / &x  
    * 🚩 宣告物件指標時(signature): 可變指標/不可變指標 :  x: &Type / x: &mut Type  
    * 🚩 __Shadowing:__ Rust 特殊的特性，同一個變數可以 **再次 let 宣告並轉換型別** 。  
    * 常數 : const   
    
## Rust 可變與不可變變數(mutable and immutable variables)
> Rust 用 **let** 鍵字進行變數需告。  
> 變數宣告後預設是 immutable。  
> 若要宣告可變變數則須加上 **mut** 關鍵字。  
> 若是[指標變數則加上 **&** 關鍵字](Rust_Ownership)。

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
