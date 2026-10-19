// let favoriteColors = ["Black", "White", "Blue"];

// favoriteColors.push ("Grey");

// console.log("Total colors:", favoriteColors.length);

// console.log("Updated Colors List:", favoriteColors);

// function multiplyNumbers(num1, num2) {
//     let result = num1 * num2;
//     console.log(result);
// }
// multiplyNumbers(5, 9);

// function bodmasRule(num1, num2, num3, num4, num5) {
//     let result = num1 * num2 + num3 - num4 % num5;
//     console.log(result);

// }
// bodmasRule(5, 9, 3, 7, 2);

// let myPrices = [65, 23, 48, 83, 50, 85];
// function calculateTotal(arr) {
//     let total = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5];
//     console.log("Total Sum:", total);

// }
// calculateTotal(myPrices);

// let name = "Moiz";
// let greetings = `Hello,${name}! Aap kase hain?`;
// console.log(greetings);

// let firstName = "Moiz";
// let lastName = "Rajput";
// let fullName = firstName + " " + lastName;
// console.log(fullName);


// let myName = "Moiz"
// let myMessage = `Hello, ${myName}! Welcome to Javascript learning.`
// console.log(myMessage);
// console.log(myName.length);

// let teamName = ["Ali", "Moiz", "Awais", "Murtaza", "Hamza", "Bilal"];
// function generateTeamSummary(arr) {
//     let totalMembers = arr.length;
//     let firstMember = arr[0];
//     let message = `Humari team mein kul ${totalMembers} log hain,aur pehle member ka naam ${firstMember} hai`;
//     console.log(message);

// }
// generateTeamSummary(teamName);

// let temperature = 35;
// if (temperature >= 30) {
//     console.log("Garmi boht ha AC lagao!");

// } else {
//     console.log("Mausam acha hai, sukoon hai!");

// }

// let speed = 90;

// if (speed > 100) {
//     console.log("Boht tez gadi chala rahe hain, challan ho jayega! 🚨");
// }

// else if (speed >= 60) {
//     console.log("Achi speed hai, safe drive! 🚗");
// }
// else {
//     console.log("Gadi kafi aahista chal rahi hai! 🐢");

// }

// for (let i = 0; i < 10; i++) {
//     console.log("Current number is: " + i);

// }

// let battery = 3;

// while (battery > 0) {
//     console.log("Game chal rahi hai! Battery hai: " + battery);
//     battery--; // Har dafa 1 battery kam ho rahi hai
// }

// console.log("Battery khatam, game over! 🪫");

// let balance = 0; // Pese zero hain

// do {
//     console.log("Yeh message kam az kam 1 baar zaroor print hoga!");
// } while (balance > 0);

// let fruits = ["Aam (Mango)", "Kela (Banana)", "Seb (Apple)"];

// for (let fruit of fruits) {
//     console.log("Mera pasandida phal: " + fruit);
// }

// let mehran = {
//     brand: "Suzuki",
//     model: 1991,
//     speed: 40, // Kilometer per hour

//     // 1. GETTER: Speed ko style ke sath dekhne ke liye
//     get getSpeed() {
//         return this.speed + " km/h ki raftaar hai!";
//     },

//     // 2. SETTER: Speed update karne aur shart lagane ke liye
//     set setSpeed(newSpeed) {
//         if (newSpeed > 120) {
//             console.log("⚠️ Khatra! Bhai 1991 ki Mehran itni tez nahi bhaag sakti! Slow karo!");
//         } else {
//             this.speed = newSpeed;
//             console.log("Speed kamyaabi se update ho gayi: " + this.speed);
//         }
//     }
// };

// // --- Ab yahan hum isay call kar rahe hain ---

// // 1. Pehle current speed dekhte hain (Getter)
// console.log(mehran.getSpeed);

// // 2. Normal speed set karte hain (Setter - yaad rakhein '=' lagana hai, brackets '()' nahi!)
// mehran.setSpeed = 80;

// // 3. Dubara speed check karte hain
// console.log(mehran.getSpeed);

// // 4. Boht tez speed de kar check karte hain ke shart (validation) kaam karti hai ya nahi
// mehran.setSpeed = 150;

// let car = "Mehran 1991"; // Yeh Global variable hai (ghar ka common room)

// function showCar() {
//     console.log("Main chala raha hoon: " + car); // Yeh function ke andar bhi aram se chal jayega!
// }

// showCar();
// console.log("Bahir bhi chalega: " + car); // Yeh bahar bhi chalega!


// function myRoom() {
//     let secretToy = "Remote Control Car"; // Yeh Local variable hai (sirf is kamre ke andar)
//     console.log("Kamre ke andar: " + secretToy); // Yahan chal jayega!
// }

