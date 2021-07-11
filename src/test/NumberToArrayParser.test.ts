import {NumberToArrayParser} from "../main/NumberToArrayParser";

describe('numbToArray', () =>{
    const numbers : number = 1234;
    const expected :number[] = [1,2,3,4];
    test('', ()=>{
        expect(NumberToArrayParser.numberToArray(numbers)).toEqual(expected);
    })
})