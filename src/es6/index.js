function newFunction2(name = 'Franklin', age = 20, country = "CO"){
    console.log(name, age, country);
}

newFunction2();
newFunction2("Carlos", 23, "VE");

let lorem = "Esta es una frase super epica\n"
+ "otra frase epica que se necesitba"

//es6
let lorem2 = `Esta frase es más epica
aquí esto se duplica`;

console.log(lorem);
console.log(lorem2);

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!');
        }else{
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//modules
import { hello } from './module';

hello();

//Generators
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);