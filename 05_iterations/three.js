// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('Pak', "Pakistan")
map.set('USA', "United States Of America")
map.set('UK', "United Kingdom")
map.set('POR', "Portugal")


// console.log(map);

for (const [Key, value] of map) {
    console.log(Key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [Key, value] of myObject) {
//     console.log(Key, ':-', value);

// }