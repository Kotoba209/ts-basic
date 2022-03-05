/*
 * @Author: kotoba
 * @Date: 2021-01-17 17:21:36
 * @LastEditTime: 2021-01-17 17:23:23
 */

// function fn(): void {
//   let web: string = 'hello world'
//   console.log(web)
// }
// fn()

interface Point {
  x: number
  y: number
}

const point: Point = {
  x: 1,
  y: 2,
}

const count: number = 2021

const person: {
  name: string
  age: number
} = {
  name: '111',
  age: 11,
}

const ary: number[] = [12, 2]

class Person {}
const ko: Person = new Person()

const getNumber: () => number = () => 123
