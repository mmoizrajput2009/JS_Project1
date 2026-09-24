// const tinderuser = new object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Moiz"
tinderuser.IsLoggedIn = "false"

// console.log(tinderuser);

const regularuser = {
    email: "moizgmail.com",
    fullname: {
        userfullname: {
            firstname: "Moiz",
            lastname: "Rajput"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "mgamil.com"
    },
    {
        id: 1,
        email: "mgamil.com"
    },
    {
        id: 1,
        email: "mgamil.com"
    },
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));


const cousre = {
    cousre: "js in urdu",
    price: "999",
    cousreInstructor: "Moiz"
}

// course.cousreInstructor

const { cousreInstructor: Instructor } = cousre

//console.log(courseInstructor)
console.log(Instructor);

// {
//     "name": "Moiz",
//     "price": "999"
//     "cousrename": "js in urdu",
// }

[
    {},
    {},
    {},
]