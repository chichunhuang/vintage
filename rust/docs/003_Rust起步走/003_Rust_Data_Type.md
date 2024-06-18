---
title: Rust 資料型別
description: Rust Data Type
keywords: [Rust,Data_Type]
---

# Rust 資料型別

* 純量 Scalar Type
    * 整數 Integer, 細分 signed / unsigned  integer, 預設為 i32  
    * 浮點數 Floating-Point, 細分為 f32 / f64 , 預設為 f64 
    * 布林  
    * 字元  
* 複合 Compound Type
    * 🚩  [Tuple \(&nbsp;\)](#rust_tuple): 固定長度，可不同型別  
    * 🚩  [Array \[&nbsp;\]](#rust_array): 固定長度，元素需同型別
    * [Vector](#rust_vector): 可變長度，元素需同型別
    
    
## Integer 
> 細分為 signed / unsigned  integer  
> 特殊處:
>> 字面量(literals): 可以在數值字面量後加上型別，ex: 10 v.s. 10u8  
>> 字面量可以加底線，方便閱讀，ex: 1000 v.s. 1_000  
>> 注意整數除法: 取最接近零的下界數值(別忘記負數的除法)  

| 位元長度  |Signed (i)  | Unsigned (u)|
|-----|-----|-----            |
| 8-bit   |i8  | u8           |
| 16-bit  |i16  | u16         |
| 32-bit  |i32 \* 預設整數型別 | u32         |
| 64-bit  |i64  | u64         |
| 128-bit |i128     | u128    |
| arch(依據系統架構決定)    |isize    | usize   |

##　Floating-Point
> 細分為 f32 / f64, 預設為 f64 \*
> 浮點數一率為 signed 

## Boolean 布林 
> 小寫 true / false

## Character 
> String: double quote，雙引號賦值。 ""   
> Char: single quote，單引號賦值。 ''   
> Rust Char: 4bit Unicode。


## Tuple \(\) <span id="rust_tuple">&nbsp;</span>
> immutable，固定長度，元素不要求同型別。  
> 跟 Python 一樣， Rust Tuple 可以進行解包賦值。 
> 也可以經由 zero-based index 取值。操作子為簡單的點符號非一般常見的中括號。   
> 另外: Rust 界稱無元素的 tuple 為 Unit。

```rust
fn main() {
    let totem = (45, 76.4, "Male");

    let (age, weight, gender) = totem;
    //let (age: i32, weight:f64, gender:$str) = totem;
    let age2 = totem.0;

    println!("age = {age}");
    println!("age2 = {age2}");
}
```

## Array \[\] <span id="rust_array">&nbsp;</span>
> **固定長度，元素同型別。**  
> zero-based index 中括號取值。 
> 語法:   

__Array Syntax__  

```rust
let variableName:[type; size] = [elements, ...]; 

let variableName2:[defaultValue; size]; 

```

__Array Example__

```rust
let meal_special:[&str; 3] = ["Burger", "Coke", "french fries"]; 
let main_dish = meal_special[0];
println!("Main Dish = {main_dish}");
```


## Vector 向量 <span id="rust_vector">&nbsp;</span>
> **可變長度，元素需同型別**  


__Vector Example__

```rust
let mut shopping_cart: Vec<&str> = Vec::new();

shopping_cart.push("Book");
shopping_cart.push("Pen");
shopping_cart.push("Eraser");
shopping_cart.push("Ruler");

```

## Unit Type
> 特殊的 Tuple 狀態，沒有任何 elements 的 Tuple 又稱為單元型別 (Unit Type)，  
> 通常用來代表一個空的回傳型值。  
> 當 expression 沒有回傳任何值的話，Rust 會隱含地回傳單元型別。  
>
> 不知為什麼 Rust Documentation 要額外提 Unit Type，就單純是一個空的 Tuple。

## Unit-like Structs
> Struct 類似 Java 的 Class。用來將真實事物抽象化時使用。  
> Unit-like Struct 則是指內容全空的 Struct。  
