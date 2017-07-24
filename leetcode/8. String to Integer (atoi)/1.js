var myAtoi = function (str) {
    var ptn = /^[+-]?\d+/g;
    //var temp=[];
    //return ptn.test(str);
    //temp = ptn.exec(str)[0];
    var temp=str.match(ptn);
    var flag=(Object.prototype.toString.call(temp)=="[object Array]");
    //return flag;
    if(flag){
        return temp[0];
    }else{
        return 0;
    }
    //return parseInt(temp);
};
console.log(myAtoi("11212aaaasdf"));
console.log(myAtoi("+"));
console.log(myAtoi("+1"));
console.log(myAtoi(""));