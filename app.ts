const readline = require("readline");

let isNumber: boolean = false;
let numberString : string;
let number :number;

if(process.argv.length > 2)
{
    numberString = process.argv.slice(2)[0];
    console.log(numberString);

    if(isNumeric(numberString) && Number.parseInt(numberString) > 0){
        console.log(`Your input is ${numberString}`);
         number = Number.parseInt(numberString);
        isNumber = true;
    }
    else {
        console.log("Error, wrong input");
    }
}
else
    {
        console.log("Type exit to finish\n");
        let stdin = process.openStdin();
        stdin.addListener("data", (data) => {
            data = data.toString().toLowerCase().trim();
            if (data !== '') {
                if (data === "exit") {
                    process.exit();
                }
                try {
                    if(isNumeric(data) && Number.parseInt(data) > 0){
                        number = Number.parseInt(data);
                        console.log(`Your input is ${number}`);
                        number = Number.parseInt(numberString);
                        isNumber = true;
                    }
                    else {
                        throw new Error("Wrong input");
                    }

                } catch (e) {
                    console.log(`Err: ${e.message}`);
                }
            }
        });
    }


function isNumeric(num){
    return !isNaN(num)
}
