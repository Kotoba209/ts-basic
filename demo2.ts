// 类型注解: 需要给变量明确类型 && 类型推断 ts自动推断出变量类型

let count1: number
count1 = 123

let count2 = 123 // 类型推断 TS会自动尝试分析变量类型，如果TS可以分析变量类型，我们就不需要再加什么，否则需要添加类型注解

const string1 = 'string' // 推断

function getTotal(first: number, second: number) {
  return first + second
}

const total = getTotal(1, 3)
