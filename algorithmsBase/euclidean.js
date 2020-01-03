// 欧几里得算法

/**
 * 递归求解欧几里得算法最大公约数
 * @param originalA
 * @param originalB
 * @returns {number}
 */
function euclideanAlgorithm(originalA, originalB) {
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);
  return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}

/**
 *
 * @param originalA
 * @param originalB
 * @returns {number}
 */
function euclideanAlgorithmIterative(originalA, originalB) {
  let a = Math.abs(originalA);
  let b = Math.abs(originalB);


  while (a && b && a !== b) {
    a > b ? (a = a -b) : (b = b - a);
  }
  return a || b;
}
console.log(euclideanAlgorithmIterative(1071, 462))
console.log(euclideanAlgorithm(1071, 462))
