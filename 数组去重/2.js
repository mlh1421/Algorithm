var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sortedArr = arr.sort(); 
var results = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sortedArr[i + 1] == sortedArr[i]) {
        results.push(sortedArr[i]);
    }
}

console.log((results));//返回重复的值
var temp=arr.filter(function(item){
    return results.indexOf(item)<0;
});
temp=temp.concat(results);
console.log(temp);
