// 泛型  generic 泛指的类型

// 函数泛型
// 两个参数类型保持一致的写法
function join<ABC>(first: ABC, second: ABC) {
  return `${first}${second}`
}

join<string>('1', '1')

// 多种泛型的写法
function join1<ABC, CBA>(first: ABC, second: CBA) {
  return `${first}${second}`
}

join1<string, number>('1', 1)
join1('1', 1) // 可以省略 会自行推断 --> 类型推断

// 泛型 返回值
function join2<T>(first: T, second: T): T {
  return first
}

// -------------------------------
// 以下两种写法是等价的
function ary1<ABC>(params: ABC[]) {
  return params
}

function ary2<ABC>(params: Array<ABC>) {
  return params
}

// 接口泛型
interface Log {
  <T>(value: T): T
}

interface Log1<T> {
  (value: T): T
}
// 默认类型
interface Log2<T = string> {
  (value: T): T
}

function log<T>(value: T): T {
  return value
}

let myLog: Log1<number> = log

myLog(1)

// 泛型类与泛型约束
class Log3<T> {
  // 成员不能是静态 static
  run(value: T) {
    return value
  }
}

let log1 = new Log3<number>()
let log2 = new Log3() // 不指定传入类型， 在调用 log2.run()的时候 可以传入任意类型

// 泛型约束,配合类的使用约束泛型必须含有某类型
interface Length {
  length: number
}

function log3<T extends Length>(value: T): T {
  return value
}

log3([])
