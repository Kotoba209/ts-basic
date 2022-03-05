// 函数
function add(first: number, second: number): number {
  return first + second
}

const total1 = add(1, 3)

// 该函数没有返回值
function sayHello(): void {
  console.log('hello')
}

sayHello()

// 这个函数不会执行到最后
function errorEmitter(): never {
  // throw new Error()
  // console.log(234)
  while (true) {}
}

function add1({ first, second }: { first: number; second: number }): number {
  return first + second
}

const total2 = add1({ first: 1, second: 2 })

function getNumber1({ first }: { first: number }): void {}
