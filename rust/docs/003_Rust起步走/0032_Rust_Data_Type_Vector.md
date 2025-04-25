---
title: Rust 向量 Vector
description: Rust Vector
keywords: [Rust,Vector]
---

# Vector
> Vector 資列結構中集合的一種: 可用來放置多個元素，特色為 **可變長度，但元素需同型別**。
>  但是，可以藉由 [enum variants 特性，讓 Vector 裝載不同型別元素](#vector_consist_of_diff_element)    
> 有別於 [Tuple](./Rust_Data_Type#rust_array) 與 [Array](./Rust_Data_Type#rust_array)。    
> [Tuple](./Rust_Data_Type#rust_tuple):**固定長度，元素需同型別。**  
> [Array](./Rust_Data_Type#rust_array):**固定長度，元素不要求同型別**  
>  
> Vector 允許[<span style={{color: '#0044FF'}}> **遍歷並改值** </span>: 🖍️ 特殊，大部分語言並不允許](#iteration_go_with_modification)


## Vector 建構方式
> Vector 可經由 new 建立 instance，並搭配 push 增加元素。  
> 也可經由 vec macro 建立時一併指定元素。  

### __Vector : 基本建構方式 new__

```rust
let mut shopping_cart: Vec<&str> = Vec::new();

shopping_cart.push("Book");
shopping_cart.push("Pen");
shopping_cart.push("Eraser");
shopping_cart.push("Ruler");

```

### __Vector : 經由 Macro 建構__

* rust 提供了 vec! 巨集，用來快速建立 vector。

```rust
pub fn use_macro_to_init_vector() {
    let v:Vec<&str> = vec!["A", "B", "C"];

    for i in &v {
        println!("{i}");
    }
}
```

## Vector 基本使用方式

### __自 Vector 中選取元素__
> 兩種方式: by index 與 by get method  
> by index: [Array](./Rust_Data_Type#rust_array) 相同經由角括號指定 index。  
>> [Tuple](./Rust_Data_Type#rust_tuple) 方式最怪異，直接以點取值。  
>  
> by get method: 與 Java 相同可以以 get(index) 方法取出 **Option** 再搭配 **option.unwrap\(\)** 取值。    
> 

```rust
pub fn create_vector() {
    let mut shopping_cart: Vec<&str> = Vec::new();

    shopping_cart.push("Book");
    shopping_cart.push("Pen");
    shopping_cart.push("Eraser");
    shopping_cart.push("Ruler");

    //& 記憶體借用
    for item in &shopping_cart {
        println!("{item}");
    }

    // Vector 取值方式, by index, by get
    // 索引語法
    let second: &str = shopping_cart[1];
    println!("The 2nd is: {second}");
    //The 2nd is Pen

    // get 語法: 可先取出 Option
    let get_second: Option<&&str> = shopping_cart.get(1);
    match get_second {
        Some(get_second) => println!("Get 2nd: {get_second}"), //Get 2nd: Pen, 不用 unwrap?
        None => println!("Not exists: {:?}", get_second),  //Not exists: None
    }

    // Vector 先取出 Option 再解包取值
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

## Vector 迴圈走訪方式
> Vector 允許[<span style={{color: '#0044FF'}}> **遍歷並改值** </span>: 🖍️ 特殊，大部分語言並不允許](#iteration_go_with_modification)

### Vector 走訪: for each    
* 使用 rust iterator 來 lazy 走訪。  
* v.iter\(\) 僅是建立迭代器。

```rust
let v = vec![1, 2, 3]; 
for i in v.iter() { 
    println!("{}", i); 
}
```

```rust
let some_vec = vec![1, 2, 3];
for i in &some_vec {
    println!("{}", i);
}
```

### Vector 走訪: enumerate  

```rust
let vec = vec![1, 2, 3]; 
for (index, element) in vec.enumerate() { 
    println!("The element:{} is {}", index, element); 
}
```

### DSL: Java Collection 中的 stream
* vectorA.iter().map(|x| /* do something here */)  
* __vec.into_iter()__ : alloc::vec::into_iter::IntoIter\<T\>   
* 跟 Java stream 相同，這邊的動作具 Lazy 特性   

```rust
//looping
let vec = vec![1, 2, 3]; 
let doubled: Vec<i32> = vec.into_iter().map(|x| x * 2).collect(); 
//vec.into_iter() : alloc::vec::into_iter::IntoIter<T>   

println!("{:?}", doubled); // [2, 4, 6]
```

__語法比較__

```
//java
List x = collection.stream().map((item) -> do something with item).collect(toList());
// (item) -> , 小括號做signature，箭頭引出實作

//rust
let x2: Vec = vec.into_iter().map(|item| do something with item ).collect(); 
// |item| , 省略箭頭, 雙槓 || 做 signature，後方直接附加實作

```

### 🖍️ 遍歷並改值 🖍️<span id="iteration_go_with_modification">&nbsp;</span>
* 使用 <span style={{color: '#FF1100'}}>解參考 operator \*</span> ，並給予新值。  

```rust
pub fn iteration_go_with_modification() {
    let mut vect: Vec<i32> = vec![1 , 2, 3];

    println!("一般迴圈走訪");
    for item in &vect {
        println!("{item}");
    }

    println!("走訪，解參考並異動");
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
    * 自 enum instance 中取出 field 內容\(unpacking\)    

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
        TextFieldDataType::StringType(String::from("Totem Study Rust")),
        TextFieldDataType::NumericType(100),
        TextFieldDataType::DateType(Utc::now()),
    ];

    for item in &multi {
        // 這邊的範例是將不同型別元素轉成 string 來呈現。
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

## v.iter\(\) vs v.into_iter\(\) 差異  



* \*i  

```rust
//looping + in-place modification
let mut some_vec = vec![1, 2, 3];
some_vec.iter_mut().for_each(|i| *i *= 2);
println!("{:?}", some_vec); // [2, 4, 6]
```