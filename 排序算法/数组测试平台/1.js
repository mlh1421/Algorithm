function swap(arr,index1,index2){
    var temp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
}
function qSort(a){
    for(var j=a.length;j>0;j--){
        for(var i=0;i<j;i++){
            if(a[i]>a[i+1]){
                swap(a,i,i+1);
            }
        }
    }
    return a;
}
var arr=[1,213,24,3,4,3,54,5,4,6,7,68,67,97809809,8,978,989,89,0,4,523,543,5,45,435,34,543,5454];
console.time("time");
console.log(qSort(arr));
console.timeEnd("time");
