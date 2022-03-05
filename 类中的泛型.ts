// 泛型可以解决 多的联合类型的写法

interface Item {
  name: string
}

// <T extends Item> 该泛型  也就是接收到的参数必须有 Item 里面的东西
class DataManager<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name
  }
}

// const data = new DataManager<string>(['1'])

const data = new DataManager([{ name: 'ko' }])

// class Anther<T> {
//   constructor(private data: T) {}
// }

const func: <T>(str: T) => T = <T>(str: T) => {
  return str
}

// 上面函数的拆分写法
function test<T>(str: T) {
  return str
}

const func1: <T>(str: T) => T = test
