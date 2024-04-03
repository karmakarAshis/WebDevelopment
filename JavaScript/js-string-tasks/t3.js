const text = "aeioe.";
let a = 0;
let e = 0;
let ii = 0;
let o = 0;
let u = 0;
for (const i of text) {

    if (i === 'a') {
        a = 1;
    } else if (i === 'e') {
        e = 1;
    } else if (i === 'i') {
        ii = 1;
    } else if (i === 'o') {
        o = 1;
    } else if (i === 'u') {
        u = 1;
    }
}
const total =a + e + ii + o + u;
if (total === 5) {
    console.log('Contains All Vowels');
} else {
    console.log('missing vowels ' ,5-total);
}