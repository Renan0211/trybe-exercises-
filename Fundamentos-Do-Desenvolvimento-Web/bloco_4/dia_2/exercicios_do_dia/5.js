let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let greatestNumber = 0;

for(let index = 0; index < numbers.length; index ++) {
    if (greatestNumber < numbers[index]) {
        greatestNumber = numbers[index];
    }
    else {

    }
}

console.log(greatestNumber);