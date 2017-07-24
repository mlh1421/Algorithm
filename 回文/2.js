var str="shf sdf sd sdfdfsdf";
var items=str.split(/\s+/g);
  var length=0;
  for(var i=0;i<items.length-1;i++){
    if(items[i].length<=items[i+1].length){
      length=items[i+1].length;
    }
  }
console.log(length);
