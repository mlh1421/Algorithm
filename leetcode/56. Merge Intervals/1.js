var merge = function(intervals) {
    var temp=[];
    for(var i=0;i<intervals.length;i++){
        for(var j=0;j<intervals[i].length;j++){
            temp.push(intervals[i][j]);
        }
    }
    return temp;
};
var a=merge([[1,3],[4,5],[6,9,7],[2,6],[15,12]]);
console.log(a);
