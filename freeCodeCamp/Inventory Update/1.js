function updateInventory(arr1, arr2) {
    // 请保证你的代码考虑到所有情况
    //return arr1;
    var temp = [], condition = true, swap;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr2[j][1] == arr1[i][1]) {
                arr1[i][0] += arr2[j][0];
            }
        }
    }
    temp = arr1;
    for (var m = 0; m < arr2.length; m++) {
        condition = true;
        for (var n = 0; n < arr1.length; n++) {
            if (arr1[n][1] == arr2[m][1]) {
                condition = false;
                break;
            }
        }
        if (condition) {
            temp.push(arr2[m]);
            //condition = true;
        }
    }
    //return temp;
    //console.log(temp);
    for (var a = 0; a < temp.length - 1; a++) {
        for (var b = 1; b < temp.length; b++) {
            if (temp[b-1][1] > temp[b][1]) {
                swap = temp[b-1];
                temp[b-1] = temp[b];
                temp[b] = swap;

            }
        }
    }
    return temp;
}

// 仓库库存示例
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

var a = updateInventory(curInv, newInv);
console.log(a);