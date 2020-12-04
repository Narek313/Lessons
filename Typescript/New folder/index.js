"use strict";
var x = 5;
var s = "bar";
var b = false;
var a = 25;
var arr = [1, 2, 3];
var arr2 = [1, "id"];
var arrNum = [1, 2, 3, 4, 5];
var j = 2;
function myFunction(a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 2; }
    console.log(a + b);
}
myFunction(5, 6);
var user = {
    name: "Karen",
    age: 25,
    info: function () {
        return "" + this.name;
    }
};
//# sourceMappingURL=index.js.map