function ss(n){
    var temp=n;
    if(temp==1){
        return true;
    }
    while(temp>1){
        temp=temp/2;
        if(temp==1){
            return true;
        }
    }
    return false;
}
var a=ss(64);
console.log(a);
