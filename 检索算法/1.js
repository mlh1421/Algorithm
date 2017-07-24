function titleCase(str) {
  var items=str.toLowerCase().split(" ");
  for(var i=0;i<items.length;i++){
    var arr=items[i].split("");
    var arr1=arr.shift();
    arr1=arr1.toUpperCase()
    arr.unshift(arr1);
    items[i]=arr.join("");
  }
  str=items.join(" ");
  return str;
}

console.log(titleCase("I'm a little tea pot"));
