// console.log(123)

// 有索引值, 默认从0开始, 可以修改索引初始
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
