---
title: VS Code 開發準備
description: VS Code 中開發 Rust 相關準備
keywords: [Rust,VS_Code]
---

# VS Code 中開發 Rust 相關準備
> Cargo : Rust 的萬用工具，參考 [The Cargo Book 開啟方式](../Rust安裝/Rust_1_Installation/#cargo)


## 事前準備
> 需先安裝 Rust SDK: [Totem 的安裝紀錄](../Rust安裝/Rust_1_Installation)  

## rust-analyzer extension 安裝
> 這個套件讓 VS Code 支援 Rust 開發，  
> [rust-analyzer 套件使用手冊](https://rust-analyzer.github.io/)   
> [XXXX](https://code.visualstudio.com/docs/languages/rust#_check-your-installation)

* Inlay hints
* Hover information
* Auto completions: Ctrl+Space 
* Semantic syntax highlighting

![rust-analyzer](/img/rust/insect_totem_net_IDE_ext_001.jpg "rust-analyzer")

## 小試身手
__Windows cmd 或 VS code terminal 下__

```
$ insecttotem> cargo new rust_exercise
$ insecttotem\rust_exercise> cargo build
$ insecttotem\rust_exercise> cargo run
```

## rust-analyzer: inlay hints 設定
> rust-analyzer 有提供 inlay hints 功能(鑲嵌提示)，  
> 可以依據自己需求調整  

* VS code > File > Preferences > Settings >> filter field 輸入 inlay hints  
    * TextEditor >> Editor > Inlay Hints : enable 
    * Extensions > Language Supports > rust-analyzer  

![rust-analyzer :inlay hints](/img/rust/insect_totem_net_IDE_ext_002.jpg "rust-analyzer inlay hints")


## rust-analyzer: 語法高亮度顯示 
* Semantic syntax highlighting 設定
* VS code > File > Preferences > Settings >> filter field 輸入 Semantic
![rust-analyzer :syntax highlighting](/img/rust/insect_totem_net_IDE_ext_003.jpg "rust-analyzer syntax highlight")

## rust-analyzer: 快速鍵

| Topic | hotkey |       |
|-------|-------|-----| 
| 查原始檔| F12 | Source Code |
| 查原始檔| Alt+F12 | Source Code,小視窗 |
| 使用參照| Shift+F12 | 列出有使用此類別的其他檔案 | 
| 函數使用參照 | Shift+Alt+H | 列出有使用此函數的其他檔案 |
| 開啟查找視窗 | Ctrl+Shift+P 或 F1 | 大於符號是查找工具指令，移除大於可以找檔案 |
| 在檔案中找 | Ctrl+Shift+o (歐) |  |
| 修正建議 | Ctrl+. | 錯誤處下免會出現...，也可以滑鼠點來進行 Quick Fixes |
| 重新命名 | F2 | 包含 reference |
| 文件格式整理 | Shift+Alt+F |  |


## Debugging
https://code.visualstudio.com/docs/languages/rust#_debugging

