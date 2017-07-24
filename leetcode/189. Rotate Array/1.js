var rotate = function(nums, k) {
    for(var i=0;i<k;i++){
        nums.unshift(nums.pop());
    }
    return nums;
};
var a=rotate([1,2,4,5,7,9,12,87,2,1],4);
console.log(a);
