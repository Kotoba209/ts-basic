// 不是js 中的typeof， 这是在编译时解析，不会参与到运行的代码
// <typeof T> 配合 Parameters(utility type 中之一) 使用

// 编译详解: utility type的用法: 用泛型给它传入一个其他类型,然后utility type 对这个类型进行某种操作
// Parameters<typeof T>

type Person = {
  name: string
  age: number
}

// const xiaoMing: Person = { name: '小明' } // ==> 不加age会报错

// Partial 允许属性为空
// const xiaoGang: Partial<Person> = { name: '小刚' } // ==> 结合utility type的使用 不会报错

// Omit 允许某个属性为空 第一个参数为类型, 第二个为允许为空的属性, 允许多个属性为空就结合联合类型的使用
// const shenMiRen: Omit<Person, 'name'> = { age: 18 }

// 允许多个属性为空
// const shenMiRen: Omit<Person, 'name' | 'age'> = {}
