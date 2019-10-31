/**
 * 乘法表
 * a1=2 a2=2 a3=3 a4=1 a5=2
 * 
 * a1    a1*a2 a1*a3 a1*a4 a1*a5
 * a2*a1    a2 a2*a3 a2*a4 a2*a5
 * a3*a1 a3*a2    a3 a3*a4 a3*a5
 * a4*a1 a4*a2 a4*a3    a4 a4*a5
 * a5*a1 a5*a2 a5*a3 a5*a4    a5
 * 
 * 0     4     6      2       4
 * 4     0     6      2       4
 * 6     6     0      3       6
 * 2     2     3      0       2
 * 4     4     6      2       0
 * 
 * 首先确定一个数：𝑎𝑖𝑎𝑗=𝑀𝑖𝑗,𝑎𝑖𝑎𝑘=𝑀𝑖𝑘,𝑎𝑗𝑎𝑘=𝑀𝑗𝑘
 * 经过计算得到 𝑎𝑖=Math.sqrt((𝑀𝑖𝑗∗𝑀i𝑘)/𝑀𝑗𝑘) （开平方）
 * 
 * 一定要找最简单的方法
 * 
 * https://codeforces.com/problemset/problem/1220/B
 */

/* let multiArr = [
   [0, 4, 6, 2, 4],
   [4, 0, 6, 2, 4],
   [6, 6, 0, 3, 6],
   [2, 2, 3, 0, 2],
   [4, 4, 6, 2, 0]
]; */

/* let multiArr = [
    [0, 99990000, 99970002],
    [99990000, 0, 99980000],
    [99970002, 99980000, 0]
]; */

const readline = require('readline');
const process = require('process');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
let lineCount = 0, num, multiArr = [];
rl.on('line', function (line) {
    if (lineCount === 0) {
        num = Number(line.trim());
    } else {
        multiArr.push(line.trim().split(' ').map((item) => parseInt(item)));
    }
    if (lineCount === num) {
        console.log(getTable(multiArr));
        rl.close();
    }
    lineCount++;
});

function getTable(multiArr) {
    let len = multiArr.length;
    let resArr = [];

    function getMain(i) {
        let j, k;
        if (i === 0) {
            j = i + 1, k = i + 2;
        } else if (i === len - 1) {
            j = i - 1, k = i - 2;
        } else {
            j = i - 1; k = i + 1;
        }
        let Mij = multiArr[i][j];
        let Mik = multiArr[i][k];
        let Mjk = multiArr[j][k];
        return Math.sqrt((Mij * Mik) / Mjk)
    }

    for (let i = 0; i < len; i++) {
        resArr.push(getMain(i));
    }
    return resArr.join(' ')
}

