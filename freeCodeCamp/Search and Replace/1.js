function myReplace(str, before, after) {
  var arr=str.split(" ");
  for(var i=0;i<arr.length;i++){
    if(arr[i]===before){
      if(isToUpperCase(arr[i][0])){
        arr[i]=after[0].toUpperCase()+after.slice(1);
      }else{
         arr[i]=after;
      }
    }
  }
  return arr.join(" ");
}
//判断是否大写
function isToUpperCase(obj){
    if(obj.toUpperCase()===obj){
      return  true;
    }else{
        return false;
    }
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

