function destroyer(arr) {
    for(let i=1;i<arguments.length;i++){
        var that=arguments;
        arr.filter(function(item){
            if(that[i]==item){
                arr.splice(i,1)
            }
        })
    }
    return arr;
}

var b=destroyer([1, 2, 3, 1, 2, 3], 2, 3);
var c=destroyer([3, 5, 1, 2, 2], 2, 3, 5)
console.log(b);
console.log(c);
