const numbers = [12, 98, 5, 41, 23, 78, 46];
let even = [];
for (const i in numbers) {
    if (numbers[i] % 2 === 0)
        even.push(numbers[i]);
}

console.log(even);