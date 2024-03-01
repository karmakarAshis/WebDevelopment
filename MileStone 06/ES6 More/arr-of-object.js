const product = [
    { id: 1, name: 'lenovo', price: 55000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 40000 },
    { id: 4, name: 'apple', price: 155000 }
];
const names = product.map(product=> product.name);
// console.log(names);

// product.forEach(p=>console.log(p.name));
const expensive = product.filter(p => p.price > 50000);
// console.log(expensive);

// find

const affordable = product.find(p => p.price < 50000);
console.log(affordable);