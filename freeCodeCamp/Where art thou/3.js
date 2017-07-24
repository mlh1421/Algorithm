var obj1={a:1,b:2};
var obj2={a:1,c:3};
for(var i in obj2){
        if(obj1.hasOwnProperty(i)==false){
            console.log(false);
        }

}