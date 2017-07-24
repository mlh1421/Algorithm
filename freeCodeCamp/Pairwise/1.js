function pairwise(arr, arg) {
    //return arg;
    var sum = 0, n = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (i in n) {
            continue;
        }
        for (var j = i + 1; j < arr.length; j++) {
            if (j in n) {
                continue;
            }
            if (arr[i] + arr[j] == arg) {
                sum = sum + i + j;
                n.push(i, j);
                break;

            }
        }
    }
    return sum;
}
var a = pairwise([1, 4, 2, 3, 0, 5], 7);
console.log("a:"+a);