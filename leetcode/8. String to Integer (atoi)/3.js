/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    //var ptn=/^[+-]?\d+/g;
    //var temp=str.match(ptn);
    //var flag=(Object.prototype.toString.call(temp)=="[object Array]");
    ////return flag;
    //if(flag){
    //    return parseInt(temp[0]);
    //}else{
    //    return 0;
    //}
    var temp=parseInt(str);
    if(isNaN(temp)){
        return 0;
    }else{
        return temp;
    }
};
var a=myAtoi("  010");
console.log(a);
