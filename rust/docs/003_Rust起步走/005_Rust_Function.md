---
title: Rust 函式
description: Rust Functions
keywords: [Rust,Function]
---

# Rust 函式(Function)
* 這邊指的是可以單獨存在的一級公民 function。有別於 [struct 結構體](./Rust_Struct#rust_method) 下的方法(method)。
* Function 命名規則 **<span style={{color: '#0044FF'}}>snake case</span>** : 小寫，以底線區隔單詞。  
* 關鍵字 **<span style={{color: '#0044FF'}}> fn, return </span>**   


## 語法
* 關鍵字
    * fn 用來進行函式宣告
    * return 用來提示回傳值
    * 預設做末行 expression 為隱式回傳值 (注意: 末端沒有分號)  
* Parameter 
    * Signature 必須宣告型別。(Rust 是強型別語言)  
    * 若是可變型別 需加上 mut 關鍵字
    * 若是指標型別 需再加上 & 關鍵字
* 回傳值以 
    * -\> 符號宣告  
    * 完整回傳表達式為 return + 回傳內容 + 分號   
    * 回傳值預設為函式本體最後一行的表達式(註:不可加分號，不須加 return)    
    * 預設回傳不可加分號，也可以省略 return 關鍵字。  
* 註: Python 函式同樣末行為預設回傳，預設值為 None。

__Rust Function Syntax__

```rust
fn function_name(param1: type, param2: mut type2 ) -> return_type {
    do_something("SYNTAX");
    return value;
}

fn change_description(desc: &mut String) -> bool{
    ....
}
```

## 陳述式（Statements）與表達式（Expressions）
* 陳述式（Statements）:
* 表達式（Expressions）: 有回傳值。**多行表達式可以用大括號包覆，並以最末行為回傳值** 。  
    * 注意: expression 行尾沒有分號 ;  
   
## 簡單範例

__Rust Example__

```rust
fn main() {
    let total = sum(6,4);
    let total2 = sum2(6,4);
    let total3 = sum3(6,4);

    println!("{}", total);
    println!("{}", total2);
    println!("{}", total3);
}


fn sum(a: i32 , b: i32) -> i32{
    let c = a + b;
    return c; // 完整的回傳 statement
} 

fn sum2(a: i32 , b: i32) -> i32{
    let c = a + b;
    return c // 省略分號的回傳 expression
} 

fn sum3(a: i32 , b: i32) -> i32{
    let c = a + b;
    c // Rust 預設回傳末行 expression
} 
```
