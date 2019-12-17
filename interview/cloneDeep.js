// 深copy
let jack = {
  name : "jack.ma",
  age:40,
  like:{
    dog:{
      color:'black',
      age:3,
    },
    cat:{
      color:'white',
      age:2
    }
  }
}
function cloneDeep(src){
  let dest
  //实现拷贝代码，将src的值完整地拷贝给dest
  //在这里实现
  // return JSON.parse(JSON.stringify(src))

  if (Array.isArray(src)) {
    // 如果是数组
    const { length } = src
    dest = new src.constructor(length)
    if (length && typeof src[0] === 'string' && hasOwnProperty.call(src, 'index')) {
      dest.index = src.index
      dest.input = src.input
    }
  } else {
    //
  }

  return dest
}
let jack2 = cloneDeep(jack)

//比如修改jack2中的内容，不会影响到jack中的值
jack2.like.dog.color = 'green'
console.log(jack.like.dog.color) //打印出来的应该是 "black"
