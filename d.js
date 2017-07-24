var reverse = function(x) {
    if(x>0){
       return (x+"").split("").reverse().join("");
    }else if(x<0){
        x.split("").shift();
        return "-"+x.reverse().join("");
    }else{
        return 0;
    }
};
console.log(reverse(1002));
