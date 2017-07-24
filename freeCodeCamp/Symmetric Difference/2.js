function sym(args) {
//    var temp = [];
    args=[].slice.call(arguments);
   return args.reduce(ff);
   // for (var n = 1; n < arguments.length; n++) {

//    }
    //return args;
}
function ff(prev, cur) {
    var temp = [];
    for (let i = 0; i < prev.length; i++) {
        if (cur.indexOf(prev[i]) < 0) {
            temp.push(prev[i]);
        }
    }
    for (let j = 0; j < cur.length; j++) {
        if (prev.indexOf(cur[j]) < 0) {
            temp.push(cur[j]);
        }
    }
    return temp;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));