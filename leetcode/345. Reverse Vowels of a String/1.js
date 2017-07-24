var reverseVowels = function(s) {
    var arr1=s.split("");
    var ptn=/[aeiuo]/g;
    var arr2=s.match(ptn).reverse();
    var j=0;
    for(var i=0;i<arr1.length;i++){
        if(ptn.test(arr1[i])){
            arr1[i]=arr2[j];
            j++;
        }
    }
    return arr1.join("");
}
var a=reverseVowels('leeetcoodo');
console.log(a);
