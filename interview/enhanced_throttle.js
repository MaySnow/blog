// 加强版 节流
// 如果用户操作比较频繁，会频繁的清除定时器，没有到规定的时间间隔，就去做另外的操作的，也就是不再调用 debounce 方法，那fn函数就永远不会被触发，
// 如果添加上防抖，也就是wait时间内可以清除定时器，但是wait时间一到一定要给用户一个响应

function throttle(fn, wait = 50) {
  let previous = 0
  let timer = null
  return function (...args) {
    let now = +new Date()
    if ((now - previous) < wait) {
      // 没到规定的时间间隔 清除定时器，重新请求
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(function () {
        fn.apply(this, args)
      }, wait)
    } else {
      // 第一次或者大于时间间隔，则执行
      previous = now
      fn.apply(this, args)
    }
  }
}
