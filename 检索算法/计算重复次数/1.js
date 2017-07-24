var arr = [1, 1, 1, 1, 1, 3, 3, , 2, 32, 3, 23, 2, 3, 23, 2, 3, 23, 2, 3, 2, 3];
function count(data) {
    var count = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i] == data) {
            count++;
        }
    }
    return count;
}
Array.prototype.count = count;
console.log(arr.count(37));