var twoSum = function(nums, target) {
    var temp=[];
    for(var i=0;i<nums.length-1;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                temp.push(i,j);
                break;
            }
        }
    }
    return temp;
};
console.log(twoSum([3,2,4],6));
