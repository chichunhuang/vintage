---
title: VS Code 疑難雜症
description: VS Code 疑難雜症
keywords: [Rust,VS_Code]
---

## unresolved import 'xyz'
> VS code 出現警示
1. 修改 Cargo.toml
2. 增加相關所需的 dependencies

```rust
[dependencies]
rand="0.8.5"
```



> compile 時出錯的話
1. install Code Runner extension
2. 點齒輪 > Extension Settings > Executor Map setting
3. link 'Edit in settings.json
4. 下列修改..... 無效(因為原本便是用 cargo run)
```
from :
"code-runner.executorMap": {
    "rust": "cd $dir && rustc $fileName && $dir$fileNameWithoutExt",
}


to:    
"code-runner.executorMap": {
    "rust": "cargo run # $fileName",
}    


use of undeclared crate or module
```
