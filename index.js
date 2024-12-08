//Problem number : 1
function calculateDifference(a,b){
    return a-b;
}
console.log(calculateDifference(27,5));

//Problem number : 2
function isOdd(a){
    if(a % 2 !== 0){
        return true;
    }else{
        return false;
    }
}
console.log(isOdd(33));

//Problem Number : 3

function findMin(numbers) {
    
    return Math.min(...numbers);
}
console.log(findMin([43,37,93,76,34]));

//Problem Number : 4

function filterEvenNumbers(numbers) {
    const evenNumbers = [];
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(filterEvenNumbers([3,44,65,87,22,1]));

//Problem Number : 5

function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}

console.log(sortArrayDescending([3, 1, 4, 1, 5, 9]));

//Problem Number : 6

function lowercaseFirstLetter(str) {
   
    return str.charAt(0).toLowerCase()+str.slice(1);
}
console.log(lowercaseFirstLetter("HELLO"));

//Problem Number : 7

function findAverage(numbers) {
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum =sum+ numbers[i];
    }

    return sum / numbers.length;
}
console.log(findAverage([1, 2, 3, 4, 5]));

//Problem Number : 7

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}
console.log(isLeapYear(2020));