function checkName(name) {
    if (typeof name === 'string') {
        const lastChar = name[name.length - 1].toLowerCase();
        if (lastChar === 'a' || lastChar === 'y' || lastChar === 'i' || lastChar === 'e' || lastChar === 'o' || lastChar === 'u' || lastChar === 'w') {
            return "Good Name";
        } else {
            return "Bad Name";
        }
    }
    return "invalid!";
}
// console.log(checkName(['raseh']));