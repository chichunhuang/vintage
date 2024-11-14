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
* [Slice 型別](./Rust_References_Borrowing#Rust_Slice)  
    * 指的是 Compound Type 的部分切片，嚴格說來不算是一種型別。僅是複合型別的部分參考。      
    * [Rust 參考與借用:Slice](./Rust_References_Borrowing#Rust_Slice)  
* 集合類型 Collections  
    * [向量 Vector](#rust_vector): 可變長度，元素需同型別。      
    * [字串 String](#rust_string): 字元(chars)的集合。  
    * [雜湊映射 Hash Map](#rust_hashmap): key-value       
    
## Numeric 
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
> 也可以經由 <span style={{color: '#0044FF'}}> zero-based index 取值。**操作子為簡單的點** 符號非一般常見的中括號 </span>。   
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
> **允許可變長度，同型別元素的儲存元件**  
* 基本建構方式  
* 使用巨集快速建構  
* 自 Vector 取值  
* [<span style={{color: '#0044FF'}}> **遍歷並改值** </span>: 🖍️ 特殊，大部分語言並不允許](#iteration_go_with_modification)  
* [打破 Vector 同型別原物的限制: 藉由 Rust enum variant 的特殊特性。](#vector_consist_of_diff_element)


### __Vector Example: 基本建構方式__

```rust
let mut shopping_cart: Vec<&str> = Vec::new();

shopping_cart.push("Book");
shopping_cart.push("Pen");
shopping_cart.push("Eraser");
shopping_cart.push("Ruler");

```

### __Vector Macro Example__

* rust 提供了 vec! 巨集，用來快速建立 vector。

```rust
pub fn use_macro_to_init_vector() {
    let v:Vec<&str> = vec!["A", "B", "C"];

    for i in &v {
        println!("{i}");
    }
}
```

### __Fetch Value from Vector__
* 註: Option 可經由 unwrap() 取值

```rust
pub fn create_vector() {
    let mut shopping_cart: Vec<&str> = Vec::new();

    shopping_cart.push("Book");
    shopping_cart.push("Pen");
    shopping_cart.push("Eraser");
    shopping_cart.push("Ruler");

    for item in &shopping_cart {
        println!("{item}");
    }

    // Vector 取值方式, by index, by get
    // 索引語法
    let second: &str = shopping_cart[1];
    println!("The 2nd is: {second}");
    //The 2nd is Pen

    // get 語法
    let get_second: Option<&&str> = shopping_cart.get(1);
    match get_second {
        Some(get_second) => println!("Get 2nd: {get_second}"), //Get 2nd: Pen, 不用 unwrap?
        None => println!("Not exists: {:?}", get_second),  //Not exists: None
    }

    if (get_second != None) {
        println!("2nd.unwrap is not None: {}", get_second.unwrap());
        // 2nd.unwrap is not None: Pen

        println!("2nd.unwrap is not None ?: : {:?}", get_second.unwrap());
        // 2nd.unwrap is not None ?: : "Pen"

        println!("2nd is not None ?: : {:?}", get_second);
        // 2nd is not None ?: : Some("Pen")
    }
}
```

### 遍歷並改值 <span id="iteration_go_with_modification">&nbsp;</span>
* 使用解參考 operator \*，並給予新值。  

```rust
pub fn iteration_go_with_modification() {
    let mut vect: Vec<i32> = vec![1 , 2, 3];

    println!("Original");
    for item in &vect {
        println!("{item}");
    }

    println!("Iterate and Modify");
    for item in &mut vect { //取得可變參考, 
        *item = item.clone() * 10; //使用解參考運算子，改數值。
    }
    for item in &vect {
        println!("{item}");
    }
    // Iterate and Modify
    // 10
    // 20
    // 30
}
```
### <span id="vector_consist_of_diff_element">Vector 裝載不同型別元素</span>
> 藉由 [Rust enum variant](./Rust_Enum_Match) 的特殊特性，也就是每個 variant 可以具備各自特有的 fields。  
> 藉由這個特性讓每個 enum instance 把持一個特定的型別。  
> 再將這些 enum instances 存在 Vector 之中。

* 使用重點:
    * enum variants 建立方式  
    * 自 enum instance 中取出 field 內容(unpacking)    

```rust
enum TextFieldDataType {
    StringType(String),
    DateType(DateTime<Utc>),
    NumericType(i32),
}


pub fn vector_multitype_elements() {
    // 以 Vector 存多個 TextFieldDataType
    // 每個 TextFieldDataType 攜帶一個不同型別的資料
    let multi: Vec<TextFieldDataType> = vec![
        TextFieldDataType::StringType(String::from("Totem Rust")),
        TextFieldDataType::NumericType(100),
        TextFieldDataType::DateType(Utc::now()),
    ];

    for item in &multi {
        let mut value = String::from("");

       // # 取出 TextFieldDataType 所攜帶的資料，並統一轉成 String 進行後續處理。
       // 這邊牽涉到 Rust 資料解包 (unpacking)
        match item {
            TextFieldDataType::StringType(field) => {
                value = field.clone();
            }
            TextFieldDataType::NumericType(number) => {
               value = number.to_string();
            }
            TextFieldDataType::DateType(date) => {
                value = format!("{}", date);
            }
        }

        println!("{}", value);
    }
}
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
