// 泛型  generic 泛指的类型

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
function ary1<ABC>(params: ABC[]) {
  return params
}

function ary2<ABC>(params: Array<ABC>) {
  return params
}

// 以上两种写法是等价的
