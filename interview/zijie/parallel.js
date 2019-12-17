// 最多并行执行两个

class parallel {
  add (fn) {

  }
}

let par = new parallel()

let step = (time, order) => {
  par.add(() => setTimeout(() => time), time).then(() => console.log(order))
}
step(1000, 1)
step(1000, 2)
step(1000, 3)
step(1000, 4)
step(1000, 5)

