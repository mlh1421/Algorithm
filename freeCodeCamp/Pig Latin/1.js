function translate(str) {
  var ptn=/["a"|"i"|"e""|"o"|"u"]/g,
      str1;
    if(ptn.test(str[0])){
      return str+"way";
    }
  for(var i=0;i<str.length;i++){
    if(ptn.test(str[i])){
      return str.slice(i)+str.slice(0,i)+"ay";
    }
  }
}

translate("consonant");