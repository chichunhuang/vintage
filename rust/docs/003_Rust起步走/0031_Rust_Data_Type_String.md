## String Concatenation
* String.push_str(&str);
* String.push_str(&String);
* operator + (String + &str)
* format macro (String+ String) or (&str+ &str)


__String + &str__

```rust

fn main() {
    let mut owned_string: String = "hello ".to_owned();
    let borrowed_string: &str = "world";
    
    owned_string.push_str(borrowed_string);
    println!("{owned_string}");
}
```

__String + String__

```rust
fn main() {
    let mut owned_string: String = "hello ".to_owned();
    let another_owned_string: String = "world".to_owned();
    
    owned_string.push_str(&another_owned_string);
    println!("{owned_string}");
}
```

__ use + operator to combine String and &str __

```ruet
fn main() {
    let owned_string: String = "hello ".to_owned();
    let borrowed_string: &str = "world";
    
    let new_owned_string = owned_string + borrowed_string;
    println!("{new_owned_string}");
}
```

__Concate 2 %str by format macro__

```ruet
fn main() {
    let borrowed_string: &str = "hello ";
    let another_borrowed_string: &str = "world";
    
    let together = format!("{borrowed_string}{another_borrowed_string}");
    println!("{}", together);
}
```

__Concate 2String by format macro__

```ruet
fn main() {
    let owned_string: String = "hello ".to_owned();
    let another_owned_string: String = "world".to_owned();
    
    let together = format!("{owned_string}{another_owned_string}");
    println!("{}", together);
}
```


__ use + operator to combine String and &str __

```ruet
fn main() {
    let owned_string: String = "hello ".to_owned();
    let borrowed_string: &str = "world";
    
    let together = owned_string.clone() + borrowed_string;
    println!("{together}");
}

```

