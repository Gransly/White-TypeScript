"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.validateEmptyArray = function (array) {
        if (array.length == 0)
            throw new RangeError("Array is empty");
    };
    Calculator.validateNumbersArray = function (array) {
        for (var i = 0; i < array.length; i++) {
            if (isNaN(array[i])) {
                throw new TypeError("Array must consist of numbers");
            }
        }
    };
    Calculator.getMax = function (array) {
        this.validateEmptyArray(array);
        this.validateNumbersArray(array);
        return Math.max.apply(Math, array);
    };
    Calculator.getMin = function (array) {
        this.validateEmptyArray(array);
        this.validateNumbersArray(array);
        return Math.min.apply(Math, array);
    };
    Calculator.getSum = function (array) {
        this.validateEmptyArray(array);
        this.validateNumbersArray(array);
        return array.reduce(function (a, b) { return a + b; }, 0);
    };
    Calculator.getAvg = function (array) {
        this.validateEmptyArray(array);
        this.validateNumbersArray(array);
        return this.getSum(array) / array.length;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=Calculator.js.map