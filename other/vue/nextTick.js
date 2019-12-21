let callbacks = []
let padding = false

function nextTick (cb) {
    callbacks.push(cb)
    // 将 flushCallbacks 放到宏队列中，通过 padding 来控制只能添加一次 setTimeout 到宏队列
    // 保证主线程的同步任务全部执行，也就是 nextTick 全部执行再执行宏队列中的 flushCallbacks
    if (!padding) {
        padding = true
        // 通过 setTimeout 将 flushCallbacks 添加到了宏队列中
        // 无论调用多少次 nextTick 都要先将主线程中同步任务和微任务完成后才能执行 宏队列中的宏任务，即才能执行 flushCallback
        setTimeout(flushCallbacks, 0)
    }
}

function flushCallbacks () {
    padding = false
    const copies = callbacks.splice(0)
    callbacks.length = 0
    for (let i = 0; i < copies.length; i++) {
        copies[i]()
    }
}

nextTick( () => {
    for (let i = 0; i < 10000; i++) {
    }
})

nextTick( () => {
    for (let i = 0; i < 10000; i++) {
    }
})

