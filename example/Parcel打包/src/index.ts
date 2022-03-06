// import $ from 'jquery'

// $(function () {
//   $('body').html('<div>233</div>')
// })

// keyof 语法

interface Person {
  name: string
  age: number
  gender: string
}

class Teacher {
  constructor(private info: Person) {}
  // keyof 对 Person 做遍历
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key]
  }
}

const teacher = new Teacher({ name: 'ko', age: 18, gender: 'm' })

console.log(teacher.getInfo('name'))
