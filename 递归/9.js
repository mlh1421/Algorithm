function steamroller(arr) {
    var item=[];
    // I'm a steamroller, baby
    function aa(arr){
        for(var i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                aa(arr[i]);
            }else{
                item.push(arr[i]);
            }
        }
    }
    aa(arr);
    return item;
}

//var a=steamroller([1, [2], [3, [[4]]]]);
var a=steamroller([1, {}, [3, [[4]]]]);
console.log(a);
//steamroller([[["a"]], [["b"]]]);
//steamroller([1, [], [3, [[4]]]]);
