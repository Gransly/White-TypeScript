"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberToArrayParser = void 0;
var NumberToArrayParser = /** @class */ (function () {
    function NumberToArrayParser() {
    }
    NumberToArrayParser.numberToArray = function (number) {
        return Array.from(String(number), Number);
    };
    return NumberToArrayParser;
}());
exports.NumberToArrayParser = NumberToArrayParser;
//# sourceMappingURL=NumberToArrayParser.js.map