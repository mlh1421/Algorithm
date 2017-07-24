function fib(n){
    var s=0,a=0,b=1;
    while(s<n){
        console.log(b)
        a=b,b=a+b;
        s=s+1;
    }
}

fib(2);
