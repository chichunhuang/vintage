---
title: Rust 參考與借用
description: References and Borrowing
keywords: [Rust,References Borrowing]
---

# Rust 參考與借用
> 這邊討論的主要是物件類的類別所產生的 instance 所屬變數與指標間的關係。  
> 原生類 \(Primitive Types\) 因為記憶體管理方式不同 \(heap\)，  
> 而 Instance 記憶體主要是在 Stack 處理，  
> 變數與 Stack \(堆疊\) 間還有 reference \(參考\) 與 Pointer \(指標\) 等中間過程。  
> Rust 在變數再次指派、引數傳遞、以及記憶體歸還方面與先前學過的程式語言有些許差異，  
> 所以，額外提出來討論與紀錄。

* 主體相關關鍵字
    * 參考 reference  
    * 借用 borrowing: 不獲取所有權來使用參考  
    * 作用域 scope  
    * 所有權 ownership  
    * &, *
    
> 重點觀念摘要:  
>> Instance 的 Variable 若當 argument pass 給函數後，  
>> 預設所有權會一併傳給 Ffunction，因而造成原先變數失效。  
>> 若 Variable 想保留所有權，則可以借出 reference 給 Function。  
>> 對 Function 來說便是參考借用 (References Borrowing)，   
>> 當 Function 借來的參考離開作用域後，因為 Function 沒有所有權，所以記憶體不會被釋放掉。  
>> 此時 argument 要加上 & 修飾，用來表達僅是借用。  


## 函數借用變數參考
* count_length_borrow 只借用。
* count_length 會搶走所有權，所以 borrow_example_clone 會拋出錯誤。 

```rust
pub fn borrow_example_clone(){

    let hello = String::from("Hello Totem");

    let length = count_length(hello);
    // 建議修正: 將原始資料 clone 
    // let length = count_length(hello.clone());

    println!("lenght : {}", length.to_string());
    println!("{}", hello); //error: could not compile

}

pub fn borrow_example(){

    let hello = String::from("Hello Totem");

    let length = count_length_borrow(&hello); //argument 前加上 & 進行修飾
    let length2 = count_length(hello.clone());

    println!("lenght : {}", length.to_string());
    println!("lenght2 : {}", length2.to_string());
    println!("{}", hello);

}

fn count_length(input: String)->usize{
    return input.len();
}

fn count_length_borrow(input: &String)->usize{
    return input.len();
}
```    

## 函數借用可變變數參考