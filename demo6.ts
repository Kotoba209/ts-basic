// 类
// class Person1 {
//   name = 'ko'
//   getName() {
//     return this.name
//   }
// }

// const person2 = new Person1()

// class Teacher extends Person1 {
//   name = 'tea'
//   getTeacherName() {
//     return 'kt'
//   }
// }

// const teacher1 = new Teacher()

// console.log(person2.getName())
// console.log(teacher1.getName())

// class Person3 {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name
//   }
//   set name(name: string) {
//     this._name = name
//   }
// }

// const person3 = new Person3('ko')

// console.log(person3.name)

// 单例模式
class Demo {
  private static instance: Demo
  private constructor(public name: string) {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo('ko123')
    }
    return this.instance
  }
}

const demo1 = Demo.getInstance()
console.log(demo1.name)
