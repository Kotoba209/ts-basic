// 导出子的名命空间
export namespace SubComponent {
  export class Test {}
}
// 导出接口
export interface User {
  name: string
}
export class Header {
  constructor() {
    const ele = document.createElement('div')
    ele.innerText = 'Header'
    document.body.appendChild(ele)
  }
}

export class Content {
  constructor() {
    const ele = document.createElement('div')
    ele.innerText = 'Content'
    document.body.appendChild(ele)
  }
}

export class Footer {
  constructor() {
    const ele = document.createElement('div')
    ele.innerText = 'Footer'
    document.body.appendChild(ele)
  }
}
