1 /**
2  * @param {string} s
3  * @return {boolean}
4  */
5 var isValid = function(s) {
    var stack = [];
    function brackets(left, right){
        if(left === '(' && right === ')'){
            return true;
        }else if(left === '[' && right === ']'){
            return true;
        }else if(left === '{' && right === '}'){
            return true;
        }
        return false;
    }
    var top = null;
    for(var i in s){
        if(/[({[]/.test(s[i])){
            stack.push(s[i]);
        }else{
            if(stack.length > 0){
                top = stack.pop();
                if(!brackets(top, s[i])){
                    return false;
                }
            }else{
                return false;
            }
        }
    }

    if(stack.length !== 0){
        return false;
    }
    return true;
};
