function fearNotLetter(str) {
  var arr=str.split("");
    var item=[];
    for(var i=0;i<arr.length-1;i++){
        if(arr[i+1].charCodeAt()-arr[i].charCodeAt()>1){
            return String.fromCharCode(arr[i].charCodeAt()+1);
        }
    }
}
var a=fearNotLetter("abce");
console.log(a);
