
// JSON.stringigy  JSON.parse 在严格的JSON格式下是可以的
// 深拷贝的核心思想是递归
function deepClone (obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    let copy = {}

    if (obj.constructor === Array) {
        copy = []
    }
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key])
        }
    }
    return copy
 }

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

  console.log(deepClone(jack))