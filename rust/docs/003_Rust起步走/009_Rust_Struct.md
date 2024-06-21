---
title: Rust Struct 結構體
description: Rust Struct
keywords: [Rust, Struct]
---

__ foreach in __

```Rust

    let bytes ="Hello World".as_bytes();

    for (index, &item) in bytes.iter().enumerate(){
      print!("{}", index);  
      print!("{}", item);
    }


```