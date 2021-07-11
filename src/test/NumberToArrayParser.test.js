"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberToArrayParser_1 = require("../main/NumberToArrayParser");
describe('numbToArray', function () {
    var numbers = 1234;
    var expected = [1, 2, 3, 4];
    test('', function () {
        expect(NumberToArrayParser_1.NumberToArrayParser.numberToArray(numbers)).toEqual(expected);
    });
});
//# sourceMappingURL=NumberToArrayParser.test.js.map