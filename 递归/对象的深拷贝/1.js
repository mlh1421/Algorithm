var a={
    b:{a:10}
}
function deepCopy(obj){
    if(typeof obj!="object"){
        return obj;
    }
    var newObj={};
    for(var attr in obj){
        newObj[attr]=deepCopy(obj[attr]);
    }
    return newObj;
}
var b=deepCopy(a);
console.log(b);
