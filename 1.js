var arr=[1,2,3,4,5,6,7,8];
function aa(arr,num){
    var items=[]
        for(var i=0;i<parseInt(arr.length/num);i++){
            items.push(arr.slice(num*i,num*(i+1)));
        }
    if(arr.length%num!=0){
        items.push(arr.slice(arr.length-arr.length%num));
    }
        return items;
}
var b=aa(arr,6);
console.log(b);