// myRoom();
// console.log(secretToy);

// let a = 10; // 'a' ke paas 10 hai
// let b = a;  // 'b' ko 'a' ki photocopy mil gayi

// b = 20;     // Hum ne 'b' ko badal kar 20 kar diya

// console.log(a); // Output: 10 hi rahega!
// console.log(b); // Output: 20 ho gaya

// let mehran2 = { speed: 40 };
// let mehran1 = mehran2; // Hum ne mehran1 ka address mehran2 ko de diya

// // Ab hum mehran2 ki speed badalte hain:
// mehran1.speed = 120;

// console.log(mehran2.speed); // Output kya aayega? 100! 😱

// let originalCar = { brand: "Suzuki", model: 1991, speed: 40 };

// // 1. Spread Operator se copy banayein
// let clonedCar = { ...originalCar };

// // Ab agar hum clonedCar ki speed badlein:
// clonedCar.speed = 100;

// console.log(originalCar.speed); // Output: 40 (Original bilkul safe hai! 🎉)
// console.log(clonedCar.speed);   // Output: 100


// let originalCar = { brand: "Suzuki", model: 1991, speed: 40 };

// let clonedCar = Object.assign({}, originalCar);

// clonedCar.speed = 80;

// console.log(originalCar.speed); // Output: 40 (Safe!)

// let originalUser = {
//     name: "Dawood",
//     details: { city: "Rawalpindi" } // Yeh andar wala object (Nested Object) hai
// };

// // Bilkul andar tak deep copy bana li
// let clonedUser = structuredClone(originalUser);

// // Ab hum clonedUser ke andar ja kar city badalte hain:
// clonedUser.details.city = "Islamabad";

// // Dekhte hain original par kya asar para:
// console.log(originalUser.details.city); // Output: "Rawalpindi" (Asal wala bilkul mehfooz hai! 🎉)
// console.log(clonedUser.details.city);   // Output: "Islamabad" (Sirf copy wala badla hai)


// let carSpeeds = [40, 90, 60, 120, 30, 150];
// let fastCars = carSpeeds.filter(function (speed) {
//     return speed > 80; // Yeh hamari shart (condition) hai
// });

// console.log(fastCars);
// // Output: [90, 120, 150]

// let fastCars = carSpeeds.filter(speed => speed > 80);

// console.log(fastCars);
// Output: [90, 120, 150]

// let names = ["Ali", "Bilal", "Ahmed", "Usman", "Amir", "Basit", "Usama", "Bushra", "Uzma"];

// let aNames = names.filter(name => name.startsWith("U"));

// console.log(aNames);

// let speeds = [40, 60, 80];

// // Har speed mein 20 add kar do
// let upgradedSpeeds = speeds.map(speed => speed * 20);

// console.log(upgradedSpeeds);
// Output: [60, 80, 100]

// let carSpeeds = [40, 70, 120, 90, 150];

// let firstFastCar = carSpeeds.find(speed => speed > 100);

// console.log(firstFastCar);
// // Output: 120 (Kyun ke 120 pehli speed thi jo 100 se bari thi)

// let petrolExpenses = [500, 1000, 1500];

// let totalBill = petrolExpenses.reduce((total, currentVal) => total + currentVal);

// console.log(totalBill);

// let parts = ["Engine", "Brake", "Wheel", "Headlight"];
// for (let part of parts) {
//     if (part === "Brake") {
//         console.log(part + "=> Brake ko check karo!");
//         continue;
//     }

//     console.log(part + " => Part OK hai");

// }
// let repairCosts = [500, 1200, 300, 2500, 1000];
// let totalBill = 0;

// for (let repairCost of repairCosts) {
//     totalBill += repairCost;
// }
// console.log("Total Kharcha : " + totalBill);

// let petrolLitres = [5, 10, 7, 12];
// let totalPetrol = 0;
// for (let petrolLitre of petrolLitres) {
//     totalPetrol += petrolLitre
// }
// console.log("Total Petrol : " + totalPetrol);


// let repairCosts = [500, 1200, 300, 2500, 1000];
// let highestCost = 0;

// for (let repairCost of repairCosts) {
//     if (repairCost > highestCost) {
//         highestCost = repairCost
//     }
// }

// console.log("SAB SE MAHENGA PART (Highest Cost) : " + highestCost);

let repairCosts = [500, 1200, 300, 2500, 1000];
let lowestCost = repairCosts[0];
for (let repairCost of repairCosts) {
    if (repairCost < lowestCost) {
        lowestCost = repairCost;
    }
}
console.log(lowestCost);
