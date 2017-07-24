/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var temp=[];
    nums.sort(function(a,b){return a-b});       //≈≈–Ú
    for(var i=0;i<nums.length-1;i++){
        if(nums[i+1]==nums[i]){
            continue;
        }
        temp.push(nums[i]);
    }
    temp.push(nums[i]);
    console.log(temp);
    for(var i=0;i<temp.length-1;i++){
        if(temp[i+1]-temp[i]>1){
            return true;
        }
    }
    return false;
};
var a=canJump([2,3,1,1,4]);
console.log(a);
