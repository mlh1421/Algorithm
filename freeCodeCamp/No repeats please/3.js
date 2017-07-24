var arr = [];
for (var i = 0; i < 5; i++) {
    arr[i] = i;
}//arr=[0,1,2,3,4];
var flag = [];
var result = [];//保存arr的下标
for (var i = 0; i < arr.length; i++) {
    flag[i] = 0;
    result[i] = i;
}
//flag=[0,0,0,0,0];
//result=[0,1,2,3,4];
var arrangementList = [];//放置所有的排列情况
//js实现全排列
var arrange = function (step) {//step是参数初值为0
    //边界判断条件
    if (step == arr.length) {
        var tmpArr = [];
        for (var i = 0; i < arr.length; i++) {
            tmpArr[i] = arr[result[i]];
        }
        arrangementList.push(tmpArr);
    } else if (step < arr.length) {
        //递归
        for (var i = 0; i < arr.length; i++) {
            if (flag[i] == 0) {
                result[step] = i;
                flag[i] = 1;
                arrange(step + 1);
                flag[i] = 0;
            }
        }
    }
}
arrange(0);
console.log("全排列结果：", arrangementList.length, "种");
for (var i = 0; i < arrangementList.length; i++) {
    console.log(arrangementList[i]);
}
