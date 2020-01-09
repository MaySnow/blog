
function request(url, successCallback) {
    console.log(11111)
    setTimeout(()=> {
        successCallback(url)
    }, 1000)
}

function requestPriomise(url) {
    return new Promise((resolve, reject) => {
        request(url, (data)=> {
            resolve(data)
        }, (err)=> {
            reject(err)
        })
    })
}

let cache = {}
function cacheRequest(url, successCallback) {
    if (!cache[url]) {
        cache[url] = requestPriomise(url)
    }
    cache[url].then((data)=> {
        successCallback(data)
    })
}

cacheRequest('/user', data => {
    console.log('我是从 A 中请求的 user，数据为' + data)
})

cacheRequest('/user', data => {
    console.log('我是从 B 中请求的 user，数据为' + data)
})