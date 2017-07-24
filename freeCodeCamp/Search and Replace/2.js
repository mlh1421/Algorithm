function myReplace(str,before,after){
    var result;
    if(isToUpperCase(before[0])){
        result=str.replace(before,after[0].toUpperCase()+after.slice(1));
    }else{
        result=str.replace(before,after);
    }
    return result;
}
function isToUpperCase(obj){
    if(obj.toUpperCase()===obj){
      return  true;
    }else{
        return false;
    }
}
var a=myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
var b=myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
console.log(a);
console.log(b);


