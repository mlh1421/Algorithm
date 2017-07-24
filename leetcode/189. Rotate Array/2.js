var rotate = function(nums, k) {
    if(nums.length==0){
        console.log(0);
        //break;
    }else{
        for(var i=0;i<k;i++){
            nums.unshift(nums.pop());
        }
        console.log(nums);
    }
};
rotate([],8);
