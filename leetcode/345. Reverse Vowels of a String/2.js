var reverseVowels = function(s) {
    var arr1=s.split("");
    var ptn=/[aeiuo]/g;
    var arr2=s.match(ptn).reverse();
    //console.log(arr2);
    var j=0;
    var d={
        a:"a",
        e:"e",
        o:"o",
        i:"i",
        u:"u"
    }
    for(var i=0;i<arr1.length;i++){
        if(arr1[i] in d){
            arr1[i]=arr2[j];
            j++;
        }
    }
    return arr1.join("");
}
//var a=reverseVowels('leeetcoodo');
var a=reverseVowels('');
console.log(a);
