let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smallestNumber = numbers[0];

for(let index = 0; index < numbers.length; index ++) {
    if (smallestNumber > numbers[index]) {
        smallestNumber = numbers[index];
    }
    else {

    }
}

console.log(smallestNumber);