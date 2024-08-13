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
//定義區
enum ProcessStatus{
    Start(String),
    Processing(String, String), //variants 可擁有不同數量/型別的 fields。
    End(String), // 這邊是以逗號結尾 
}

//使用區
let init_status = ProcessStatus::Start(String::from("開始"));
let exe_status = ProcessStatus::Processing(String::from("進行中", "Processing"));
let done_status = ProcessStatus::End(String::from("完工"));
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
>> 當變數有值時: 以 Some<type\> 封裝回傳值  
>> 當變數缺值時: 則直接給予 None  
>> 注意: <span style={{color: '#FF1100'}}>** Some 的 value 只能取出一次**</span>，取出後即歸還記憶體。  


__Option:取值範例__
* let content = opt.unwrap(); 使用 unwrap 可取出 Option 內容。  

```rust
fn dummy_dataset_find_by_name(name : String) -> Option<String> {
    return Some(String::from("Insect totem"));
}

pub fn option_exercise(){

    let totem: Option<String> = dummy_dataset_find_by_name(String::from("key"));
    
    //style A
    let content = totem.unwrap();
    print!("My name is {}", content);   
}

pub fn option_exercise2(){

    let totem: Option<String> = dummy_dataset_find_by_name(String::from("key"));
    
    //style B
    if let Some(value: String) = totem {
        print!("My name is {}", value);
    }    
}

pub fn option_exercise3(){
    let totem: Option<String> = dummy_dataset_find_by_name(String::from("key"));
    //style C
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

## Enum and Match Pattern/Switch Case <span id="switch_case">&nbsp;</span>

> Pattern matching 在 Java 中稱為 Switch Case，整體概念相同，使用上有一些小出入。

> 先說明 Rust 中的 Patterns 限制:  
>> Patterns 可以是 字面量、變數名、enum、萬用字元\(佔位符\)。   
>> **分支的模式必須盡舉所有可能性**，不然會 Compile Error。    
>> 佔位符代替其他所有未列出的 patterns(Java switch-case 中的 default)  
>> 以 \(\): 單元數值來代表不做任何事情  
>> if let 變體  

### Pattern matching: enum
> enum 可__盡舉__，故常在 pattern 中使用。  
>> 每個 Match Pattern 後應該以逗號做結尾，但若是多行區塊以大括號限制住的話則可省略。


### Pattern matching 語法
__Pattern matching Syntax__
* => 用來引出後續該執行的 Statement 或 Expression  
* 每個 Matching 後應該以逗號結尾做分隔  
* Patterns 必須盡舉  
* 無法盡舉所有 Patterns 可以以 \_ 或 other 來代替剩餘可能性，並以 \(\)單元數值來代表不做任何事情  

* 下面範例示範: Pattern Matching，當符合指定 Pattern 時執行特定動作。  
__match example__

```rust
enum QuestionType {
    DVG(u32),
    Multiple(Vec<u32>),
    FillIn(String),
}

fn fetch_answer(question: QuestionType) -> String {
    match question {
        QuestionType::DVG(dvg) => {
            return extract_dvg_answer(dvg);
        } 

        QuestionType::Multiple(multi) => {
            return extract_multi_answer(multi);
        }, //大括號封裝，所以逗號可省略
        
        QuestionType::FillIn(fillin) => {
            return extract_fillin_answer(fillin);
        }
    }
}

fn extract_dvg_answer(dvganswer: u32) -> String {
    return dvganswer.clone().to_string();
}

fn extract_fillin_answer(fillin: String) -> String {
    return fillin;
}

fn extract_multi_answer(multi: Vec<u32>) -> String {
    let mut combine = "".to_owned();
    for item in multi {
        combine.push_str(&";".to_owned());
        combine.push_str(&item.to_string());
    }
    return combine;
}

pub fn match_exercise() {
    let dvg = QuestionType::DVG(10);
    let multi = QuestionType::Multiple(vec![1, 3, 5]);
    let fillin = QuestionType::FillIn("Hello, I'm Totem.".to_owned());
    println!("-----");
    println!("DVG answer is : {}", fetch_answer(dvg));
    println!("Multiple answer is : {}", fetch_answer(multi));
    println!("FillIn answer is : {}", fetch_answer(fillin));
    
    //DVG answer is : 10
    //Multiple answer is : ;1;3;5
    //FillIn answer is : Hello, I'm Totem.
}
```

* 下面範例示範: Pattern Matching 無法盡舉時的處理方式

> Pattern Matching 並未限制只能用 enum，其他 數字、literal 等也行。但卻會有盡舉的問題。  
>  
> 解決方式為 catch all:  
> Catch All 分為兩種情境(兩種 placeholders):  
>> underscore 下畫線 \_ : 不在乎傳入參數後續使用時，可以使用 underscore 搭配單元數值 \(\) 使用。    
>> other : 以 other 代替未列舉出的其他任一配動情境。other 可直接想成是傳入參數的臨時變數。實測結果，以其他字眼代替也可達到目的。  
>> 注意: 須注意的是因為 Pattern Matching 是依序向下比對，因此 \_ 或 other 都需是最後一個 Pattern。  

__match example: catch all__

```rust
pub fn catch_all_exercise(){
    let choice = "1";

    match  choice {
        "NA" => description(choice),
        "ND" => description(choice),
        "N" => description(choice),
        "R" => description(choice),
        "Z" => description(choice),

        _plachholder => selected(choice),
    }
    
    //Answer: 1
}


fn description(choice: &str){
    print!("Force Single: {} ", choice )
}
fn selected(choice: &str){
    print!("Answer: {} ", choice )
}
```