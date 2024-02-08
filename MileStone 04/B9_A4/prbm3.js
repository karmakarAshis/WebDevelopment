function deleteInvalids(array) {
    const numberArray = [];
    if (Array.isArray(array) === true) {
        for (const num of array) {
            if (typeof num === 'number' && !isNaN(num)){
                numberArray.push(num);
            }
        }
        return numberArray;
    }
    return "invalid Array";
}

// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));