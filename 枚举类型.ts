// console.log(123)

// 有索引值, 默认从0开始, 可以修改索引初始(数字枚举)
enum Status {
  OFFLINE, // OFFLINE = 1
  ONLINE,
  DELETED,
}
// Status.OFFLINE --> 0   Status[0] --> OFFLINE

function getResult(status) {
  if (status === Status.OFFLINE) {
    return 'offline'
  } else if (status === Status.ONLINE) {
    return 'online'
  } else if (status === Status.DELETED) {
    return 'deleted'
  }
  return 'error'
}

// 字符串枚举(自定义枚举)
enum Message {
  success = '成功',
  fail = "失败"
}

// 异构枚举
enum Answer{
  N,
  Y = 'Y'
}

// 常量枚举, 应用于需要一个对象，但不需要对象值的时候
const enum Month {
  Jan,
  Feb,
  Mar
}
