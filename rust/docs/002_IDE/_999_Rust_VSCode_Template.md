



__for loop: array__

```
// signature: array 連 size 都要標
fn print_each(data: [&str;4]) {
    
    for item in data {
        println!("{}", item);
    }
    
    for (index, item) in data.iter().enumerate() {
        println!("{}: {}", index, item);
    }
}

pub fn exercise() {
    let data: [&str; 4] = ["A", "B", "C", "D"];
    print_each(data);
}

```


__for : iterator__

```
fn print_each_2(data: [&str;5])  {

    for (index, &item) in data.iter().enumerate() {
       println!("{}:{}", index, item);
    }
}

pub fn exercise() {
    let data: [&str; 5] = ["A", "B", "C", "D", "E"];
    print_each_2(data);
}
    
```