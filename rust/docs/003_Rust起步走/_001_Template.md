---
title: Rust Template
description: A short description of this page
keywords: [Rust, describing, the main topics]
---

__ foreach in __

```Rust

    let bytes ="Hello World".as_bytes();

    for (index, &item) in bytes.iter().enumerate(){
      print!("{}", index);  
      print!("{}", item);
    }


```