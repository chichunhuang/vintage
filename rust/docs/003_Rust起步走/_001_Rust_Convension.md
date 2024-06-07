---
title: Rust 的使用慣例
description: Rust Convension
keywords: [keywords, describing, the main topics]
---

# Rustaceans 的使用慣例
> 先雜亂的列出慣例


* 關鍵字
fn 
return 
break
continue


* rs 檔名: 全小寫，單詞間以底線串接, snake case
* rs function: 全小寫，單詞間以底線串接, snake case


* tuple 點 取值, 可不同型別元素
* array 中括號, 長度不可變, 同型別元素

* 函式 function: 回傳值預設為函式本體最後一行的表達式(註:不可加分號，不須加 return)   


* Rust: 在條件判斷的地方 都省略一般常見的小括號



* 註解 : 
__Rust 註解__

```rust
// 一般註解

/// 技術文件註解（documentation comment)
/// 通常位於程式碼上方
/// 技術文件註解 中間可以穿插 markdown
```

# 雜項
* termial 指令 
    * rustc xyz.rs
    * Cargo new /build/run /check
    
# Operators
比較運算元(Comparison, ==, !=, >, <)


    
算術運算元 (+-/*)
賦值運算元(Augmented Assignment, =, +=, -=, /=, %=, **=, //=)
邏輯運算元 (and, or, not)
位元運算元 (&, |, ^, ~, <<, >>)
成員運算元 (in, not in)
實體運算元 (is, is not)


















# image: a thumbnail image to be shown in social media cards

<!-- C 這是 HTML 註解 : 注意註解前  __必須___ 有空行 -->

import { CodeBlock, dracula  } from "react-code-blocks";
	 <CodeBlock
      text={`	  
	let x ='先一個 tab 再加內容';
	  `}
      language='JavaScript'
      showLineNumbers='true'
      //theme={dracula} //use default else 
    />
	
	
/* B 這是 JS 註解(mdx js block 所用方式): 注意註解前後  __不可___ 有空行或 BR */
&lt;! 這邊演示如何在 JSX 呈現角括號(上範例不可有空行) --&gt;

<div style={{backgroundColor: 'red', color: 'blue' }} >
一個 div 區塊, 在 md 檔中設定 style 的 template 
<br/>
{/* C 這是 JSX 註解(以大括弧封起一個程式碼區間, 然後依據 js 的方式寫註解 ): 注意註解前後不可有空行 */}


## 【Gson fromJson】

<code>


</code>

