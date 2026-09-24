const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "cpp", "py", "java"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('Pak', "Pakistan")
// map.set('USA', "United States Of America")
// map.set('UK', "United Kingdom")
// map.set('POR', "Portugal")

// for (const key in map) {
//     console.log(key);
// }