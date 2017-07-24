var a = [1, 2, 3, 4, 4, 55, 6, 55, 5, 5, 5, 55, 5, , 5];
var b = 9;
function search(a) {
    for (var i = 0; i < this.length; i++) {
        if(this[i] == a) {
        return true;
        }
    }
    return false;
}
a.search=search;
console.log(a.search(b));