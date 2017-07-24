var arr=[9,2,3,1,4,4,5,6,7];
arr.findMin=findMin;
function findMin(){
    var min=this[0];
    for(var i=1;i<this.length;i++){
        if(this[i]<min){
            min=this[i];
        }
    }
    return min;
}
var b=arr.findMin();
console.log(b);
