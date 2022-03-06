// 类
class Person1 {
  name = 'ko'
  getName() {
    return this.name
  }
}

const person2 = new Person1()

class Teacher extends Person1 {
  name = 'tea'
  getTeacherName() {
    return 'kt'
  }
}

const teacher1 = new Teacher()

console.log(person2.getName())
console.log(teacher1.getName())

class Person3 {
  constructor(private _name: string) {}
  get name() {
    return this._name
  }
  set name(name: string) {
    this._name = name
  }
}

const person3 = new Person3('ko')

console.log(person3.name)


// 类的属性是示例属性，示例的属性必须有初始值，或者必须在constructor初始化
//类的所有属性默认为public
// 私有成员（private）只能在类中调用，不能被实例调用，也不能被子类调用
// 受保护成员（protected）只能在类中或子类中访问，不能在实例访问
// readonly 只读属性，不允许修改
// 静态成员（static）只能通过类和子类访问，不能通过实例访问

class Dog {
  constructor(name: string) {
    this.name = name
  }
  run() {}
  name: string = 'dog'
  static food: string = 'bones'
}

class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name) // 必须包含super 调用， super代表父类示例
    this.color = color // 要在super的后面
  }
  // color: string
}

// 抽象类只能继承，不能实例化
abstract class Animal {
  eat() {
    console.log('eat')
  }
  // 抽象方法
  abstract sleep(): void
}

class Dog1 extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string = 'dog1'
  run() {}
  sleep(): void {
    console.log('dog1 sleep')
  }
}

let dog = new Dog1('wangwang')

// 多态
class Cat extends Animal {
  sleep(): void {
    console.log('cat sleep')
  }
}

let cat = new Cat()

let animals: Animal[] = [dog, cat];
animals.forEach(i => {
  i.sleep()
})

// this
class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}

new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
  next() {
    return this
  }
}

new MyFlow().next().step1().next().step2()


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
