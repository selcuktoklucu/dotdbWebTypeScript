const compressArray = function(original) {
  let compressed = []
  // make a copy of the input array
  let copy = original.slice(0)
  // first loop goes over every element
  for (let i = 0; i < original.length; i++) {
    let myCount = 0
    // loop over every element in the copy and see if it's the same
    let w = i + 1
    while (original(w) === original(i)) {
      if (original[i] == copy[w]) {
        // increase amount of times duplicate is found
        myCount++
        // sets item to undefined
        delete copy[w]
      }
      w++
      i = w
    }
    if (myCount > 0) {
      let a = new Object()
      a.value = original[i]
      a.count = myCount
      compressed.push(a)
    }
  }
  console.log(firstNames)
  return compressed
}
console.log(firstNames)
compressArray(firstNames)
