// singleton

//object literals


const mySym = Symbol("Key1")

const jsuser = {
    name: "Moiz",
    "full name": "Moiz Rajput",
    [mySym]: "myKey1",
    age: 17,
    location: "Rawalpindi",
    email: "moizrajputgoogle.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

jsuser.email = "moizrajputchatgpt.com";
// Object.freeze(jsuser)
jsuser.email = "moizrajputmicrosoft.com";
// console.log(jsuser);

jsuser.greeting = function () {
    console.log("hello js user");
}
jsuser.greetingTwo = function () {
    console.log(`hello js user ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());