// 防抖
// 某个函数在某段时间内，无论触发了多少回，都执行最后一次。
// 假如我们设置了3秒的函数，在这3秒内，如果有函数调用就重新计时3秒，直到新的3秒内没有函数调用请求，此时执行函数，不然就以此类推重新计时

function debounce(fn, wait = 50, immediate) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    // 第一次触发时执行，timer为null说明为第一次触发
    if (immediate && !timer) {
      fn.apply(this, args)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

const betterFn =debounce(() => console.log(`fn 防抖触发了`), 1000, true)

// 第一次触发 scroll 时执行一次，后续只有在停止滑动 1 秒后 才执行函数fn
document.addEventListener('scroll', betterFn)

