function checkCashRegister(price, cash, cid) {
    var change;
    // Here is your change, ma'am.
    var sum = 0, zl = cash - price, hundred = twenty = ten = five = one = quarter = dime = nickel = penny = 0, temp1 = [], temp2 = [];
    for (var i = 0; i < cid.length; i++) {
        sum += cid[i][1];
    }
    if (zl == sum) {
        return "Closed";
    }
    twenty = parseInt(zl / 20) * 20;
    if (twenty >= cid[7][1]) {
        twenty = cid[7][1];
    }
    ten = parseInt((zl - twenty) / 10) * 10;
    if (ten >= cid[6][1]) {
        ten = cid[6][1];
    }
    five = parseInt((zl - twenty - ten) / 5) * 5;
    if (five >= cid[5][1]) {
        five = cid[5][1];
    }
    one = parseInt((zl - twenty - ten - five)) * 1;
    if (one >= cid[4][1]) {
        one = cid[4][1];
    }
    quarter = parseInt((zl - twenty - ten - five - one) / 0.25) * 0.25;
    if (quarter > cid[3][1]) {
        quarter = cid[3][1];
    }
    dime = parseInt((zl - twenty - ten - five - one - quarter) / 0.1) * 0.1;
    if (dime >= cid[3][1]) {
        dime = cid[2][1];
    }
    nickel = parseInt((zl - twenty - ten - five - one - quarter - dime) / 0.05) * 0.05;
    if (nickel >= cid[1][1]) {
        nickel = cid[1][1];
    }
    penny = zl - twenty - ten - five - one - quarter - dime - nickel;
    penny = parseFloat(penny.toFixed(2));
    temp1 = [["PENNY", penny], ["NICKEL", nickel], ["DIME", dime], ["QUARTER", quarter], ["ONE", one], ["FIVE", five], ["TEN", ten], ["TWENTY", twenty], ["ONE HUNDRED", hundred]];
    for (var j = 0; j < temp1.length; j++) {
        if (temp1[j][1] != 0) {
            temp2.push(temp1[j]);
        }
    }
    if (penny > cid[0][1]) {
        return "Insufficient Funds";
    }
    var mm = twenty + ten + five + one + quarter + dime + nickel + penny;
    if (mm < zl) {
        return "Insufficient Funds";
    }
    return temp2.reverse();
}
var a = checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
console.log(a);
