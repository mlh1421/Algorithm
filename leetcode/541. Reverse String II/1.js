var reverseStr = function(s, k) {
    var temp=[];
    for(var i=0;i<s.length;i=i+k){
        temp.push(s.slice(i,i+k));
    }
    for(var i=0;i<temp.length;i=i+2){
        temp[i]=temp[i].split("").reverse().join("");
    }
    return temp.join("");
};
var a=reverseStr('abcdefgs',3);

