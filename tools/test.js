const tree = {
    "00021": {
        "name": "工具架构组",
        "key": "00021",
        "children": {
            "00061": {
                "name": "天书",
                "key": "00061",
                "children": {
                    "com.aaa": {
                        "key": "com.aaa",
                        "name": "自动化测试结果收集"
                    },
                    "com.bbb": {
                        "key": "com.bbb",
                        "name": "collect测试"
                    },
                    "com.ccc": {
                        "key": "com.ccc",
                        "name": "天书分析"
                    }
                }
            },
            "00063": {
                "name": "美杜莎",
                "key": "00063",
                "children": {
                    "com.AAA": {
                        "key": "com.AAA",
                        "name": "客户端覆盖率统计"
                    },
                    "com.BBB": {
                        "key": "com.BBB",
                        "name": "精准引擎"
                    }
                }
            }
        }
    },
    "a.qianbao": {
        "name": "付款&保险",
        "key": "a.qianbao",
        "children": {
            "a.new.insurance": {
                "name": "保险",
                "key": "a.new.insurance",
                "children": {
                    "com.a.accessplatform": {
                        "key": "com.a.accessplatform",
                        "name": "统一接入"
                    },
                    "com.b.claim": {
                        "key": "com.b.claim",
                        "name": "理赔-claim"
                    }
                }
            }
        }
    }
}

function getCom(node, parent = {}) {
    let resArr = []
    Object.keys(node).forEach(key => {
        const cur = node[key]
        if (cur.children) {
            resArr = [
                ...resArr,
                ...getCom(cur.children, cur)
            ]
        } else {
            resArr.push({
                ...cur,
                parentKey: parent.key || '',
                parentName: parent.name || ''
            
            })
        }
    })
    return resArr
}

console.log(getCom(tree))
