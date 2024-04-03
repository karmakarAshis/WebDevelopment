const numbers = [12, 32, 40, 23, 45];

const players = [75, 65, 67, 72, 55, 59, 60];

// const selected = players.filter(p => p > 60);
// const selected = players.filter(p => p > 0);
const selected = players.filter(p => p % 2 !== 1);

console.log(selected);