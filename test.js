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

// ----------------------------------------------\\


// function checkAge(age) {
//     if (age < 18) {
//         console.log("You are underage");
//     } else if (age >= 18 && age <= 56) {
//         console.log("You are an Adult");

//     } else {
//         console.log("You are a senior citizen");
//     }
// };

// checkAge(17);
// checkAge(25);
// checkAge(65);

// ----------------------------------------------\\


// function printNumbers() {

//     for (let i = 1; i <= 20; i++) {

//         if (i % 2 === 0) {
//             console.log(i);
//         }

//     }

// }

// printNumbers();

// ----------------------------------------------\\

// let maxNumbers = [10, 15, 66, 42, 12, 32];

// function findMax(numbers) {
//     let max = numbers[0];

//     for (let i = 1; i < numbers.length; i++) {

//         if (numbers[i] > max) {
//             max = numbers[i];
//         }
//     }

//     return 3;
// }

// let result = findMax(maxNumbers)

// console.log(result);

// ----------------------------------------------\\

// function checkNumber(number) {
//     if (number % 2 === 0) {
//         console.log("Even number");
//     } else {
//         console.log("Odd number");
//     }
// }
// checkNumber(7);
// checkNumber(10);
// checkNumber(13);
// checkNumber(22);

// ----------------------------------------------\\

// function multiplicationTable(num) {
//     if (num < 0) {
//         console.log("Invalid number");
//         return
//     }

//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} × ${i} = ${num * i}`);
//     }
// };

// multiplicationTable(2);
// multiplicationTable(3);
// multiplicationTable(4);
// multiplicationTable(5);
// multiplicationTable(6);

// ----------------------------------------------\\

// function calculateResult(marks) {
//     let total = 0;

//     for (let i = 0; i < marks.length; i++) {
//         total = total + marks[i];
//     }

//     let average = total / marks.length;

//     let grade;

//     if (average >= 90) {
//         grade = "A +";
//     } else if (average >= 80) {
//         grade = "A";
//     } else if (average >= 70) {
//         grade = "B ";
//     } else if (average >= 60) {
//         grade = "C";
//     } else if (average >= 50) {
//         grade = "D";
//     } else {
//         grade = "F : Fail"
//     }

//     return {
//         total: total,
//         average: average,
//         grade: grade
//     };
// }

// let studentMarks1 = [85, 40, 95, 55, 60, 70];

// let result = calculateResult(studentMarks1);

// console.log("Total Marks : ", result.total);
// console.log("Average : ", result.average);
// console.log("Grades : ", result.grade);

// ----------------------------------------------\\


// let smallNumbers = [10, 15, 66, 42, 1, 32];

// function findSmaller(numbers) {
//     let small = numbers[0];

//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < small) {
//             small = numbers[i]

//         }



//     };
//     return small

// };

// let result2 = findSmaller(smallNumbers);
// console.log(result2);

// ----------------------------------------------\\

// let car = "mehran";

// let carBrand = {
//     Brand: 1998,
//     car: car,
//     color: "Red"
// };

// console.log(carBrand.Brand);

// let names = ["Ali", "moiz", "bilal"];


// for (let i = 0; i <= 2; i++) {
//     console.log(names[i]);

// };

// let names = ["Ronaldo", "Messi", "Neymar"];

// for (let i = 0; i <= 2; i++) {
//     if (names[i] !== "Messi") {
//         console.log(names[i]);
//     }
// // };

// let names = ["Hello", "Sulululu", "Meow", "Gupp", "Gupp", "Suiiiiii"]

// function printWithoutName(a, b) {
//     for (let i = 0; i <= 5; i++) {

//         if (a[i] !== b) {

//             console.log(a[i]);

//         }
//     }
// };

// printWithoutName(names, "Suiiiiii")

// const userInfo = [
//     { name: "Moiz", age: 17 },
//     { name: "Ali", age: 20 },
//     { name: "Zain", age: 18 }
// ];

// for (let i = 0; i < userInfo.length; i++) {
//     console.log(userInfo[i]);
// };

