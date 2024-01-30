// get marks for 5 subjects
let mathematics = 75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bangla = 99.50;

let totalMarks = mathematics + biology + chemistry + physics + bangla;
let averageMarks = totalMarks / 5;
let strToNum = parseFloat(averageMarks.toFixed(2));
console.log(strToNum);