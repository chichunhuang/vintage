---
title: Rust 安裝
description: Rust 安裝
keywords: [Rust,Install]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Rust 於 Windows 安裝
> 這次是第二次安裝(另一台電腦嘗試)，與先前隔了一個多月。  
> 似乎，rustup 工具改版了。安裝便容易了。  


* 安裝過程摘要記錄  
    * 先下載 VS Code 並安裝。  
    * 至 [Rust Getting started](https://www.rust-lang.org/learn/get-started) 下載安裝 rustup 檔 
    * 🚩 安裝過程中會先檢查 C++ build tools 是否安裝，並提供自動安裝選項。  
    * {安裝 VS Code 中 Rust 相關 Extensions](Rust_1_Installation2#vsc_install)。

## SDK 安裝 
* 安裝檔下載位置 [Rust Getting started](https://www.rust-lang.org/learn/get-started)
* 起步走: https://rust-lang.tw/book-tw/ch01-02-hello-world.html


__要求安裝 Visual C++ prerequisites : 選 1 自動安裝囉__

```
Rust Visual C++ prerequisites

Rust requires a linker and Windows API libraries but they don't seem to be
available.

These components can be acquired through a Visual Studio installer.

1) Quick install via the Visual Studio Community installer
   (free for individuals, academic uses, and open source).

2) Manually install the prerequisites
   (for enterprise and advanced users).

3) Don't install the prerequisites
   (if you're targeting the GNU ABI).

>1

info: downloading Visual Studio installer
info: running the Visual Studio install
info: rustup will continue once Visual Studio installation is complete
......

```

* 等待 Visual Studio 安裝

__安裝 Rust Compiler: 還是選 1 自動安裝__

```
warning: operation completed successfully, but install requires reboot before it can be used (exit code 3010)

Welcome to Rust!

This will download and install the official compiler for the Rust
programming language, and its package manager, Cargo.

Rustup metadata and toolchains will be installed into the Rustup
home directory, located at:

  C:\Users\chichun\.rustup

This can be modified with the RUSTUP_HOME environment variable.

The Cargo home directory is located at:

  C:\Users\chichun\.cargo

This can be modified with the CARGO_HOME environment variable.

The cargo, rustc, rustup and other commands will be added to
Cargo's bin directory, located at:

  C:\Users\chichun\.cargo\bin

This path will then be added to your PATH environment variable by
modifying the HKEY_CURRENT_USER/Environment/PATH registry key.

You can uninstall at any time with rustup self uninstall and
these changes will be reverted.

Current installation options:


   default host triple: x86_64-pc-windows-msvc
     default toolchain: stable (default)
               profile: default
  modify PATH variable: yes

1) Proceed with standard installation (default - just press enter)
2) Customize installation
3) Cancel installation
>1
......

```

__完成安裝並重啟__

```
info: profile set to 'default'
info: default host triple is x86_64-pc-windows-msvc
info: syncing channel updates for 'stable-x86_64-pc-windows-msvc'
info: latest update on 2024-06-13, rust version 1.79.0 (129f3b996 2024-06-10)
info: downloading component 'cargo'
info: downloading component 'clippy'
info: downloading component 'rust-docs'
info: downloading component 'rust-std'
info: downloading component 'rustc'
 57.7 MiB /  57.7 MiB (100 %)  24.8 MiB/s in  2s ETA:  0s
info: downloading component 'rustfmt'
info: installing component 'cargo'
info: installing component 'clippy'
info: installing component 'rust-docs'
 15.4 MiB /  15.4 MiB (100 %)   2.8 MiB/s in  3s ETA:  0s
info: installing component 'rust-std'
 18.3 MiB /  18.3 MiB (100 %)  15.8 MiB/s in  1s ETA:  0s
info: installing component 'rustc'
 57.7 MiB /  57.7 MiB (100 %)  15.3 MiB/s in  3s ETA:  0s
info: installing component 'rustfmt'
info: default toolchain set to 'stable-x86_64-pc-windows-msvc'

  stable-x86_64-pc-windows-msvc installed - rustc 1.79.0 (129f3b996 2024-06-10)


Rust is installed now. Great!

To get started you may need to restart your current shell.
This would reload its PATH environment variable to include
Cargo's bin directory (%USERPROFILE%\.cargo\bin).

Press the Enter key to continue.
```



__確認安裝結果__

```
$ rustc --version
rustc 1.79.0 (129f3b996 2024-06-10)


```