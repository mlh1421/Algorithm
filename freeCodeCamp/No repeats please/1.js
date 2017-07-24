function permAlone(str) {
  //return str;
  var arr=str.split(""),temp=[];
  temp.push(arr);
  for(var i=1;i<str.length-1;i++){
    swap(arr[i],arr[i+1]);
    temp.push(temp);
  }
  swap()
}
function swap(a,b){
var temp=a;
  a=b;
  b=temp;
}
permAlone('aab');