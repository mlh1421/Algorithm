/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var temp=[];
    for(var i=0;i<nums.length;i++){
        if(nums[i]!=val){
            temp.push(nums[i]);
        }
    }
    return temp;
};
var a=removeElement([3,2,2,3],3);
console.log(a);
