function largestOfFour(arr) {
  // You can do this!
  var items=[];
  for(var j=0;j<arr.length;j++){
    arr[j].findMax=findMax;
    items.push(arr[j].findMax());
  }
  return items;
}
function findMax(){
  var max=this[0];
  for(var i=1;i<this.length;i++){
    if(this[i]>max){
      max=this[i];
    }
  }
  return max;
}
var a=largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(a);
