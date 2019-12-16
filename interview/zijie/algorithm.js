// 二叉树
let tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3
    },
    right: {
      value: 4
    }
  },
  right: {
    value: 5,
    left: {
      value: 6
    },
    right: {
      value: 7
    }
  }
}
/*// 用来存储所有根节点和子节点的和
let resArr = []
function getAdd (node) {
  if (!node) {
    return
  }
  let rootVal = node.value
  if (node.left) {
    // 储存根节点和左子节点的和
    resArr.push(rootVal + node.left.value)
    // 左节点作为根节点递归
    getAdd(node.left)
  }
  if (node.right) {
    // 存储根节点和右子节点的和
    resArr.push(rootVal + node.right.value)
    // 右节点作为根节点递归
    getAdd(node.right)
  }
}*/

// 用来存储所有根节点和子节点的和
function getAdd (node) {
  if (!node) return
  let resArr = []
  // 将要执行的节点放到队列中
  let stackArr = [node]
  while (stackArr.length) {
    // 获取队列中的第一个节点
    let cur = stackArr.pop()
    if (cur.left) {
      resArr.push(cur.value + cur.left.value)
      // 如果存在左节点，则将其放入队列中
      stackArr.push(cur.left)
    }
    if (cur.right) {
      resArr.push(cur.value + cur.right.value)
      // 如果存在右节点，则将其放入队列中
      stackArr.push(cur.right)
    }
  }
  return resArr
}
console.log(getAdd(tree).reduce((total, cur)=> total + cur))

