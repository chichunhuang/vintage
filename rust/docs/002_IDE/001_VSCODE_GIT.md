---
title: Git 與 VS Code
description: VS Code Git 設定
keywords: [Rust,VS Code, Git]
---

# Rust Git 環境準備 : VS Code
* 剛入門，發現學習或開發 Rust 應用程式，一般建議的 IDE 是 [Visual Studio Code](https://code.visualstudio.com/download) 或是 [RustRover](https://www.jetbrains.com/rust/)，不然就是一些加強版的文字編輯器搭配 command line 指令。
* 因為電腦裡已經有安裝 VS Code 跟 Visual Studio 了，所以暫時先選用 VS Code，畢竟 Rust 官方 Windows 安裝文件步驟中要求安裝 C++ Build Tools 套件是經由安裝 Visual Studio。所以，就用它啦。
* 晚些再換成 RustRover，畢竟先前練習 Python 已經先選用 IntelliJ/JetBrains 家的工具了。不然快速鍵打架時真的會用到抓狂。
* 不熟悉 VS Code 的 Git 操作所以寫了這份筆記。


## 事前準備
* 安裝 VS code
* 安裝 Git
* 準備一個 Git Repo: 例如 Rust_Exercise

## 下載 Git Repo
* clone repo from VS Code  
![clone repo from VS Code](/img/rust/insect_totem_net_Git_001.jpg "clone repo from VS Code")
1. 開啟新的 Window
2. 填入 remote repo trunk 位置
3. 填入 local trunk 位置
4. 自動下載遠端資訊
5. 完成
6. 建立 Rust src, target 等基本資料夾

## VS Code Git 相關操作位置
* Stage 操作要將滑鼠移到 Source Control Panel / Changes / 檔案旁才會出現操作 icons   
![Stages 操做](/img/rust/insect_totem_net_Git_002.jpg "VS Code Stage operations")
* Git 其他操作位置: pull/push/stash 等等，同樣也要自行點開  
![Git Operations](/img/rust/insect_totem_net_Git_003.jpg "Git Operations")
* Git Branch 操作: 要點右下角 branch name 才會出現  
![Git Branch Operations](/img/rust/insect_totem_net_Git_005.jpg "Git Branch Operations")
* Local Timeline (History) 檢視 :單一檔案 local history    
![Git File Timeline](/img/rust/insect_totem_net_Git_004.jpg "Git File Timeline")
* Git Commit History: 可選安裝 plugin [Git History by Don Jayamanne](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)  
![Git Commit History](/img/rust/insect_totem_net_Git_006.jpg "Git Commit History")  

* Git History plugin 操作  
    * __F1 : 開啟工具__ ，輸入下列指令以開啟相關 Panels  
    * Git: View Git History (git log)   
    * Git: View File History   
    * Git: View Line History   
    
![Git History Plugin](/img/rust/insect_totem_net_Git_007.jpg "Git History Plugin")


