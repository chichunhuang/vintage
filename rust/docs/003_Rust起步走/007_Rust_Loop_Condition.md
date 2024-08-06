---
title: Rust 迴圈與流程控制
description: Rust Loops and Flow Controlling
keywords: [Rust, describing, the main topics]
---

# Rust 迴圈與流程控制
* 重點摘要
    * if ... else if ... else
    * [三元運算 ( Ternary Operator)](#ternary_op)
    * 迴圈
        * loop Loop: 無限迴圈，除非遇到 break  
        * for Loop
        * while Loop
    * [pattern matching: 類似其他語言的 switch/case 分支結構](./Rust_Enum_Match#matching)    
    * [if let: 若\(if\) 讓\(let\) **matching condition** 成真則做後續動作](#if_let)



## if else
* condition 的部分可以省略括號，加上小括號的話 IDE 會出現移除的建議。  
* 與 Python 不同的是，Rust condition 必須是 boolean。(Python 非空字串集合等視為 True)  

__Rust if else example__

```rust
    let x = 5;
    let y = 6;

    if x %2 ==0 && y %2 ==0 {
        println!("both even");
    }else if x %2 !=0 && y %2 !=0 {
        println!("both odd");
    }else{
        println!("different");
    }
```

## 三元運算子 ( Ternary Operator ) <span id="ternary_op">&nbsp;</span>
* 也可算是一種 if else 變形。 <span style={{color: '#0044FF'}}> **Rust 支援 let statement 中使用 if** </span>  
* 不同分支的回傳結果必須相同。

__Rust Ternary Operator__

```rust
//Syntax
let variable = if condition { expression_A } else { expression_B }; //注意最末端有一個分號

let num = 10;
let result = if num%2==0 {"even"} else {"odd"};
```

* Rust 三元運算其實可以擴大成 block 的寫法。

```rust
//Syntax
let num = 15;
let result = 
    if num%2==0 {
        if num > 10 {
            "Even and > 10"
        }else{
            "Even and < 10"
        }
    } else {
        if num > 10 {
            "Odd and > 10"
        }else{
            "Odd and < 10"
        }
    };
println!("num is {}", result );
```

# 迴圈 ( Loops )

* 迴圈
    * for Loop
    * while Loop
    * loop Loop: 無限迴圈，除非遇到 break  
* break and continue
    * break: Rust 的 **break 後方可以搭配 expression，用來拋出回傳值** 。  


## for Loop
* 當條件發生時中斷迴圈

__for loop syntax__

```rust
//for each
for element in list {
    statements...
} 

//for in range
for element in (from..to) {
    statements...
} 

for element in (from..to).rev() {
    statements...
} 

```

##  loop Loop
* 無限迴圈，直到遇到 break
* loop label

__loop loop syntax__

```rust
'loop_label: loop{
    statements...
    //break;
    //break expression;
    //break 'loop_label;
}
```



##  while Loop
* 當條件發生時中斷迴圈

__while loop syntax__

```rust
    while condition {
        statements...
    }
```

```rust
fn main() {
    let mut count_down = 10;
    
    while count_down != 0 {
        println!("{count_down}!");
        count_down -= 1;
    }
    
    println!("Fire！");
}
```


## break continue 中斷迴圈

* Rust 以 break 關鍵字中斷迴圈的語法有三種
    * 單純地中斷迴圈
    * 多重迴圈下中斷內層迴圈並繼續指定外層迴圈( 搭配 loop label 使用 ) 
    * 中斷並拋出回傳值

__Break Syntax__
* label :  
  label name 前方要加一個  ' \(單引號\)，中間不可有空白。  
  label name 後方要接一個  : \(冒號\)。  

    
```rust
'loop_label: loop{
    statements...
    //break;
    //break expression;
    //break 'loop_label;
}
```    

__Break with lable Example__

```rust
pub fn break_basic() {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    'outter: for element in data {
        if element > 7 {
            break;
        }

        'inner: for time in time {
            if time > 5 {
                continue 'outter; //go to label 'outter
                // break 'outter;  //jump to label 'outter and stop
            }

            println!(
                "{} x {} ={} ",
                element.to_string(),
                time.to_string(),
                element * time
            )
        }
        print!("**** end" ); //never print. break while e>7 or t>5.
    }
}
```

### break 中斷並拋出回傳值
>
> 首先這個語法讓人想到的第一個疑惑是，   
> 直接 return 回傳值就好了，為何要由 break 來回傳呢?    
> 
> Rust 是 expressive language。  
> 這意味著 Rust 的許多結構甚至是單傳的由大括號包覆的區塊都可以有回傳值。  
> 所以，  
> 第一是 Rust 本身語言的特性使然。  
> 第二，return 是將整個 function 終結，
> 而 break 僅中斷迴圈。這意味著 function 還活著，還能繼續接下來的 statements。  
> 也就是說，當 loop 並非是 function 的最終行時，用途便出現了。  
> 
>> 另外，Break with return 似乎只能用在 loop loops。  
>> 也就是中斷無限迴圈並給予於一個中斷狀態值。 

__Block with return__

```rust
    let result = {
        let a = 10;
        let b = 20;
        a * b // no ending ';', this is the last expr, the retval
        };
    println!("{}" , result.to_string());
```

__Break with return Example__

```rust

pub fn break_with_return() {
    let mut rng = rand::thread_rng();

    let mut tmp = 0;
    let salt = loop {
        tmp = rng.gen::<i32>();
        if tmp > 100 {
            break tmp; 
            //這邊用 break with return，得到結果並繼續
            //若用 return，則 function 整個中斷。後面列印,gen_key 皆不會執行。
        }
    };

    println!("Found base>100 : {}", salt);

    let key = gen_key(salt);
    println!("sale: {}", key)
}
```

__傳統 OOP 實作比較__

```Rust
pub fn break_with_return2() {
    let salt = rand_num();

    println!("Found base>100 : {}", salt);

    let key = gen_key(salt);
    println!("sale: {}", key)
}

fn rand_num() -> i32 {
    let mut rng = rand::thread_rng();
    let mut tmp = 0;
    let mut salt = 0;
    loop {
        tmp = rng.gen::<i32>();
        if tmp > 100 {
            salt = tmp;
            return salt;
        }
    }
}
```

##　Pattern match: 類似其他語言的 switch/case 分支結構 <span id="matching">&nbsp;</span>
* [Rust Enum and Match Pattern](./Rust_Enum_Match#switch_case)


## If let condition <span id="if_let">&nbsp;</span>
> 若讓 <span style={{color: '#FF1100'}}>**matching condition**</span> 成真則做後續動作。  
> 是 pattern matching 的 syntax sugar。  
> 
> 這個語法應該只用在<span style={{color: '#FF1100'}}>**簡化 Patter Matching 情境**</span>下。  
> 且意思不同於單純的 if 句子(後面接的是 boolean expression)。  
> 註: 目前應該是因為對 Rust 仍在初學階段，語法原則不明白。所以使用上有非預期的情境出現。  
> 例如:  
> **pattern_condition** 中等號兩側 expression 不可互換，  
> **左側必須是 enum 的變體 instance 列舉**。  
> **右側應該限定是輸入的條件參數**。  
> pattern_condition : 僅限是 enum 的比對，不同於一般的 if condition。  
> 
>> <span style={{color: '#FF1100'}}>**目前我傾向於少用**</span>，畢竟我對這語法不了解。  

__if let syntax__
* 若(if) 讓/當(let) condition 成真則做後續動作，不然(else) 做另一動作。  

```rust
if let pattern_condition {
    go();
} else {
    wait();
}
```

__if let syntax: 官方範例 __

```rust
// 未使用 sugar 的原始長相:
let onfig_max = Some(3u8);
match onfig_max {
    Some(max)=> println!("最大值為 {}", max),
    _=>(), // do nothing
}

// 等同於
let onfig_max = Some(3u8);
if let  Some(max)= onfig_max {
   println!("最大值為 {}", max);
} else {
    do_nothing();
}
```

__pattern_condition Syntax__
* enum_variant : 這邊是 enum 的 static instance。
* instance : 這邊指的是情境代入的狀態。
* 這邊似乎左右 expressions 不可互換。
* 這邊不同於 boolean expression。

```rust
enum_variant = instance

```