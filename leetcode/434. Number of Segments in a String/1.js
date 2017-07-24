var countSegments = function(s) {
    var ptn=/\s+/g,
        temp=[];
   temp= s.split(ptn);
   temp=temp.filter(function(item){
       return item!="";
   })
   console.log(temp);
    return temp.length;
    
};
console.log(countSegments( "Hello, my name is John"));
console.log(countSegments(", , , ,        a, eaefa"));
console.log(countSegments(""));