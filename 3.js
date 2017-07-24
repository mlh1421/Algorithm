function bouncer(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==false){
            arr.splice(i,1);
        }
    }
    return arr;
}
var b=bouncer([7, "ate", "", false, 9]);
console.log(b);

