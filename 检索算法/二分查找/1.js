var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function search(data) {
    var lowerbound = 0, upperbound = this.length - 1;
    for (; lowerbound <= upperbound;) {

        var mid = Math.floor((lowerbound + upperbound) / 2);
        if (this[mid] < data) {
            lowerbound = mid + 1;
        } else if (this[mid] > data) {
            upperbound = mid - 1;
        } else {
            return mid;
        }
    }
}
Array.prototype.search=search;
var b = arr.search(9);
console.log(b);