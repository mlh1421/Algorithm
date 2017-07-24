/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var arr=(n+"").split("");
    var temp=0;
    while(arr.length>=1){//arr数组长度为一为终止条件
        for(var i=0;i<arr.length;i++){
            temp+=parseInt(arr[i])*parseInt(arr[i]);
        }
        arr=(temp+"").split("");
        if(arr.length==1){
            if(temp==1||temp==7){
                return true;
            }else{
                return false;
            }
        }
        console.log(arr);
        temp=0;
    }
};
var a=isHappy(1111111);
console.log(a);
