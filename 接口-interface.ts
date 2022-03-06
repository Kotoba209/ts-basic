// 对象接口

// interface  和type类似 但不完全一致
interface Person {
  name: string
  age?: number // ? 可有可无
  // readonly gender: string // 只读属性
  [propName: string]: any // 可以有任何类型的其他变量(字符串索引签名，这样对象可以支持额外的属性)
  say(): string // 一个返回字符串的方法
}

interface StringArray {
  [index: number]: string, // 数字索引,用于数组
}

let chars: StringArray = ['A', 'B']


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

// 混合类型接口
interface Lib {
  (): void;
  version: string,
  doSomeThing: void
}
// 需要断言
let lib: Lib = (() => {}) as Lib
