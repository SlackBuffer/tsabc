
```bash 
git commit -b hello
git push origin hello


tsc -w index.ts
tsc cheatsheet.ts && node cheatsheet.js && rm cheatsheet.js
nodemon --exec ts-node cheatsheet.ts
```

变量类型一旦定义就不可修改（用 `var` 定义的也不行）。

元组可以包含多种数据类型，赋值时变量个数、类型、顺序都必须满足条件。元组的编译结果是 JS 数组。

函数默认值的类型可以不写，可以从自动推断得到。

打印返回值是 `void` 的函数的结果是 "undefined"。

成员属性和方法的修饰符：
1. `public`：未指定时的默认值，实例中可以访问。
2. `protected`：成员的属性、方法只能在**类或子类**的定义中访问，实例中不能访问。`protected` 修饰的构造函数在实例中不能访问，子类中可以用 `super` 访问，用于不希望被 `new` 实例化，允许子类 `extends` 后在子类的定义内部调用的情况。
3. `private`：只能在类的定义中访问，实例中不能访问。`private` 修饰的构造函数在实例中不能访问，这样的类不能被 `extends` 继承。
4. `static`：属于类的静态属性。不能用 `this`。
    - `protected static` 不能通过类名调用。
5. `readonly`

`super()` 调用父类的构造函数。

只能继承一个类。

枚举类型默认值是从 0 开始的数字，可以指定不同的初始值。可读性高。

*duck typing*

接口需要保证有相同的函数名，但函数签名不需要一致。

可以定义多个同名接口，最终接口是同名接口的合集。

类型别名（type alias）

`implements`

声明实现某个接口的类的变量时，可以直接将其声明为该接口类型。

接口类型中可以用 `?:` 定义可选属性。

`as` 类型断言；`[propName: string]: any`  
(29)

接口属性可以声明为 `readonly`，`ReadonlyArray<T>`。

类型断言在编译时发挥作用，告诉编译器把变量当成某种类型处理（并没有进行类型转换），实际变量类型不变。强制类型转换在运行时发挥作用，会改变变量类型。






















https://www.typescriptlang.org/docs/handbook/advanced-types.html    
https://www.typescriptlang.org/docs/handbook/classes.html  
https://www.typescriptlang.org/docs/handbook/interfaces.html