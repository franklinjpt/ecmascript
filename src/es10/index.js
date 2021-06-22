let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));


let hello = '       hello world';
console.log(hello.trimStart());

//construir de arreglos a objetos
let entries = [["name","franklin"], ["age", 20]];
console.log(Object.fromEntries(entries));