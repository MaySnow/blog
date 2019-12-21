class Singleton {
    show () {
        console.log('我是一个单例对象')
    }
    static getInstance () {
        // 判断是否已经 new 过1个实例
        if (!Singleton.instance) {
            // 如果这个唯一的实例不存在，则去创建它
            Singleton.instance = new Singleton()
        }
        // 如果这个唯一的实例存在，则返回
        return Singleton.instance
    }
    setItem (key, value) {
        return localStorage.setItem(key, value)
    }
    getItem (key) {
        return localStorage.getItem(key)
    }
}

const s1 = Singleton.getInstance()
const s2 = Singleton.getInstance()

s1.setItem('name', 'snow')
console.log(s1.getItem('name'))
console.log(s2.getItem('name'))

console.log(s1 === s2)

// 闭包
function StorageBase () {}
StorageBase.prototype.setItem = function (key, value) {
    return localStorage.setItem(key, value)
}
StorageBase.prototype.getItem = function (key) {
    return localStorage.getItem(key)
}

const Storage = (function() {
    let instance = null
    return function () {
        if (!instance) {
            instance = new StorageBase()
        }
        return instance
    }
})()

const storage1 = new Storage()
const storage2 = new Storage()

storage1.setItem('name', 'may')

console.log(storage1.getItem('name'))
console.log(storage2.getItem('name'))

console.log(storage1 === storage2)

