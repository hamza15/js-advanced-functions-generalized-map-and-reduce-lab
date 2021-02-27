// Add your functions here
function map(arr, fn) {
    return arr.map(element => fn(element))
}

function reduce(arr, cb, start=0) {
    let r = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1
  
    for (; i < arr.length; i++) {
      r = cb(arr[i], r)
    }
  
    return r;
}