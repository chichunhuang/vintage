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
>> 預設所有權會一併傳給 Function，因而造成原先變數失效。  
>> 若 Variable 想保留所有權，則可以借出 reference 給 Function。  
>> 對 Function 來說便是參考借用 (References Borrowing)，   
>> 當 Function 借來的參考離開作用域後，因為 Function 沒有所有權，所以記憶體不會被釋放掉。  
>> 此時 argument 要加上 & 修飾，用來表達僅是借用。  
>
>> Compiler 會確保參考永遠有效  
>> 同時間只能有一個可變參考，或是任意個不可變參考  


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
> 與變數宣告過程相似，變數分為可變變數與不可變變數。  
> 可變變數的變數名前須加上 mut 進行修飾，用來說明變數所指向的記憶體是可以被異動的。  
> 反之，未加修飾的話則不能異動。  
> 在 **物件類的參考變數** 上也是類似的，  
> 首先我們需要先將變數宣告為 **可變** 也就是加上 **mut** 修飾。  
> 然後，要傳遞參考時效加上 **&** 修飾字。  
> 此時參考所帶的記憶體預設是不可變的，若改成可變則需要在 & 之後加上 mut。   
> 再加上 Rust 超強型別限制，別忘了 signature 部分也要加上 mut 修飾。   
>
> 再回到所有權的概念(資料競爭): 
>> 記憶體只能一個參考擁有。如此可避免誤改或銷毀資料。   
>> 同樣概念，**借用的可變** 參考同時間只能存在一個。  
>> 避免多方同時修改記憶體資料。  
>> 同樣同一資料的可變與不可變參考，無法同時存在。  
>> 你不會希望拿到手的不可變參考的內容會改變吧。  
>> 整個的概念與想法可以藉由**資料庫資料隔離 isolation** 的概念來思考。  
>> 不過在 VS Code 上練習時，基本上 IDE 都能提示，所以無須擔心。  
 

__Mutable Reference Example__

```rust
pub fn mut_reference(){
    let mut hello = String::from("Hello");
    //mutable String

    let totem = String::from("Totem");
    //immutable String

    let x = appendToWhom(&mut hello, &totem);
    //傳遞參考時要加上 &
    //若是可變參考要再加上 mut

    println!("{}", x);
}


//signature: greet 也需要宣告
// 1. & : reference
// 2. mut : mutable 
fn appendToWhom(greet: &mut String, target: &String ) -> String{
    greet.push_str(", "); //因為有宣告 mut 所以不會 compile error
    greet.push_str(target);
    return greet.clone();
} // greet 是參考所以記憶體不會歸還
```
 
## 迷途參考 Dangling Pointer
> 指的是資源已被釋放，但指標卻還留著。  
> 基本上 Rust Compile 管那麼多，所不必擔心。  
> 也別想嘗試是寫一個，因為 Rust Compiler 會保護你。  


## Slice Type<span id="Rust_Slice">&nbsp;</span>

> 'Slice 讓我們可依參考一串集合中的元素序列，而並非參考整個集合'。  

__Slice Syntax__

* zero-based index  
* from index 為 0 時，可以省略  
* to_index 為長度時，可以省略  

```rust
    let var_name = &var_reference[from_index..to_index];
```

__Slice Example__

```rust

pub fn slice_example(){
    let msg = String::from("Insect Totem : Rust");
    let a = &msg[0..12]; //
    let b = &msg[15..msg.len()];

    println!("{}", a);
    println!("{}", b);
}

```