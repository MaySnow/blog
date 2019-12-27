
/**
 *      1
 *     / \
 *    2   3
 *  /  \
 * 4   5
 * 1 2 3 4 5
 */
let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        },
        right: {
            value: 5
        }
    },
    right: {
        value: 3
    }
}

function search(node) {
    let list = []
    if (node) {
        let temp = [node]
        while(temp.length) {
            let cur = temp.shift()
            list.push(cur.value)
            if (cur.left) {
                temp.push(cur.left)
            }
            if (cur.right) {
                temp.push(cur.right)
            }
        }
    }
    return list
}

console.log(search(tree))