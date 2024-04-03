const text = "You should be able to check whether x or X exists. After that, search online how to replace a character in a string.";
let count = 0;
for (const i of text) {
    
    if (i === 'a' ) {
        count++;
    }
}

console.log(count);