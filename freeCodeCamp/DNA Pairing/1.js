function pair(str) {
  // return str;
  var item = [], child = [];
  var arr = str.split("");
  for (var i = 0; i < arr.length; i++) {

    if (arr[i] === "A") {
      child.push(arr[i], "T");
    } else if (arr[i] === "T") {
      child.push(arr[i], "A");
    } else if (arr[i] === "G") {
      child.push(arr[i], "C");
    } else {
      child.push(arr[i], "G");
    }
  }
  for (var j = 0; j < child.length / 2; j++) {
    item.push(child.slice(2 * j, 2 * j + 2));
  }
  return item;
}
var a=pair("GCG");
console.log(a);