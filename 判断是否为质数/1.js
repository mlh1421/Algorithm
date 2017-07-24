function is(num){
    if(num==2){
        return true;
    }else if(num==1){
        return false;
    }else{
        for(var i=2;i<num;i++){
            if(num%i==0){
                return false;
            }
        }
        return true;
    }
}
var item=[],j=0;
var date1=new Date();
for(var i=0;i<100000;i++){
    if(is(i)){
        j++;
        console.log("质数:"+i+";这是第"+j+"个质数");
    }
}
var date2=new Date();
console.log(date2-date1);
