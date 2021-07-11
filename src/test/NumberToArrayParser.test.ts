import {NumberToArrayParser} from "../main/NumberToArrayParser";

describe('numb1234ToArray', () =>{
    //Arrange
    const numbers : number = 1234;
    //Assert
    const expected :number[] = [1,2,3,4];
    //Act
    test('', ()=>{
        expect(NumberToArrayParser.numberToArray(numbers)).toEqual(expected);
    })
})

