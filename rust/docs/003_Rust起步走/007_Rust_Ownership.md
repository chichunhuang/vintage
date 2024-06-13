---
title: Rust 所有權
description: Ownership
keywords: [Rust,Ownership]
---

# Rust 所有權 ( Ownership )
 Rust 語言下的記憶體管理

# 垃圾回收機制（garbage collector, GC）
"當記憶體在擁有它的變數離開作用域時就會自動釋放。"  
變數離開 scope， 自動釋放記憶體(自動呼叫 drop function)

# heap and stack
註:rust tw 翻譯， heap 堆積，stack: 堆疊

heap: 可以想成是 java primitive type 的記憶體管理。 ex: long v = 100L;
stack: 可以想成是 java primitive type 的 wrapper 記憶體管理(不考慮最佳化)。 ex: Long v = new Long(100);


# 關於所有權 Ownership (物件型別, stack 記憶體管理)
這邊在說的與一般 強行別語言 記憶體管理類似。
但 Rust 不允許無效變數存在。
* 一個 pointer 只有一個變數能擁有。
=> 相同資料(意義上相同)，需用 clone 進行記憶體複製。或是 trait copy (ch10)


相同處
1. 變數有作用域限制存活範圍，變數離開 scope， 自動釋放記憶體(自動呼叫 drop function)
2. 變數的 pointer 可以被搬移給其他新變數。
(* 註: 這邊稱作搬移 move，而非 copy。
因為舊變數會失去 pointer，變成無效的變數)


差異處:
記憶體回收機制，與記憶體分配方式。
1. 變數的 pointer 可以被搬移給其他新變數。
舊變數 pointer 被 複製後，會馬上被 drop。亦即舊變數失效。
(避免同一塊記憶體 被釋放多次)

# (物件)變數拷貝
terms:
* 淺拷貝（shallow copy）:拷貝指標、長度和容量而沒有拷貝實際內容
* 深拷貝（deep copy）

Rust way:
* Rust move: 淺拷貝（shallow copy）+ 移除舊變數 pointer
* Rust clone() 
    - todo: 確認是否所有原生 sdk 型別都有此 fun, ref ch5
    - clone : copy stack 上的 pointer ， and copy heap 上的 真實資料


Copy and trait copy
# (primitive type)變數拷貝
*  Rust 因為 資料與 pointer 都在 stack 上，可以直接複製使用。

# Trait Copy (特徵拷貝標記)
ch10
如果一個型別有 Copy 特徵的話，一個變數在賦值給其他變數後仍然會是有效的。    
* 當型別有實作（implement）Drop 特徵的話，Rust 不會允許我們讓此型別擁有 Copy 特徵。




