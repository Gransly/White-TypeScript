export class NumberToArrayParser {
    static numberToArray(number:number):number[]{
       return  Array.from(String(number), Number);
    }
}