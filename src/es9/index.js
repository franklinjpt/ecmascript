const obj = {
    name1: 'Franklin',
    age: 20,
    country: "CO"
}

let { name1, ...all} = obj;
console.log(name1, all);

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve('Hello World'), 3000) 
            : reject(new Error('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finish')) 


// const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
// const match = regexData.exec('2021-05-17');
// const year = match[1]
// const month = match[2]
// const day = match[3]

// console.log(year, month, day);

const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
const match = regexData.exec('2018-04-20');
const { year, month, day } = match.groups;

console.log(year, month, day);