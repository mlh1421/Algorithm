function every(collection, pre) {
  // Is everyone being true?
    for(var i=0;i<collection.length;i++){
        if(!(pre in collection[i])){
            return false;
        }
    }
    return true;
  //return pre;
}

var a=every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
console.log(a);
