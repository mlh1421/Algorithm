function is(num){
    if(num==1){
        return false;
    }else if(num==2){
        return true;
    }else{
        for(var i=2;i<num;i++){
            if(num%i===0){
                return false;
            }
        }
        return true;
    }
}
//sumPrimes(10);
var a=is(9);
console.log(a);
