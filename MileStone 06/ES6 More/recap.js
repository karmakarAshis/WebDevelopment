//val let const difference
if (true) {
    var n = 10;
    let b = 20;
    const v = 30;
}
// console.log(n);
// console.log(b);
// console.log(v);

// template string

const boyos = 15;
const person = {
    name: 'sakibul'
};
const message = `hi ${person.name} .you are only ${boyos}?`;
// console.log(message);

//arrow function
const square = x => x * x;
const sum = (a, b) => a + b;

// let a = square(5);
// console.log(a); //25


//destructuring

const {age , x:height, ...rest} = {x:3, y:7, name:'babul', age: 55} ;

// console.log(age);
// console.log(rest);
// console.log(height);

const [first, second, ...others] = ['ram', 'sam', 'jodu', 'modu', 'kodu'];

