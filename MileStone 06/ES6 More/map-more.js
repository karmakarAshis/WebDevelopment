const numbers = [12, 32, 40, 23, 45];

const double = numbers.map(n => n * 2);

const fiveBonus = numbers.map(n => n + 5);

const halves = numbers.map(n => n / 2);

const friend = ['Tom', 'Jerry', 'BullDog', 'AKkas'];

const length = friend.map(fName => fName.length);

const firstLetter = friend.map(fnd => fnd[0]);


console.log(firstLetter);