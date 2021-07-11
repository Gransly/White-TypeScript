export class Calculator{

    private static validateEmptyArray(array: number[]):void{
        if(array.length ==0)
            throw new RangeError("Array is empty");
    }

    private static validateNumbersArray(array: number[]):void{
        for (let i =0; i  < array.length; i++){
            if(isNaN(array[i])){
                throw new TypeError("Array must consist of numbers");
            }
        }
    }

    static getMax(array: number[]):number{
        this.validateEmptyArray(array);
        this.validateNumbersArray(array);
        return Math.max(...array);
    }
    static getMin(array: number[]):number{
        this.validateEmptyArray(array);
        this.validateNumbersArray(array);
        return Math.min(...array);
    }

    static getSum(array: number[]):number{
        this.validateEmptyArray(array);
        this.validateNumbersArray(array);
        return array.reduce((a,b)=>a+b,0);
    }

    static getAvg(array: number[]):number{
        this.validateEmptyArray(array);
        this.validateNumbersArray(array);
        return this.getSum(array)/array.length;
    }
}