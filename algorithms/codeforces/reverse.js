
// 节点构造函数
function Node (val){
  this.val = val
  this.next = null
}

/**
 * 数组转化为链表
 * @param arr
 * @returns {Node}
 */
function arrToList (arr) {
  if (!arr.length) {
    return null
  }
  let head = new Node(arr[0])
  // 存放当前节点
  let node
  // 用来存放上一个节点
  let prev = head
  for ( let i = 1; i < arr.length; i++) {
    node = new Node(arr[i])
    // 将前一个节点的 next 指向当前节点
    // 此时 head 的 next 也指向当前节点
    prev.next = node
    prev = node
  }
  return head
}

/**
 * 链表转化为数组
 * @param head
 * @returns {Array}
 */
function listToArr (head) {
  if (!head) {
    return []
  }
  let result = []
  while (head) {
    result.push(head.val)
    // 删除当前节点，挪向下一个节点
    head = head.next
  }
  return result
 }

/**
 * 反转链表
 * @param head
 * @returns {*}
 */
function reverseList (head) {
  // 反转后的链表
  let pre = null
  while (head) {
    let next = head.next
    head.next = pre
    pre = head
    head = next
  }
  return pre
}

/**
 * 递归反转链表
 * @param head
 * @returns {*}
 */
function recursive (head) {
  if (head === null || head.next === null) {
    return head
  }
  let newHead = recursive(head.next)
  head.next.next = head
  head.next = null
  return newHead
}

let arr = [1, 2, 3, 4, 5]
let node = arrToList(arr)
// let reverse = reverseList(node)
console.log(recursive(node))
// console.log(reverse)
// console.log(listToArr(reverse))
