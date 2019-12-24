
const fs = require('fs');
const path = require('path')
let arr = []
let n = 50;
let m = 50;

for( let j = 0; j < n; j++) {
  let strArr = []
  for (let i = 0; i< m; i++) {
    strArr.push(0)
  }
  arr.push(strArr)
}


const content = `${arr}
`;

fs.writeFile(path.join(__dirname,'./dev/square-filling'), content, 'utf8', function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});
