// 原始类型
const bool: boolean = true

console.log('bool', bool)

// 数组
let arr1: number [] = []
let arr2: Array<number | string> = []

// 元组

let tuple: [number, string] = [0, '1']

// 元组可以使用数组的方法，但是不能访问tuple[2],称为元组越界
tuple.push(2)


// 函数
let add1 = (x: number, y: number) => x + y
let computed: (x: number, y: number) => number
computed = (a, b) => a + b

// 对象
let obj: {x: number, y: number} = {x: 0, y: 1}

// symbol
 let s1: symbol = Symbol()

 // 类型注解: 需要给变量明确类型 && 类型推断 ts自动推断出变量类型

let count1: number
count1 = 123

let count2 = 123 // 类型推断 TS会自动尝试分析变量类型，如果TS可以分析变量类型，我们就不需要再加什么，否则需要添加类型注解

const string1 = 'string' // 推断

function getTotal(first: number, second: number) {
  return first + second
}

const total = getTotal(1, 3)

// 数组
// 可以是number 或 string
const ary10: (number | string)[] = [1, 2, 3]
const strAry: string[] = ['1']

class Tea {
  name: string
  age: number
}

// type alias 类型别名
type User = { name: string; age: number }
const onjAry: User[] = [{ name: '123', age: 123 }]

// 元组 tuple
const teacher: [string, string, number] = ['ko', 'male', 20]

const teacherList: [string, string, number][] = [
  ['name', 'gender', 20],
  ['name', 'gender', 20],
]
