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





__print type__

```
fn print_type_of<T>(_: &T) {
    println!("{}", std::any::type_name::<T>());
}

fn main() {
    let s = "Hello";
    let i = 42;

    print_type_of(&s); // &str
    print_type_of(&i); // i32
    print_type_of(&main); // playground::main
    print_type_of(&print_type_of::<i32>); // playground::print_type_of<i32>
    print_type_of(&{ || "Hi!" }); // playground::main::{{closure}}
}

```