interface DogInterface {
  run(): void
}

interface CatInterface {
  jump(): void
}

// 具备两个接口的方法
let pet: DogInterface & CatInterface = {
  run: () => {},
  jump: () => {}
}

let obj = {
  a: 1,
  b: 2,
  c: 3
}

// 索引类型

function getValues(obj: any, keys: string[]) {
  return keys.map(key => obj[key])
}

console.log(getValues(obj, ['z', 'x'])); // 不会报错

// keyof T
interface Obj {
  a: number;
  b: string;
}

let key: keyof Obj

// 索引访问操作符 T[K]
let value: Obj['a']

// T extends U

function getValues1<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}

console.log(getValues1(obj, ['a', 'b']));
// console.log(getValues1(obj, ['a', 'd'])); // 传入不属于该对象的属性就会报错


// 映射类型

interface Obj1 {
  a: number;
  b: string;
  c: boolean;
}
// 把对象属性全变为只读属性
type ReadonlyObj =Readonly<Obj1>

// 可选属性 Partial
// 抽取部分属性 Pick， Pick<Obj1, 'a' | 'b'>


// 条件类型

// T extends U ? X : Y

type TepyName<T> = T extends string ? 'string' : 'number'
