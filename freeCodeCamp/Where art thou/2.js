var a = [1, 2, 3, 4];
var b = [1, 2, 3, 6];
var c = false;
function aa() {
    for (var i = 0; i < b.length; i++) {
        if (a.indexOf(b[i] < 0)) {
            return false;
        }
    }
}
var v = aa();
console.log(v);