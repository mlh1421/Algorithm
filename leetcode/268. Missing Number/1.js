/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var flag=true;
    if(nums.length==1){
        //return nums[0]+1;
        if(nums[0]>=1){
            return nums[0]-1;
        }else{
            return nums[0]+1;
        }
    }
    nums.sort(function(a,b){return a-b;});
    if(nums[0]!==0){
        return nums[0]-1;
    }
    for(var i=0;i<nums.length;i++){
        if(nums[i+1]-nums[i]>1){
            flag=false;
            return nums[i]+1;
        }
    }
    return nums[i-1]+1;
};
var a=missingNumber([1,2]);
console.log(a);
