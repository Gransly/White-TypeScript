"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator_1 = require("../main/Calculator");
describe('Max test', function () {
    //Arrange
    var numbers = [1, 2, 3, 4];
    //Act&Assert
    test('should return 4', function () {
        expect(Calculator_1.Calculator.getMax(numbers)).toEqual(4);
    });
});
describe('Min test', function () {
    //Arrange
    var numbers = [1, 2, 3, 4];
    //Act&Assert
    test('should return 1', function () {
        expect(Calculator_1.Calculator.getMin(numbers)).toEqual(1);
    });
});
describe('Sum test', function () {
    //Arrange
    var numbers = [1, 2, 3, 4];
    //Act&Assert
    test('should return 10', function () {
        expect(Calculator_1.Calculator.getSum(numbers)).toEqual(10);
    });
});
describe('Avg test', function () {
    //Arrange
    var numbers = [1, 1, 1, 1];
    //Act&Assert
    test('should return 1', function () {
        expect(Calculator_1.Calculator.getAvg(numbers)).toEqual(1);
    });
});
//# sourceMappingURL=Calculator.test.js.map