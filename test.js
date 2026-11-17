// let palindrome = "1211";

// function isPalindrome(x) {
//     isPalindrome = x
//     return "True";


//     isPalindrome = x
//     return "False";

// }
// console.log(isPalindrome(palindrome));


// 01: mara task ha ka ma aik string dakho ka kya wo aik palindrome ha ka nhi. 
// 02: ma aik value lo ga.
// 03: is value ko mana reverse kar diya. 
// 04: or phir mana original ko or reverse value ko check kiya ka.
// 06: agr palindrome ha to True ha (y1221y) Example.
// 07: agr palindrome nhi ha to False ha (eeeeeree) Example.

// let num1 = 4;
// let num2 = 3;

// function twoSum(val1, val2) {
//     let result = val1 + val2;

//     return result;
// };

// console.log(twoSum(num1, num2));

// 3 7 9

// for (let i = 0; i <= 10; i++) {
//     if (i == 3) {

//     } else if (i == 7) {

//     } else if (i == 9) {

//     } else {
//         console.log(i);

//     }
// }

// // 3 7 9

// let number = 1;

// if (number == 3) {


// } else if (number == 7) {


// } else if (number == 9) {

// } else {
//     console.log(number);
// }


function checkAge(age) {
    if (age < 18) {
        console.log("You are underage");
    } else if (age >= 18 && age <= 56) {
        console.log("You are an Adult");

    } else {
        console.log("You are a senior citizen");
    }
};

checkAge(17);
checkAge(25);
checkAge(65);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function printNumbers(numbers) {
    for (let i = 0; i < 20; i = i + 2) {
        console.log(numbers(i));

    }
};
console.log(numbers);


let maxNumbers = [10, 15, 66, 42, 12, 32];

function findMax(numbers) {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

console.log(findMax(maxNumbers));