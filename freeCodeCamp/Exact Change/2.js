function checkCashRegister(price, cash, cid) {
    var change;
    // Here is your change, ma'am.
    var sum = 0, zl = cash - price, hundred = twenty = ten = five = one = quarter = dime = nickel = penny = 0;
    for (var i = 0; i < cid.length; i++) {
        sum += cid[i][1];
    }
    if (zl == sum) {
        return "Closed";
    }
    //hundred = parseInt(zl / 100) * 100;
    //ten=
    twenty = parseInt(zl / 20) * 20;
    console.log(twenty);
    if (twenty > cid[7][1]) {
        ten = parseInt((zl - cid[7][1]) / 10) * 10;
        console.log(ten);
    }
}
var a = checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
console.log(a);