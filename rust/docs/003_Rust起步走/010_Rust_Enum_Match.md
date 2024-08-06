---
title: Rust 列舉與模式配對
description: Rust Enum and Pattern Matching
keywords: [Rust,enum,Pattern_Matching]
---
<span id="Rust_Pattern_Match">&nbsp;</span>

# Rust Enum and Pattern Matching<span id="matching">&nbsp;</span>
> Java 中有 enum 這個特殊關鍵字，用來建立一系列同型別的 static instances。  
> Rust 中也有，也稱為 enum，使用上也類似。  
> 因為 enum 同為 Java static instance 的概念，所以也能運用在 Pattern Matching。 

> [Rust Pattern matching 簡單的比喻就是其他語言的 switch/case 分支結構](./Rust_Loop_Condition#switch_case)   
> 因為 Rust enum instance 可以再攜帶獨自型別的資料，因此使用上增加更多變化。  

## Rust Enum <span id="enum">&nbsp;</span>
* [Rust enum 基本使用方式1 (with same-type fields)](#basic_enum)
* [Rust enum 基本使用方式2 (with diff-type fields)](#basic_enum)
* [None 與 Some: Option 標準函式庫中特殊的 rust enum](#none_some)
* [Enum and Match Pattern/ Switch Case](#switch_case)

## Rust enum 基本使用方式 <span id="basic_enum">&nbsp;</span>
* 語法注意: 最後一個 variant 後是以<span style={{color: '#FF1100'}}>**逗號結尾**</span>
* 使用方法類似 Java 須帶類別名稱。
* enum 本身是一種 struct type，所以也可以攜帶 fields，語法上也未限制 fields 的資料型別。
** 但特別的是， Rust 允許每個 variants 擁有不同數量/型別的 fields。  

```rust
enum ProcessStatus{
    Start(String),
    Processing(String, String), //variants 可擁有不同數量/型別的 fields。
    End(String), // 這邊是以逗號結尾 
}

let init_status = ProcessStatus::Start(String::from("開始"));
let exe_status = ProcessStatus::Processing(String::from("進行中", "Processing"));
let done_status = ProcessStatus::End(String::from("完工"));
```

```rust
```

## Rust enum 基本使用方式2(不同型別數量 fields)<span id="basic_enum2">&nbsp;</span>
* 語法注意: 同樣最後一個 variant 後是以<span style={{color: '#FF1100'}}>**逗號結尾**</span>
* enum 本身是一種 struct type，所以也可以攜帶 fields，語法上也未限制 fields 的資料型別。
* Rust 允許每個 variants 擁有不同數量/型別的 fields。

* <span style={{color: '#0044FF'}}> **下方範例加贈取 field 方式** </span>
** Rust enum 允許變體(variants)存在。也就是說每個 enum instance 可以具有不同數量與型別的 fileds。  
** 下面介紹如何取出 enum instance 變體各自的專屬 field 內容。

```rust
enum TextFieldDataType {
    StringType(String),
    DateType(DateTime<Utc>),
    NumericType(i32),
    ArrayType(i32, i32, i32, i32),
    EmptyTYpe(),
}

pub fn fetch_enum_field_value() {
    let now = Utc::now();

// Style 1: 在 Match Pattern 上便一並宣告變數。
    let extract_a =
        TextFieldDataType::StringType(String::from("extract by [pattern matching + upacking]"));
    match extract_a {
        TextFieldDataType::StringType(field) => println!("style A = {}", field),
        _ => print!("skip"),
    }

// Style 2: 使用 if let 專用語法，同樣在 Match Pattern 中宣告變數。 
    let extract_b = TextFieldDataType::StringType(String::from("extract by [if let + upacking]"));
    let mut field: String = String::from("");
    if let TextFieldDataType::StringType(value) = extract_b {
        field = value;
    }
    println!("style B =  {}", field);

// Style 3: if let 語法
    let extract_c = TextFieldDataType::StringType(String::from("extract by [if let + upacking]2"));
    if let TextFieldDataType::StringType(field) = extract_c {
        println!("style C: {}", field);
    }

// Style 4: Variant 中有多個自訂 fields 時，可以用 解包語法 取出焦點。
    let extract_d = TextFieldDataType::ArrayType(10, 20, 30, 40);
    let mut second = 0;
    if let TextFieldDataType::ArrayType(first, second, _, _) = extract_d {
        println!("style D, with ignored : {}", second);
    }
    ////解包時以 _ 來為不重要的變數取一個暫時的名稱佔位符 placeholder。
}
```


## Option 標準函式庫中特殊的 rust enum<span id="none_some">&nbsp;</span>
> 用途:Rust 不應該也不允許出現 Null Pointer Exception 之類的情境。  
>     當有可能出現空值的情境時，在 rust 中選擇以 Option<T\> 作為回傳。  
>      Option enum 下有兩個 instance : None 與 Some<T\>。 None 可用來借代為空值。  

## None 與 Some: Option 標準函式庫中特殊的 rust enum
> 同樣的 Java 中也有 Option 用來避免 Null Pointer Exception，Rust 中的 None 與 Some 也具有相同的設計目的。  
> Rust enum variants 因為可以擁有不同數量與型別成員變數的特性，因而被選用來時做 Option。   
>  
> 簡單的說便是: Option 這個結構(struct/type)有 Some 與 None 這兩種變體(Variants)。  
>> 因此可以利用 Option 加上定義泛型成員的方式來定義有能為空值的變數的型別。  
>> 當變數有值時: 以 Some<type> 封裝回傳值  
>> 當變數缺值時: 則直接給予 None  
>> 注意: <span style={{color: '#FF1100'}}>** Some 的 value 只能取出一次**</span>，取出後即歸還記憶體。  


__Option 範例__

```rust
fn dummy_dataset_find_find_by_name(name : String) -> Option<String> {
    return Some(String::from("Insect totem"));
}

pub fn option_exercise(){

    let totem: Option<String> = dummy_dataset_find_find_by_name(String::from("key"));
    
    //style A
    if let Some(value: String) = totem {
        print!("My name is {}", value);
    }    
}

pub fn option_exercise2(){
    let totem: Option<String> = dummy_dataset_find_find_by_name(String::from("key"));
    //style B
    let mut certified_name: String = String::from("not found");
    if let Some(value) = totem {
        certified_name = value;
    }
    print!("My name is {}", certified_name);
}

```

__Some: use moved value 範例__

```rust
pub fn option_exercise_error_moved_value(){
    // 這個範例會出錯
    let totem: Option<String> = dummy_dataset_find_find_by_name(String::from("key"));
    
    if let Some(value: String) = totem {
        print!("My name is {}", value);
    }  
    //=> Some 的 value 已經取出
    
    let mut certified_name: String = String::from("not found");
    if let Some(value2) = totem { // 這邊會報錯 use of moved value
        certified_name = value2;
    }
    print!("My name is {}", certified_name);
}

```

## Enum and Match Pattern/ Switch Case <span id="switch_case">&nbsp;</span>
這邊也要寫摘要
>> [Rust enum](./Rust_Enum_Match#switch_case)  
>> [Rust Pattern Matching](./Rust_Loop_Condition#matching)  




