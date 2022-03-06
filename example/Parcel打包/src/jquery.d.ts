// 定义全局变量
// declare var $: (param: () => void) => void

// 全局函数
// declare function $(params: () => void): void

// interface JqueryInstance {
//   html: (html: string) => {}
// }

// // 函数重载 --> 允许同一函数名多次定义,多种形式
// declare function $(params: () => void): void

// declare function $(selector: string): JqueryInstance
// // 定义对象类型，类型定义，名命空间嵌套
// declare namespace $ {
//   namespace fn {
//     class init {}
//   }
// }

// 函数重载二
// interface JQuery {
//   (readyFunc: () => void): void
//   (selector: string): JqueryInstance
// }

// declare var $: JQuery

// es6 描述写法
declare module 'jquery' {
  interface JqueryInstance {
    html: (html: string) => {}
  }

  // 函数重载 --> 允许同一函数名多次定义,多种形式
  declare function $(params: () => void): void

  declare function $(selector: string): JqueryInstance

  // 混合类型
  declare namespace $ {
    namespace fn {
      class init {}
    }
  }

  export = $
}
