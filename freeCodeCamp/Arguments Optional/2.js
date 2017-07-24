function add(){
    if(typeof arguments[0]!="number"||typeof arguments[1]!=="number"){
        return undefined;
    }
    if(arguments.length==1){
        var that=arguments[0];
        return function(num){
            return that+num;
        }
    }else if(arguments.length==2){
        return arguments[0]+arguments[1];
    }
}
var a=add("11");
console.log(a);
