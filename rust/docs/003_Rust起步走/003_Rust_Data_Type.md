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
    * 
    
    
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


## Tuple \(\)
> immutable，元素不要求同型別。  
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

## Array \[\]
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


## Vector 向量
> 可變長度，元素同型別。
