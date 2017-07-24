
    var item=[];
function steamroller(arr) {
  // I'm a steamroller, baby
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
        steamroller(arr[i]);
        }else{
            item.push(arr[i]);
        }
    }
  return item;
}

var a=steamroller([1, [2], [3, [[4]]]]);
console.log(a);
