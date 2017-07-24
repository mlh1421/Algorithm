function fearNotLetter(str) {
    for(var i=0;i<str.length-1;i++){
        if(str[i+1].charCodeAt()-str[i].charCodeAt()>1){
            return String.fromCharCode(str[i].charCodeAt()+1);
        }
    }
}
var a=fearNotLetter("abce");
console.log(a);
