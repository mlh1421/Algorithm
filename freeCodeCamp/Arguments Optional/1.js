function add(){
    if(arguments.length==2){
        if(typeof arguments[0]==="number"&&typeof arguments[1]==="number"){
            return arguments[0]+arguments[1];
        }else{
            return undefined;
        }
    }else if(arguments.length==1){
        if(typeof arguments[0]!=="number"){
        return undefined;
        }
        var that=arguments[0];
        return function(num){
            if(typeof num!="number"){
                return undefined;
            }else{
                return that+num;
            }
        }
    }
}
var a=add(1,"2");
console.log(a);
