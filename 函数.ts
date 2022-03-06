// 函数定义方式
function foo(x: number, y: number) { return x + y }

let foo1: (x: number, y: number) => number

type foo2 = (x: number, y: number) => number

interface foo3 {
  (x: number, y: number): number
}



// ? 可选参数, 且必须位于最后面. = 给参数一个默认值
function add5(first: number, second = 2, three?: number): number {
  return first + second
}

const total1 = add5(1, 3)

function add2({ first, second }: { first: number; second: number }): number {
  return first + second
}

const total2 = add2({ first: 1, second: 2 })

// 剩余参数
function add4(x: number, ...reset: number[]) {
  return x + reset.reduce((pre, cur) => pre + cur)
}

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

function getNumber1({ first }: { first: number }): void {}
