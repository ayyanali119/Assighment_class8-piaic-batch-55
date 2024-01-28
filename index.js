"use strict";
/*Assignment :
 1- Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method
  to insert the value at the specified index in the array. Return the modified array.*/
var insertValueAtIndex = (array, index, value) => {
    // Use splice to insert the value at the specified index
    array.splice(index, 0, value);
    // Return the modified array
    return array;
};
let newArray = [1, 2, 3, 4, 5];
let modifiedArray = insertValueAtIndex(newArray, 2, 50);
console.log("Modified Array:", modifiedArray);
//question no 2
// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update 
var buyItems = ["eggs", "wafers", "snacks", "chocolates", "bread", "cream", "lays"];
function shoppingcart(index, delete1, add) {
    buyItems.splice(index, delete1, add);
    console.log(buyItems);
    return;
}
shoppingcart(2, 0, "tooth paste");
//question no 3
// Write a program that uses a while loop to print the first 25 integers.
let aNumber = 1;
while (aNumber <= 25) {
    console.log(aNumber);
    aNumber++;
}
//question no 4
// Write a program that uses a while loop to print the first 10 even numbers.
let number1 = 1;
while (number1 <= 10) {
    let evenNum = number1 * 2;
    number1++;
    console.log(evenNum);
}
//question no 5
//- Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function factorial(num2) {
    if (num2 > 0) {
        var result = num2;
        var multiplier = num2 - 1; // 5-1=4
        while (multiplier > 0) {
            result *= multiplier;
            multiplier--;
        }
        console.log(result);
        return;
    }
    console.log("invalid input data");
}
//question no 6
// Write a program having an array of numbers if the number is negative it should remove the negative number from the 
let array2 = [1, 76, 54, 30, 4, 5, 54, -3, -4, -6];
let removeNegativeNumbers = (takeArray) => {
    let nonNegativeNumbers = [];
    for (let i = 0; i < takeArray.length; i++) {
        if (takeArray[i] >= 0) {
            nonNegativeNumbers.push(takeArray[i]);
        }
    }
    return nonNegativeNumbers;
};
let filteredNumbers = removeNegativeNumbers(array2);
console.log("Original Array:", array2);
console.log("Array after removing negative numbers:", filteredNumbers);
//question no 7
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array
var calculateSum = (arrayOfNumbers) => {
    var sumNumber = 0;
    var sum = 0;
    while (sumNumber < arrayOfNumbers.length) {
        sum = sum + arrayOfNumbers[sumNumber];
        sumNumber++;
    }
    return sum;
};
console.log(calculateSum([1, 2, 4, 5, 7, 8]));
//question no 8
// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.*/
var tempInCelsius = [30, 35, 40, 45, 50];
var tempInFahrenhiet = [];
var indexx = 0;
while (indexx < tempInCelsius.length) {
    tempInFahrenhiet[indexx] = tempInCelsius[indexx] * 9 / 5 + 32;
    indexx++;
}
console.log(tempInFahrenhiet);
//question no9
// Write a program to remove all the odd numbers from an array.
let array3 = [1, 2, 3, 4, 5, 6];
let removeOddNumbers = (takeArray) => {
    let OddNumbers = [];
    for (let i = 0; i < takeArray.length; i++) {
        if (takeArray[i] % 2 === 0) {
            OddNumbers.push(takeArray[i]);
        }
    }
    return OddNumbers;
};
let filtered_Numbers = removeOddNumbers(array3);
console.log("Original Array:", array3);
console.log("Array after removing Odd numbers:", filtered_Numbers);
let array = [
    "Apple ", "banana", "Orange", "GUAva", "kiivi"
];
let newarrayFruits = array.map(array => array.length === 5 ? array : "");
console.log(newarrayFruits.filter(Boolean));
