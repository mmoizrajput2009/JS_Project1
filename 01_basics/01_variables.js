const accountId = 14455
let accountEmail = "moizgmail.com"
var accountPassword = "12345"
accountCity = "Attock"
let accountstate;
// accountId = 2 // note allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])

const a = { name: "sdf" }
// const vs var vs let
// datatypes number strings array objects etc
// resgin the values to variables 

// let carPrices = [200000, 350000, 500000, 150000];

// // Filter - 3 Lac se kam wali cars
// let cheapCars = carPrices.filter(price => price < 300000);
// console.log(cheapCars); // [200000, 150000]

// // Map - Sub cars par 10% tax lagana
// let taxedPrices = carPrices.map(price => price + 10000);
// console.log(taxedPrices);

// // Reduce - Saari cars ka total bill
// let totalPrice = carPrices.reduce((total, price) => total + price, 0);
// console.log(totalPrice);

// // Find - Pehli matching price
// let exactPrice = carPrices.find(price => price === 500000);
// console.log(exactPrice);

// let rawText = "   Suzuki Mehran 1991   ";

// let cleanText = rawText.trim(); // Faltu spaces khatam
// console.log(cleanText); // "Suzuki Mehran 1991"

// let shortName = cleanText.slice(0, 6); // Tukda kaatna
// console.log(shortName); // "Suzuki"

let mehran = { brand: "Suzuki", model: 1991, city: "Rawalpindi" };

// console.log(Object.keys(mehran));   // Output: ["brand", "model", "city"]
// console.log(Object.values(mehran)); // Output: ["Suzuki", 1991, "Rawalpindi"]
// console.log(Object.entries(mehran));// Output: [ ["brand", "Suzuki"], ... ]

// Object Merge
let extraSpecs = { fuel: "Petrol", condition: "Good" };
// console.log(extraSpecs);

let fullCarData = Object.assign({}, mehran, extraSpecs);
// console.log(fullCarData);

// let myMehran = {
//     brand: "Suzuki",
//     model: 1991,
//     color: "White",
//     getDetails: function() {
//         return `Yeh ${this.color} color ki ${this.brand} Mehran (${this.model}) hai.`;
//     }
// };

// console.log(myMehran.getDetails());

// // Standard Arrow Function
// const startEngine = (carName) => {
//     return carName + " ka engine start ho gaya hai! Vroom Vroom! 🚗";
// };

// console.log(startEngine("Mehran 1991"));

// For Loop - Maintenance check 3 dafa chalega
// for (let i = 1; i <= 3; i++) {
//     console.log("Mehran Service Step " + i);
// }

// // For...of Loop - Parts ki list dekhte hain
// let parts = ["Engine", "Tyre", "Brake", "Headlight"];
// for (let part of parts) {
//     console.log("Checking part: " + part);
// }

// let parts = ["Engine", "Tyre", "Brake", "Headlight"];

// for (let part of parts) {
//     if (part === "Brake") {
//         console.log("⚠️ WARNING: " + part + " ko achi tarah check karo, yeh safety ke liye zaroori hai!");
//     } else {
//         console.log("Checking part: " + part + " - Everything OK! ✅");
//     }
// }

let parts = ["Engine", "Tyre", "Brake", "Headlight"];

for (let part of parts) {
    console.log("Checking part: " + part);
    
    if (part === "Tyre") {
        console.log("🛑 BINGO! Issue " + part + " mein mil gaya hai. Checking roki ja rahi hai!");
        break; // Loop yahan khatam ho jaye ga!
    }
}