// const users = [
//     { name: "Moiz", age: 17 },
//     { name: "Ali", age: 19 },
//     { name: "Zain", age: 15 },
//     { name: "Bilal", age: 22 }
// ];
// console.log(users.filter((user) => user.age >= 18));

// const students = [
//     { name: "Moiz", marks: 85 },
//     { name: "Ali", marks: 70 },
//     { name: "Zain", marks: 90 },
//     { name: "Bilal", marks: 60 }
// ];

// console.log(students.map((student) => student.name));


// const students = [
//     { id: 1, name: "Moiz", marks: 85 },
//     { id: 2, name: "Ali", marks: 70 },
//     { id: 3, name: "Zain", marks: 90 },
//     { id: 4, name: "Bilal", marks: 60 }
// ];

// console.log(students.find((student) => student.id === 3));

// const products = [
//     { name: "Mouse", price: 1500 },
//     { name: "Keyboard", price: 2500 },
//     { name: "Headphones", price: 3000 }
// ];

// let total = 0;

// for (let i = 0; i < products.length; i++) {
//     total = total + products[i].price
// };

// console.log("Total Sum : ", total);

// const students = [
//     { name: "Moiz", marks: 80 },
//     { name: "Ali", marks: 70 },
//     { name: "Zain", marks: 90 },
//     { name: "Bilal", marks: 60 }
// ];

// let total = 0;

// for (let i = 0; i < students.length; i++) {
//     total = total + students[i].marks

// };

// console.log("Total Marks : ", total);

// const students = [
//     { name: "Moiz", age: 17 },
//     { name: "Ali", age: 19 },
//     { name: "Zain", age: 18 },
//     { name: "Bilal", age: 16 },
//     { name: "Ahmed", age: 21 }
// ];

// let count = 0;

// for (let i = 0; i < students.length; i++) {
//     if (students[i].age >= 18) {
//         count++;
//     }
// };

// console.log("Total Adults : ", count);

// const cart = [
//     { name: "Shirt", quantity: 2 },
//     { name: "Shoes", quantity: 1 },
//     { name: "Cap", quantity: 3 },
//     { name: "Watch", quantity: 2 }
// ];

// let totalQuantity = 0;

// for (let i = 0; i < cart.length; i++) {
//     totalQuantity = totalQuantity + cart[i].quantity;

// };

// console.log("Total Quantity : ", totalQuantity);

// const students = [
//     { name: "Moiz", marks: 85 },
//     { name: "Ali", marks: 72 },
//     { name: "Zain", marks: 95 },
//     { name: "Bilal", marks: 65 }
// ];

// let highest = 0;

// for (let i = 0; i < students.length; i++) {
//     if (students[i].marks > highest) {
//         highest = students[i].marks
//     }

// };

// console.log("Highest Marks : ", highest);


// const employees = [
//     { name: "Moiz", salary: 50000 },
//     { name: "Ali", salary: 40000 },
//     { name: "Zain", salary: 60000 },
//     { name: "Bilal", salary: 35000 }
// ];

// let totalSalary = 0;

// for (let i = 0; i < employees.length; i++) {
//     totalSalary = totalSalary + employees[i].salary
// };

// console.log("Total Salary : ", totalSalary);

// const students = [
//     { name: "Moiz", marks: 85 },
//     { name: "Ali", marks: 45 },
//     { name: "Zain", marks: 92 },
//     { name: "Bilal", marks: 65 },
//     { name: "Ahmed", marks: 78 }
// ];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].marks >= 50) {
//         console.log(`${students[i].name} - Pass`);

//     } else {
//         console.log(`${students[i].name} - Fail`);

//     }
// };

// const products = [
//     { name: "Laptop", price: 80000 },
//     { name: "Mobile", price: 45000 },
//     { name: "Mouse", price: 1500 },
//     { name: "Keyboard", price: 2500 },
//     { name: "Monitor", price: 25000 }
// ];

// for (let i = 0; i < products.length; i++) {
//     if (products[i].price >= 20000) {
//         let discount = products[i].price * 10 / 100;
//         let finalPrice = products[i].price - discount;

