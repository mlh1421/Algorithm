function fib(b){
    if (b==1){
        return 1;
    }
    if(b==2){
        return 1;
    }
    return fib(b-1)+fib(b-2);
}
console.log(fib(50));
