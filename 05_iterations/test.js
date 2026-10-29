// const users = [
//     { id: 1, name: "Moiz" },
//     { id: 2, name: "Ali" },
//     { id: 3, name: "Ahmed" }
// ];

// const userDetails = [
//     { id: 1, city: "Rawalpindi", age: 17 },
//     { id: 2, city: "Lahore", age: 19 },
//     { id: 3, city: "Karachi", age: 20 }
// ];

// const finalUsers = userDetails.map((userDetail) => {
//     const user = users.find((user) => user.id === userDetail.id);

//     return {
//         ...userDetail,
//         name: user.name
//     };
// });

// console.log(finalUsers);


// const numbers = [
//     45, 12, 89, 34, 67,
//     23, 90, 56, 11, 78,
//     42, 19, 63, 85, 30,
//     7, 51, 96, 28, 74
// ];

// const maxNumber = Math.max(...numbers);
// const minNumber = Math.min(...numbers);

// console.log("Maximum Number:", maxNumber);
// console.log("Minimum Number:", minNumber);


// const numbers = [
//     34, 76, 12, 95, 43,
//     68, 21, 87, 50, 16,
//     72, 39, 84, 5, 61
// ];

// const evenNumbers = numbers.filter((num) => {
//     return num % 2 !== 0;
// });

// console.log("Even Numbers:", evenNumbers);

// const numbers = [
//     34, 76, 12, 95, 43,
//     68, 21, 87, 50, 16,
//     72, 39, 84, 5, 61
// ];

// // const result = numbers.filter((num) => {
// //     return num > 20 && num < 80;
// // });

// // console.log(result);

// const result = numbers.filter((num) => {
//     return num < 20 || num > 80;
// });

// console.log(result);


// const numbers = [
//     34, 76, 12, 95, 43,
//     68, 21, 87, 50, 16,
//     72, 39, 84, 5, 61
// ];

// const result = numbers.filter((num) => {
//     return (num > 20 && num < 80) || num > 90;
// });

// console.log(result);

// const numbers = [
//     15, 42, 78, 9, 65,
//     91, 34, 56, 23, 88,
//     12, 73, 47, 96, 30
// ];

// const result = numbers.filter((num) => {
//     return (num > 20 && num < 60) || num > 90;
// });

// console.log(result);


// const numbers = [
//     14, 27, 36, 49, 52,
//     63, 78, 81, 95, 20,
//     33, 46, 57, 62, 89
// ];

// const result = numbers.filter((num) => {
//     return num % 2 === 0;
// });

// console.log(result);

// const result2 = numbers.filter((num) => {
//        return num % 2 !== 0;
// }); 

// console.log(result2);


// const numbers = [
//     14, 27, 36, 49, 52,
//     63, 78, 81, 95, 20,
//     33, 46, 57, 62, 89
// ];

// const result = numbers.filter((num) => {
//     return num > 50;
// });

// console.log(result);


// const users = [
//     { id: 1, name: "Moiz", city: "Rawalpindi" },
//     { id: 2, name: "Ali", city: "Lahore" },
//     { id: 3, name: "Zain", city: "Karachi" },
//     { id: 4, name: "Bilal", city: "Islamabad" }
// ];

// const userDetails = [
//     { id: 1, age: 17 },
//     { id: 2, age: 19 },
//     { id: 3, age: 18 },
//     { id: 4, age: 21 }
// ];

// const finalUsers = users.map((user) => {
//     const details = userDetails.find((userDetail) => {
//         return user.id === userDetail.id;
//     });

//     return {
//         ...user,
//         age: details.age
//     };
// });

// console.log(finalUsers);

// const students = [
//     { id: 101, name: "Moiz", course: "Javascript" },
//     { id: 102, name: "Ali", course: "HTML" },
//     { id: 103, name: "Bilal", course: "CSS" },
//     { id: 104, name: "Shery", course: "React" },
//     { id: 105, name: "Zain", course: "Node.js" }
// ];

