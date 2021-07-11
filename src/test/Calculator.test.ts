import {Calculator} from "../main/Calculator";

describe('Max test',() =>{
    //Arrange
    const numbers: number[] = [1, 2, 3, 4];

    //Act&Assert
    test('should return 4', function () {
        expect(Calculator.getMax(numbers)).toEqual(4);
    });
})

describe('Min test',() =>{
    //Arrange
    const numbers: number[] = [1, 2, 3, 4];

    //Act&Assert
    test('should return 1', function () {
        expect(Calculator.getMin(numbers)).toEqual(1);
    });
})

describe('Sum test',() =>{
    //Arrange
    const numbers: number[] = [1, 2, 3, 4];

    //Act&Assert
    test('should return 10', function () {
        expect(Calculator.getSum(numbers)).toEqual(10);
    });
})

describe('Avg test',() =>{
    //Arrange
    const numbers: number[] = [1,1,1,1];

    //Act&Assert
    test('should return 1', function () {
        expect(Calculator.getAvg(numbers)).toEqual(1);
    });
})