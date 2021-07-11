"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator_1 = require("./Calculator");
var NumberToArrayParser_1 = require("./NumberToArrayParser");
var App = /** @class */ (function () {
    function App() {
    }
    App.main = function (args) {
        var _this = this;
        var number;
        if (args.length > 0) {
            var numberString = args[0];
            console.log(numberString);
            if (this.isNumeric(numberString) && Number.parseInt(numberString) > 0) {
                console.log("Your input is " + numberString);
                number = Number.parseInt(numberString);
            }
            else {
                console.log("Error, wrong input");
            }
        }
        else {
            console.log("Type exit to finish\n");
            var stdin = process.openStdin();
            stdin.addListener("data", function (data) {
                data = data.toString().toLowerCase().trim();
                if (data !== '') {
                    if (data === "exit") {
                        process.exit();
                    }
                    try {
                        if (_this.isNumeric(data) && Number.parseInt(data) > 0) {
                            number = Number.parseInt(data);
                            console.log("Your input is " + number);
                            _this.print(number);
                            process.exit();
                        }
                        else {
                            throw new Error("Wrong input");
                        }
                    }
                    catch (e) {
                        console.log("Error: " + e.message);
                    }
                }
            });
        }
    };
    App.print = function (input) {
        var digits = NumberToArrayParser_1.NumberToArrayParser.numberToArray(input);
        console.log("Avg: " + Calculator_1.Calculator.getAvg(digits));
        console.log("Max: " + Calculator_1.Calculator.getMax(digits));
        console.log("Min: " + Calculator_1.Calculator.getMin(digits));
        console.log("Sum: " + Calculator_1.Calculator.getSum(digits));
    };
    App.isNumeric = function (num) {
        return !isNaN(num);
    };
    return App;
}());
if (require.main === module) {
    App.main(process.argv.slice(2));
}
//# sourceMappingURL=app.js.map