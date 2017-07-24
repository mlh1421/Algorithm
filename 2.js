function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr=arr.slice(howMany);
  return arr;
}


var a=slasher([1, 2, 3], 8);
console.log(a);

