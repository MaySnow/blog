let tree = {
  value: '-',
  left: {
    value: '+',
    left: {
      value: 'a'
    },
    right: {
      value: '*',
      left: {
        value: 'b'
      },
      right: {
        value: '-',
        left: {
          value: 'c'
        },
        right: {
          value: 'd'
        }
      }
    }
  },
  right: {
    value: '/',
    left: {
      value: 'e'
    },
    right: {
      value: 'f'
    }
  }
}

// 先序遍历：访问根节点、遍历左子树、遍历右子树 DLR
// 递归
let preList = []

function preTree (node) {
  if (node) {
    preList.push(node.value)
    if (node.left) {
      preTree(node.left)
    }
    if (node.right) {
      preTree(node.right)
    }
  }
}
preTree(tree)
// console.log(preList)

// 迭代实现
// 每个迭代都取出根的值将左树最后一个压入栈，取的时候从最后一个取，这样就保证了访问根节点、遍历左子数、遍历右子树的先序遍历规则
// 即[根]→取出栈中最后一个树，拿到根值，将子树放入栈→[右子树，左子树]→取出栈中最后一个树左子树，拿到根值，将左字数的子树放入栈→[右子树、左子树的右子树、左子树的左子树] 如此循环
function preIterator (node) {
  let preList = []
  if (node) {
    // 将二叉树压入栈
    let stack = [node]
    while (stack.length) {
      // 取出栈中的最后一个节点
      node = stack.pop()
      preList.push(node.value)
      // 如果存在右树，将右树压入栈
      if (node.right) {
        stack.push(node.right)
      }
      // 如果存在左树，将左树压入栈
      if (node.left) {
        stack.push(node.left)
      }
    }
  }
  return preList
}
// console.log(preIterator(tree))

// 中序遍历：遍历左子树、访问根节点、遍历右左子树
let midList = []
function midTree (node) {
  if (node) {
    if (node.left) {
      midTree(node.left)
    }
    midList.push(node.value)
    if (node.right) {
      midTree(node.right)
    }
  }
}
midTree(tree)
// console.log(midList)

// 迭代实现
// 按照左、根、右的顺序，如果节点上有左子树，然后这个左子树当根继续往下走，直到没有左子树，再回到当前根的根，再把根的右子树作为根，依次循环
function midIterator (node) {
  let midList = []
  if (node) {
    let stack = []
    // 如果栈不为空，或者节点不为空，则循环遍历
    while (stack.length || node) {
      if (node) {
        // 将节点压入栈
        stack.push(node)
        // 将左子树作为当前节点， 如果一直有左子树，则不停的将左子树压入栈
        node = node.left
      } else {
        // 将节点取出
        node = stack.pop()
        midList.push(node.value)
        // 将右子树作为当前根节点
        node = node.right
      }
    }
  }
  return midList
}
// console.log(midIterator(tree))

// 后序遍历：遍历左子树、遍历右左子树、访问根节点
let backList = []
function backTree (node) {
  if (node) {
    if (node.left) {
      backTree(node.left)
    }
    if (node.right) {
      backTree((node.right))
    }
    backList.push(node.value)
  }
}
backTree(tree)
// console.log(backList)

function backIterator(node) {
  let backList = []
  if (node) {
    let stack = [node]
    // 上一次出入栈的节点
    let temp = null
    while (stack.length) {
      // 取得栈里最后一个节点
      temp = stack[stack.length - 1]
      if (temp.left && node !== temp.left && node !== temp.right) {
        // 如果存在左子树
        stack.push(temp.left)
      } else if (temp.right && node !== temp.right) {
        // 如果存在右子树
        stack.push(temp.right)
      } else {
        let curNode = stack.pop()
        backList.push(curNode.value)
        node = temp
      }
    }
  }
  return backList
}
// console.log(backIterator(tree))

// 广度优先遍历
function breadthTree(node) {
  let breadthList = []
  if (node) {
    let que = [node]
    while (que.length) {
      // 取队列中的第一个
      let cur = que.shift()
      breadthList.push(cur.value)
      if (cur.left) {
        que.push(cur.left)
      }
      if (cur.right) {
        que.push(cur.right)
      }
    }
  }
  return breadthList
}
console.log(breadthTree(tree))
// [ '-', '+', '/', 'a', '*', 'e', 'f', 'b', '-', 'c', 'd' ]
