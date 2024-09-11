function print(callback) {
  console.log(callback)
  const result = callback()
  console.log(result)
}

function fn(number = 3) {
    return number * 2;
  }
print(fn)