var longestValidParentheses = function(s) {
    
};
var ptn=/\(\)/g
var str="()(()";
var temp=[];
while(ptn.test(str)){
temp.push(str.match(ptn));
str=str.replace(ptn,"");
}
console.log(temp);
//console.log(str.match(ptn));
