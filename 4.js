function destroyer(arr) {
    // Remove all the values
    var items=[];
    for(var i=1;i<arguments.length;i++){
        for(var j=0;j<arr.length;j++){
            if(arguments[i]==arr[j]){
                arr.splice(j,1);
            }
        }
    }
  return arr;
}

var b=destroyer([1, 2, 3, 1, 2, 3], 2, 3);
var c=destroyer([3, 5, 1, 2, 2], 2, 3, 5)
console.log(b);
console.log(c);
