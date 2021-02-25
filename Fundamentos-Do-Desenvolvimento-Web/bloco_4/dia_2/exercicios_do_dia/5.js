let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let greatestNumber = numbers[0];

for(let index = 0; index < numbers.length; index ++) {
    if (greatestNumber < numbers[index]) {
        greatestNumber = numbers[index];
    }
    else {

    }
}

console.log(greatestNumber);

//caso a lista de número fosse composta apenas de números negativos esse código não funcionaria, resolver no futuro