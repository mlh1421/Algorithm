function qSort(arr) {
    if (arr.length == 0) {
        return [];
    }
    var list = arr[0],
        lesser = [],
        greater = [];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < list) {
            lesser.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }
    return qSort(lesser).concat(list, qSort(greater));
}
var arr=[1,213,24,3,4,3,54,5,4,6,7,68,67,97809809,8,978,989,89,0,4,523,543,5,45,435,34,543,5454];
console.time("time");
console.log(qSort(arr));
console.timeEnd("time");