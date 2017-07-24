var arr=[1,2,2,2,23,444,1,1,1,1,1];
arr.sort(function(a,b){return a-b});
console.log(arr);
var gsgs=[];
function ss(arr){
    for(var i=0;i<arr.length-1;i=i+2){
        if(arr[i]!=arr[i+1]){
            gsgs.push(arr[i],arr[i+1]);
        }
    }
    return gsgs;
}
console.log(ss(arr));
