function where(collection, source) {
    var arr = [];
    var condition = false;
    for (var i = 0; i < collection.length; i++) {
        for (var n in source) {
            if (collection[i][n] !== source[n]) {
                condition = true;
            } else {
                condition = false;
            }
        }
        if (condition) {
            continue;
        }
        arr.push(collection[i]);
    }
    return arr;
}
where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });