function fearNotLetter(str) {
  var arr=str.split("");
    var item=[];
    for(var i=0;i<arr.length;i++){
        item.push(arr[i].charCodeAt(0));
    }
    for(var j=0;j<item.length-1;j++){
        if(item[j+1]-item[j]>1){
            return String.fromCharCode(item[j]+1);
        }
    }
  //return str;
}
var a=fearNotLetter("abce");

console.log(a);
