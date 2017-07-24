/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
//不用+或-求两数值和
var getSum = function(a, b) {
    while(b){
        var c=a^b;
        b=(a&b)<<1;
        a=c;
    }
    return a;
};
