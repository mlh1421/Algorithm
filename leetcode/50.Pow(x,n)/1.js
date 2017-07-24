function pow(x,n){
    //2,2
    if(n==1){
        return x;
    }else{
        return x*pow(x,n-1);
    }
}
var a=pow(+22,-2222);
console.log(a);
