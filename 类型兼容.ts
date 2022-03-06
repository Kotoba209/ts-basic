// null 是所有类型的子类型
let s: string = '1'
s = null

// 接口兼容(成员少的兼容成员多的)

interface X {
  a: any
}

interface Y {
  a: any;
  b: any
}

let x: X = { a: 1 }
let y: Y = { a: 1, b: 2 }

x = y

// 函数兼容(1.函数参数多的兼容参数少的，2.函数参数类型也要匹配，3.返回参数类型)
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
  return handler
}

let handler1 = (a: number) => {}
hof(handler1)

// 枚举类型兼容(枚举之间不相互兼容)
enum Fruit { Apple, Banana }
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
