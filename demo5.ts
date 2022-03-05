// interface  和type类似 但不完全一致
interface Person {
  name: string
  age?: number // ? 可有可无
  // readonly gender: string // 只读属性
  [propName: string]: any // 可以有任何类型的其他变量
  say(): string // 一个返回字符串的方法
}

// 接口继承
interface Teacher extends Person {
  teach(): string
}

// 函数接口
interface SayHi {
  (word: string): string // 参数和返回值都是string
}

// 函数接口使用
const say2: SayHi = (word: string) => {
  return word
}

const getPerson = (person: Person): void => {
  console.log(person)
}

// 类应用接口 必须具备接口所需的属性
class user implements Person {
  name = 'kot'
  say() {
    return 'hello'
  }
}
