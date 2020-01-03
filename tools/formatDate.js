/**
 * 时间格式化
 * @param {*} times 
 * @param {*} format 
 */
function formatDate(times, format="yyyy-MM-dd hh:mm:ss") {
    const newDate = new Date(times)
    const month = newDate.getMonth() + 1
    const day = newDate.getDate()
    const hour = newDate.getHours()
    const minute = newDate.getMinutes()
    const second = newDate.getSeconds()
    const millisecond = newDate.getMilliseconds()
    const dict = {
        "yyyy": newDate.getFullYear(),
        "M": month,
        "d": day,
        "h": hour,
        "m": minute,
        "s": second,
        "MM": podStart(month, 2),
        "dd": podStart(day, 2),
        "hh": podStart(hour, 2),
        "mm": podStart(minute, 2),
        "ss": podStart(second, 2),
        "SSS": podStart(millisecond, 2)
    }
    return format.replace(/(yyyy|MM?|dd?|hh?|mm?|ss?|SSS?)/g, function() {
        return dict[arguments[0]]
    })
}

function podStart(num, digit) {
    // 可以用 es6 的 podStart
    return (num + Math.pow(10, digit)).toString().substring(1)
}

console.log(formatDate(1578018704888, 'yyyy年MM月dd日 hh时mm分ss秒SSS毫秒'))