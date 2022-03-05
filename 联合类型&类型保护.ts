// 联合类型 通过 | 让变量可以是多种类型 --> 容易提示错误 需要类型保护来一起实现

interface Bird {
  fly: boolean
  sing: () => {}
}

interface Dog {
  fly: boolean
  bark: () => {}
}

// 类型联合只能显式写共有的属性或方法，单独的要加条件判断(通过断言 -> 类型保护)
function trainAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    ;(animal as Bird).sing()
  } else {
    ;(animal as Dog).bark()
  }
  // 另一种写法 in 语法
  // if ('sing' in animal) {
  //   animal.sing()
  // }
}

// typeof 做类型保护
function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`
  }
  return first + second
}

class NumberObj {
  count: number
}

// instanceOf
function addSecond(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0
}
