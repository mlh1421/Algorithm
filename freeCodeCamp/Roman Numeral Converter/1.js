function convert(num) {
    var numV,numX,numI;
    numX=parseInt(num/10);
    numV=parseInt((num-numX*10)/5);
    numI=num-numX*10-numV*5;
    var tempV=[],tempI=[],tempX=[];
    for(var i=0;i<numV;i++){
        tempV.push("V");
    }
    for(var j=0;j<numI;j++){
        tempI.push("I");
    }
    for(let j=0;j<numX;j++){
        tempX.push("X");
    }
    if (5 - numI == 1) {
        return tempX.join("") +"I"+ tempV.join("");
    }
    console.log(numI);
    return tempX.join("")+tempV.join("")+tempI.join("");
}

var b=convert(4);
console.log(b);
