---
title: Rust 迴圈與流程控制
description: Rust Loops and Flow Controlling
keywords: [Rust, describing, the main topics]
---

# Rust 迴圈與流程控制
* 重點摘要
    * if ... else if ... else
    * 三元運算 ( Ternary Operator)
    * 迴圈
        * loop Loop: 無限迴圈，除非遇到 break  
        * for Loop
        * while Loop



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

## 三元運算子 ( Ternary Operator )
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


## break 中斷迴圈

* Rust 以 break 關鍵字中斷迴圈的語法有三種
    * 單純地中斷迴圈
    * 中斷並拋出回傳值
    * 多重迴圈下中斷內層迴圈並繼續指定外層迴圈( 搭配 loop label 使用 ) 

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

```rust
fn main() {

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
