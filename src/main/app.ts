import {Calculator} from "./Calculator";
import {NumberToArrayParser} from "./NumberToArrayParser";

class App {
    static main(args: string[]): void {

        let number: number;

        if (args.length > 0) {
            let numberString: string = args[0];
            console.log(numberString);

            if (this.isNumeric(numberString) && Number.parseInt(numberString) > 0) {
                console.log(`Your input is ${numberString}`);
                number = Number.parseInt(numberString);
            } else {
                console.log("Error, wrong input");
            }
        } else {
            console.log("Type exit to finish\n");
            let stdin = process.openStdin();
            stdin.addListener("data", (data) => {
                data = data.toString().toLowerCase().trim();
                if (data !== '') {
                    if (data === "exit") {
                        process.exit();
                    }
                    try {
                        if (this.isNumeric(data) && Number.parseInt(data) > 0) {
                            number = Number.parseInt(data);
                            console.log(`Your input is ${number}`);
                            this.print(number);
                            process.exit();
                        } else {
                            throw new Error("Wrong input");
                        }

                    } catch (e) {
                        console.log(`Error: ${e.message}`);
                    }
                }
            });
        }

    }

    private static print(input:number): void {
        let digits:number[] = NumberToArrayParser.numberToArray(input);
        console.log(`Avg: ${Calculator.getAvg(digits)}`);
        console.log(`Max: ${Calculator.getMax(digits)}`);
        console.log(`Min: ${Calculator.getMin(digits)}`);
        console.log(`Sum: ${Calculator.getSum(digits)}`);
    }

    private static isNumeric(num:string | number)
        {
            return !isNaN(<number>num)
        }

}

if (require.main === module) {
    App.main(process.argv.slice(2));
}