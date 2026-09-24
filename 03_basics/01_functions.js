
function sayMyName() {
    console.log("M");
    console.log("O");
    console.log("I");
    console.log("Z");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}


const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("moiz"))
// console.log(loginUserMessage("Moiz"))

function calculateCartPrice(...num1) {
    return num1
}


// console.log(calculateCartPrice(200, 250, 300, 350, 400));

const user = {
    username: "Moiz",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 250, 300, 350, 400]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 250, 300, 350, 400, 450, 500]));