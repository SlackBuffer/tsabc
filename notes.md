
```bash 
git commit -b hello
git push origin hello


tsc index.ts && node index.js

tsc -w index.ts
```

变量类型一旦定义就不可修改（用 `var` 定义的也不行）。

元组可以包含多种数据类型，赋值时变量个数、类型、顺序都必须满足条件。元组的编译结果是 JS 数组。

函数默认值的类型可以不写，可以从自动推断得到。

打印返回值是 `void` 的函数的结果是 "undefined"。

成员属性和方法的修饰符：
1. `public`：未指定时的默认值，实例中可以访问。
2. `protected`：只能在类或**子类**的定义中访问，实例中不能访问。
3. `private`：只能在类的定义中访问，实例中不能访问。

https://www.typescriptlang.org/docs/handbook/advanced-types.html  
https://www.typescriptlang.org/docs/handbook/classes.html