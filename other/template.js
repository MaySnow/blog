// 解析模板
// 主要用不包含
function parse(str, data) {
    let reg = /\{%([^%\}]+)%\}/g
    let newStr = str.replace(reg, function(match, $1) {
        let res = getDeepAttr(data, $1)
        return res ? res : match
    })
    return newStr
}

function getDeepAttr(data, attrs) {
    if (attrs.indexOf('.') === -1) {
        return data[attrs]
    }
    try {
        let arr = attrs.split('.')
        return arr.reduce((res, cur) => {
            return res[cur]
        }, data)
    } catch {
        return null
    }
}

let res = parse(`<div class="{%className%}">{%user.name%}</div>`, {
    className: 'red',
    user: {
       name: 'snow' 
    }
})
console.log(res)