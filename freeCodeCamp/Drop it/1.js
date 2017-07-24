function drop(arr, func) {
    // Drop them elements.
    var fn = func;
    var arr1 = arr;
    var condition = false;
    for (var i = 0; i < arr1.length; i++) {
        if (fn(arr1[i])) {
            condition = true;
            break;
        }
    }
    return arr1.slice(i);
}