//         console.log(products[i].name, "10% Discount");
//         console.log("Final Price", finalPrice);


//     } else {

//         console.log(products[i].name, "Original Price:", products[i].price);
//     }

// };

// const students = [
//     { name: "Moiz", marks: 85 },
//     { name: "Ali", marks: 45 },
//     { name: "Zain", marks: 92 },
//     { name: "Bilal", marks: 65 },
//     { name: "Ahmed", marks: 78 }
// ];

// let highest = students[0].marks;
// let lowest = students[0].marks;

// for (let i = 0; i < students.length; i++) {
//     if (students[i].marks > highest) {
//         highest = students[i].marks;
//     }
//     if (students[i].marks < lowest) {
//         lowest = students[i].marks
//     }

// }

// console.log("Highest Marks : ", highest);
// console.log("Lowest Marks : ", lowest);

// const users = [
//     { name: "Moiz", age: 17, city: "Rawalpindi" },
//     { name: "Ali", age: 22, city: "Lahore" },
//     { name: "Zain", age: 19, city: "Karachi" },
//     { name: "Bilal", age: 16, city: "Rawalpindi" },
//     { name: "Ahmed", age: 25, city: "Islamabad" }
// ];

// const adults = users.filter((user) => user.age >= 18);

// const names = adults.map((user) => user.name);

// console.log(names);


// const cart = [
//     { name: "Shirt", price: 2000, quantity: 2 },
//     { name: "Shoes", price: 5000, quantity: 1 },
//     { name: "Cap", price: 1000, quantity: 3 },
//     { name: "Watch", price: 3000, quantity: 2 }
// ];

// let totalBill = 0;
// let highestProduct = 0;
// let expensiveProduct = "";

// for (let i = 0; i < cart.length; i++) {
//     let productTotal = cart[i].price * cart[i].quantity;

//     totalBill = totalBill + productTotal;

//     if (productTotal > highestProduct) {
//         highestProduct = productTotal;
//         expensiveProduct = cart[i].name;
//     }

//     console.log(
//         cart[i].name + "Total Price : " + productTotal
//     );

// };

// console.log("-------------------------");
// console.log("Total Bill : ", totalBill);
// console.log("Most Expensive Product : ", expensiveProduct);
// console.log("Highest Price : ", highestProduct);

const players = [
    { name: "Moiz", score: 120 },
    { name: "Ali", score: 85 },
    { name: "Zain", score: 150 },
    { name: "Bilal", score: 60 },
    { name: "Ahmed", score: 110 }
];

let totalScore = 0;
let count = 0;
let highest = players[0].score;
let lowest = players[0].score;
let valuablePlayer = players[0].name;

for (let i = 0; i < players.length; i++) {
    totalScore = totalScore + players[i].score;
    if (players[i].score >= 100) {
        count++;
    }
    if (players[i].score > highest) {
        highest = players[i].score;
        valuablePlayer = players[i].name;
    }
    if (players[i].score < lowest) {
        lowest = players[i].score;
    }

    console.log(players[i].name + "Score: " + players[i].score);

};

console.log("Total Scores : ", totalScore);
console.log("Count Score : ", count);
console.log("Highest Score : ", highest);
console.log("Lowest Score : ", lowest);
console.log("Valuable Player : ", valuablePlayer);

const transactions = [
    { type: "deposit", amount: 5000 },
    { type: "withdraw", amount: 2000 },
    { type: "deposit", amount: 8000 },
    { type: "withdraw", amount: 3000 },
    { type: "deposit", amount: 1500 }
];

let totalDeposit = 0;
let totalWithDraw = 0;
let balance = 0;

for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type === "deposit") {
        totalDeposit = totalDeposit + transactions[i].amount;
    } else if (transactions[i].type === "withdraw") {
        totalWithDraw = totalWithDraw + transactions[i].amount;
    }
    balance = totalDeposit - totalWithDraw;
};

console.log("Total Deposit : ", totalDeposit);
console.log("Total withDraw : ", totalWithDraw);
console.log("Final Balance : ", balance);
