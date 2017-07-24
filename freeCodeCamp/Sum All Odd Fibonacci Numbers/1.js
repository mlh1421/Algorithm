//给一个正整数num，返回小于或等于num的斐波纳契奇数之和。
//
//斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。
//
//例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3。
//
//提示：此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。

function sumFibs(num) {
    var num1=1,num2=1,arr=[];
    if(num==1){
        arr.push(num1);
    }else if(num==2){
        arr.push(num1,num2);
    }else{
        arr.push(num1,num2);
        var i=1;
        while(true){
            arr.push(arr[i]+arr[i-1]);
            if(arr[arr.length-1]>num){
                arr.pop();
                break;
            }
            i++;
        }
    }
    var sum=0;
    for(var j=0;j<arr.length;j++){
        if(arr[j]%2!=0){
        sum+=arr[j];
        }
    }
    return sum;
}

var a=sumFibs(4000000);
console.log(a);
