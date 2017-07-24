function convert(num) {
    var numM = parseInt(num / 1000);//计算M的个数
    var numD = parseInt((num - numM * 1000) / 500);//计算D的个数
    var numC = parseInt((num - numM * 1000 - numD * 500) / 100);//计算C的个数
    var numL = parseInt((num - numM * 1000 - numD * 500 - numC * 100) / 50);//计算L的个数
    var numX = parseInt((num - numM * 1000 - numD * 500 - numC * 100 - numL * 50) / 10);//计算X的个数
    var numV = parseInt((num - numM * 1000 - numD * 500 - numC * 100 - numL * 50 - numX * 10) / 5);//计算V的个数 
    var numI = num % 5;//计算I的个数
    var strX = "", strV = "", strI = "", strL = "", strC = "", strD = "", strM = "";
    for (let i = 0; i < numM; i++) {
        strM += "M";
    }
    for (let i = 0; i < numD; i++) {
        strD += "D";
    }
    for (let i = 0; i < numC; i++) {
        strC += "C";
    }
    for (let i = 0; i < numL; i++) {
        strL += "L";
    }
    for (let i = 0; i < numX; i++) {
        strX += "X";
    }
    for (let i = 0; i < numV; i++) {
        strV += "V";
    }
    for (let i = 0; i < numI; i++) {
        strI += "I";
    }
    return strM + strL + strX + strV + strI;
}
console.log(convert(1068));