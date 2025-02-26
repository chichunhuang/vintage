---
title: Rust 所有權
description: Ownership 記憶體所有權
keywords: [Rust,Ownership]
---

# Rust 所有權 ( Ownership )
> Ownership 討論的是 Rust 語言下的記憶體管理。  
> 通常一個變數 (Variable) 後方會有一個參照 (Reference)，  
> 參照下會包含 pointer、length 與 capacity 等資訊。  
> 而 pointer 則指向一個記憶體區塊。    
> 
> Rust 這邊底層的概念是，一個記憶體區塊僅允許一個變數擁有，更精確地說應該是一個參照所擁有。  
> 所以當一個變數將參照給別人(指派，函數呼叫)時，本身便成為一個無效的變數。  
> 這邊衍伸下來會會探討，Reference 的借用 (&)，也就是變數暫時使用另一變數的參照。      
> 
> 另外一個重點是變數作用域，也就是變數後方的記憶體何時會被清掉(歸還)，或是被其他變數搶走所有權。
> 
> 這篇主要是探討記憶體的所有權。
 

## 垃圾回收機制（garbage collector, GC）
> "當記憶體在擁有它的變數離開作用域時就會自動釋放。"   
> Rust 中當變數離開 scope，自動釋放記憶體(自動呼叫 drop function)，所以無需自行處理。  
> 須注意的是記憶體的所有權被何者所把持。 
> 這會影響到記憶體釋放的時機。   
> 另外擁有者才有機會對資料進行修改。  

## heap and stack
> 註: Rust tw 翻譯: heap 堆積，stack 堆疊  
> 
> heap: 可以想成是 Java primitive type 的記憶體管理。 ex: long v = 100L;  
> stack: 可以想成是 Java primitive type 的 wrapper 記憶體管理。 ex: Long v = new Long(100);  


## 關於所有權 Ownership (物件型別, stack 記憶體管理)
* 注意這邊討論的不包含 : primitive type   
> 這邊在說的與一般 強型別語言 記憶體管理類似。  
> 且 Rust 不允許無效變數存在。  
> 意即一個 pointer 只有一個變數能擁有(但是能借用)。  
>> 相同資料(意義上相同)，需用 clone 進行記憶體複製。或是 trait copy (ch10)  

__Ownership Example__

```rust
    let s1 = String::from("hello"); // 物件的 String
    let s2 = s1; // s1的參照移轉給 s2

    println!("{}, world!", s1);  // 錯誤發生。 s1 已喪失 pointer，無法取得記憶體內容。 
```

### 與一般強型別語言比較
相同處
1. 變數有作用域限制存活範圍，變數離開 scope， 自動釋放記憶體(自動呼叫 drop function)

差異處:
記憶體回收機制，與記憶體分配方式。
1. 變數的 pointer 可以被搬移給其他新變數。  
(* 註: 這邊稱作搬移 move，而非 copy。因為舊變數會失去 pointer，變成無效的變數)
2. 舊變數 pointer 被搬移後，會馬上被 drop。亦即舊變數失效。  
(* 避免同一塊記憶體 被釋放多次)


## (物件)變數拷貝
terms:  
* 淺拷貝（shallow copy）: 只拷貝 reference 中指標、長度和容量而沒有拷貝實際內容  
* 深拷貝（deep copy） 

Rust way:  
* Rust move: 淺拷貝（shallow copy）+ 移除舊變數 pointer
* Rust clone() 
    - todo: 確認是否所有原生 sdk 型別都有此 fun, ref ch5
    - clone : copy stack 上的 pointer，and copy heap 上的 真實資料

## (Primitive Type)變數拷貝  
* Rust 因為 資料與 pointer 都在 stack 上，可以直接複製使用。  
* Primitive type: 因為有實作 Copy 特徵，當變數在賦值給其他變數後仍然會是有效的。  
* ex: u32, bool , f64, char 等  
  tuple (前提是 elements 也必須實作 trait copy )  

## Trait Copy (特徵拷貝標記)
* 如果一個型別有 Copy 特徵的話，一個變數在賦值給其他變數後仍然會是有效的。  
* 當型別有實作（implement）Drop 特徵的話，Rust 不會允許我們讓此型別擁有 Copy 特徵。  


<hr/>
<hr/>
<hr/>

# (物件) pointer 所有權與函式: 
> 注意: 函數情境同變數 pointer 移交  
> 與前面 (物件)變數拷貝 時相似，當一個物件變數把 pointer 傳遞(move to)新變數時，舊變數失去 pointer 因而失效。  
> 在函數情境中，(物件)變數 move pointer 給函數時。函數接收了 pointer，所以舊變數失效。  
>> 還好開發時 IDE 會提醒你  


__變數pointer 移交給函式 範例__

```rust
fn main(){
let greeting = String::from("Hello Totem");
    myprint(greeting); // pointer 移交，為使用 & 關鍵字 
    // println!("message {greety}"); # greeting 是 String，pointer 在傳遞給 myprint() 時已失效
}

fn myprint(message: String){
    println!("{}", message);
}
```

# function 回傳值與作用域
pointer 移交同樣會發生在，函數將結果回傳時。



__NoteMessage__
```rust
fn main() {
    let s1 = gives_ownership();         // gives_ownership 移動它的回傳值給 s1

    let s2 = String::from("哈囉");     // s2 進入作用域

    let s3 = takes_and_gives_back(s2);  // s2 移入 takes_and_gives_back
                                        // 該函式又將其回傳值移到 s3
} // s3 在此離開作用域並釋放
  // s2 已被移走，所以沒有任何動作發生
  // s1 離開作用域並釋放

fn gives_ownership() -> String {             // gives_ownership 會將他的回傳值
                                             // 移動給呼叫它的函式

    let some_string = String::from("你的字串"); // some_string 進入作用域

    some_string                              // 回傳 some_string 並移動給
                                             // 呼叫它的函式
}

// 此函式會取得一個 String 然後回傳它
fn takes_and_gives_back(a_string: String) -> String { // a_string 進入作用域

    a_string  // 回傳 a_string 並移動給呼叫的函式
}
```



<hr/>
<hr/>
<hr/>

# References and Borrowing