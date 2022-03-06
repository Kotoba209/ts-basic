// 不需要指定变量的类型（函数的返回值类型，typescript 可以根据某些规则自动地为其推断出一个类型）

// 基础类型推断
let a = 1 // 推断为 number 类型

// 函数默认参数
let c = (x = 1) => x + 1 // 推断参数类型和返回类型

// 上下文类型推断, 可以取到事件对象的属性
window.onkeydown = (event) => {
  console.log(event.bubbles);
}

// 类型断言
interface Foo {
  bar: number
}

let fo1: Foo = { } as Foo
