// 发布-订阅者模式
// 观察者模式：发布者直接触及到订阅者   减少了模块间的耦合但是并没有完全解耦
// 发布-订阅者模式：发布者不直接触及到订阅者，而是统一由第三方平台完成实际通信  发布者和订阅者通过第三方平台时间完全解耦
// https://github.com/facebook/emitter

class EventEmitter {
    constructor() {
        // handlers 是一个 map, 用于存储事件与回调之间的对应关系
        this.handlers = []
    }
    // 方法监听
    on(eventName, cb) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = []
        }
        this.handlers[eventName].push(cb)
    }
    // 触发事件
    emit(eventName, ...args) {
        if (this.handlers[eventName]) {
            this.handlers[eventName].forEach(callback => {
                callback(...args)
            });
        }
    }
    // 解除事件
    off(eventName, cb) {
        let callbacks = this.handlers[eventName]
        const index = callbacks.indexOf(cb)
        if (index !== -1) {
            callbacks.splice(index, 1)
        }
    }
    //
    once(eventName, cb) {
        // 对函数进行包装，使其执行完毕后自动解除
        const wrapper = (...args) => {
            cb.apply(null, ...args)
            this.off(eventName, cb)
        }
        this.on(eventName, wrapper)
    }
}

let emitter = new EventEmitter()

/* emitter.on('start', function() {
    console.log(`我是 start，我执行了---`)
})

emitter.emit('start')
emitter.emit('start') */

function off() {
    console.log(`我是 once， 我就执行一次`)
}

emitter.on('end',off)

emitter.emit('end')
emitter.off('end', off)
emitter.emit('end')