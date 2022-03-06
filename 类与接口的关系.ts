interface Human {
  name: string;
  eat(): void
}

// 类继承接口 必须要包含接口中定义的所有属性, 且接口只能约束类的公共成员
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  // private name: string 这里如果把name定义为私有成员 则会报错
  eat() {}
  sleep() {}
}

// 接口的相互继承
interface Man extends Human {
  run(): void
}

interface Child extends Human {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

// 接口继承类，只有类的结构，没有具体实现
class Auto {
  state = 1
}

interface AutoInterface extends Auto {}

class C implements AutoInterface {
  state = 1
}

class Bus extends Auto implements AutoInterface {}
