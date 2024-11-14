## Vector

__loop Vector__
* vec.iter()

```rust
let mut v = vec![1, 2, 3]; 
for i in v.iter() { 
    println!("{}", i); 
}
```

```rust
let some_vec = vec![1, 2, 3];
for i in &some_vec {
    println!("{}", i);
}
```

__in-place modification__
* 注意 \*i  

```rust
let mut some_vec = vec![1, 2, 3];
for i in &mut some_vec {
    *i *= 2;
}
println!("{:?}", some_vec); // [2, 4, 6]
```

__loop Vector : with index__

```rust
let vec = vec![1, 2, 3]; 
for (index, element) in vec.enumerate() { 
    println!("Element {} is {}", index, element); 
}
```


__DSL__
* some_vec.iter().map(|x| /* do something here */)

* vec.into_iter()
* it is lazy

```rust
//looping
let vec = vec![1, 2, 3]; 
let doubled: Vec<i32> = vec.into_iter().map(|x| x * 2).collect(); 
println!("{:?}", doubled); // [2, 4, 6]
```

* \*i  

```rust
//looping + in-place modification
let mut some_vec = vec![1, 2, 3];
some_vec.iter_mut().for_each(|i| *i *= 2);
println!("{:?}", some_vec); // [2, 4, 6]
```