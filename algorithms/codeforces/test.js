
const fs = require('fs');
const path = require('path')
let arr = []
let len = 199999

for (let i = 0; i< len; i++) {
  arr.push(parseInt(Math.random()*197390771))
}
const content = `${len} ${197390771}
${arr.join(' ')}
`;

fs.writeFile(path.join(__dirname,'./dev/test2'), content, 'utf8', function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});