// const studentDetails = [
//     { id: 103, age: 18, city: "Karachi" },
//     { id: 101, age: 17, city: "Rawalpindi" },
//     { id: 105, age: 22, city: "Islamabad" },
//     { id: 102, age: 19, city: "Lahore" },
//     { id: 104, age: 20, city: "Peshawar" }
// ];

// const finalResult = students.map((student) => {
//     const studentDetail = studentDetails.find((detail) => {
//         return student.id === detail.id;
//     });

//     return {
//         ...student,
//         ...studentDetail
//     };

// });

// console.log(finalResult);


// const prices = [123, 320, 445, 600, 678, 43, 214, 651];

// const minValue = Math.min(...prices);
// const maxValue = Math.max(...prices);

// console.log("Min Value:", minValue);
// console.log("Max Value:", maxValue);


// const prices = [250, 1200, 75, 890, 450, 1600, 320];

// let smallest = prices[0];
// let longest = prices[0];

// for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < smallest) {
//         smallest = prices[i];
//     }

//     if (prices[i] > longest) {
//         longest = prices[i];
//     }
// };

// console.log(smallest);
// console.log(longest);

// const prices = [250, 1200, 75, 890, 450, 1600, 320];

// let min = prices[0];
// let max = prices[0];

// for (const price of prices) {
//     if (price < min) {
//        min = price
//     }

//      if (price > max) {
//        max = price
//     }
// };

// console.log(min);
// console.log(max);


// const prices = [250, 1200, 75, 890, 450, 1600, 320];

// prices.sort((a, b) => a - b);

// console.log(prices);


// let scores = [45, 12, 89, 23, 67];

// for (let i = 0; i < scores.length; i++) {


//     for (let j = 0; j < scores.length - 1; j++) {
//         if (scores[j] > scores[j + 1]) {
//             let num = scores[j]
//             scores[j] = scores[j + 1]
//             scores[j + 1] = num
//         };
//     };
// };

// console.log(scores);



// function generateFibonacci(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];

//     let fib = [0, 1];

//     for (let i = 2; i < n; i++) {
//         let nextNum = fib[i - 1] + fib[i - 2];
//         fib.push(nextNum);
//     }
//     return fib;
// }

// console.log(generateFibonacci(9));


// function twoSum(nums, target) {
//     let map = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         let currentNum = nums[i];

//         let neededNums = target - currentNum;

//         if (map.has(neededNums)) {
//             return [map.get(neededNums), i]
//         }

//         map.set(currentNum, i);
//     }

//     return [];
// }

// let nums = [2, 7, 11, 15];
// let target = 9;

// console.log(twoSum(nums, target));


// function twoSums(nums, target) {
//     let map = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         let currentNum = nums[i];


//         let neededNum = target - currentNum;

//         if (map.has(neededNum)) {
//             return [map.get(neededNum), i];
//         }

//         map.set(currentNum, i);
//     }

//     return [];
// }

// let nums = [3, 5, 9, 6, 12];
// let target = 15;

// console.log(twoSums(nums, target));


// let fruits = ["Mango", 'Apple', "Banana", "Orange", "Pineapple"];

// for (let i = 0; i < fruits.length; i++) {

//     console.log(fruits[i]);

// }

// let fruits = ["Mango", 'Apple', "Banana", "Orange", "Pineapple"];
// for (const fruit of fruits) {
//     console.log(fruit);

// }

// let fruits = ["Mango", 'Apple', "Banana", "Orange", "Pineapple"];
// fruits.forEach(fruit => {
//     console.log(fruit);

// });

// let fruits = [15, 25, 36, 47, 55];

// fruits.forEach(fruit => {
//     console.log(fruit + 10);

// });


let numbers = [2, 4, 6, 8, 10];

let result = numbers.map(function (num) {
    return num * 3
});

console.log(result);
