var reverseWords = function(s) {
    var temp=s.split(" ");
    var ptn=/\'*[a-z]$/g;
    for(var i=0;i<temp.length;i++){
        //var res=a.match(ptn)[0];

    }
};
var ptn=/\'*[a-z]$/g;
var a="aa'ss'ssss";
var res=a.match(ptn)[0];
b=a.replace(ptn,"");
console.log(res+b);
//console.log(a);
