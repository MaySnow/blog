// 删除字符串中重复的部分
// '1,2,3,1,2,1,5,3,17,3'
function deleteStr(str) {
    let arr = str.split(',')
    let repeatArr = arr.filter((item) => {
        return arr.indexOf(item) !== arr.lastIndexOf(item)
    })
    let resArr = []
    arr.forEach(item => {
        if (repeatArr.indexOf(item) === -1) {
            resArr.push(item)
        }
    });
    return resArr.join(',')
}

console.log(deleteStr('1,2,3,1,2,1,5,3,17,3'))