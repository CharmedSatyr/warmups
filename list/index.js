var List = require('./2019-07-28')

var list = new List()

list.push('a')
list.push('b')

var last = list.pop()
console.log(last)

list.pop()
console.log(list)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var i = 0; i < arr.length; i++) {
  list.push(arr[i])
}

console.log(list)

function add(a, b) {
  return a + b
}

const reduced = list.reduce(add)

console.log('reduced:', reduced)
