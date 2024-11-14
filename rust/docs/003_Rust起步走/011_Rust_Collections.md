---
title: Rust 常用集合
description: Rust Collections
keywords: [Rust,collection]
---

# Rust 常用集合
* [Vector](./Rust_Data_Type_Vector): 與 [Array](./Rust_Data_Type#rust_array)固定長度不同，[Vector](./Rust_Data_Type_Vector)允許動態增加集合元素數量。
* [String](./Rust_Data_Type_String):
* [Hash Map](./Rust_Data_Type_Hashmap)

## 參考與借用
> 開始之前先複習一下 [參考與借用](./Rust_References_Borrowing)  
> 1. 變數在傳遞給函數使用時，若變數未以 **&** 修飾，則原變數對記憶體的 **所有權讓渡給函數中的變數** 。舊變數已無法使用。  
> 2. 變數在傳遞給函數使用時，若變數加上 <span style={{color: '#0044FF'}}> **&** </span> 修飾，則函數僅能**借用**變數內容。記憶體所有權仍維持在原變數身上。  
> 3. 函數的 signature 若只是接收借用的參考，則 signature 也要加上 **&** 作相對應修飾。  

## Vector
* construct
 * new
 * vec! macro 
 
 ```
    let mut v2 = vec![1,2,3];

    let mut v1: Vec<i32>= Vec::new();
    v1.push(11);
    v1.push(12);
    v1.push(13);
    
    //fetch
    
    let item3 = v1[2];

    let item3_2 = v2.get(2);
    
    println!("{item3}");
    println!("{:?}", item3_2.unwrap());   
    
 ```
 
 
* loop
* usage
 * push : 增加元素
 * get : by index


## String
* construct
* loop
* usage