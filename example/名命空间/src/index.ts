// console.log(123)
// 注释
/// <reference path='./components.ts' />

namespace Home {
  export class Page {
    user: Component.User = {
      name: 'ko',
    }
    constructor() {
      new Component.Header()
      new Component.Content()
      new Component.Footer()
    }
  }
}
