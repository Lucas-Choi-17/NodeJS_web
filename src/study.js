// @ts-check

var numCounters = 0

function getCounter() {
  numCounters += 1

  var result = { count: count, total: 0 }
  function count() {
    result.total += 1
  }
  return result
}

var counterA = getCounter() // num:1
counterA.count() // A:1
counterA.count() // A:2

var counterB = getCounter() // num:2
counterB.count() // B:1

console.log(counterA.total, counterB.total, numCounters) // 2, 1, 2
