var arr = [9, 9, 9, 111,111, 2, 3, 4, 4, 5, 7];
function removeDuplicates(arr){
    arr.sort(function (a, b) { return a - b });//对数组进行排序
    var temp = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            continue;
        }
        temp.push(arr[i]);//无论最后一项重复不重复都要加上
    }
    temp.push(arr[i]);
    return temp;
}
console.log(removeDuplicates(arr));
