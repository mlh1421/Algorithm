var judgeSquareSum = function(c) {
    for(var i=1;i<c-1;i++){
        for(var j=i+1;j<c;j++){
            if(i*i+j*j==c){
                return true;
            }
        }
    }
    return false;
    
};
var a=judgeSquareSum(3);
console.log(a);
