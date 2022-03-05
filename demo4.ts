// 数组
// 可以是number 或 string
const ary1: (number | string)[] = [1, 2, 3]
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
