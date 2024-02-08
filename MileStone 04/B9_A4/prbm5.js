function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr)) {
        return "invalid Input";
    } else if (typeof livingCost !== 'number' || isNaN(livingCost)) {
        return "invalid Input";
    }
    let totalIncome = 0;
    for (const i of arr) {
        if (i >= 3000) {
            let tax = (i * 20) / 100;
            totalIncome += (i - tax);
        } else {
            totalIncome += i;
        }
    }
    let savings = totalIncome - livingCost;
    if (savings < 0) {
        return "Earn more";
    } else {
        return savings;
    }
}


// const myIncome = [900, 2700, 3400];
// const livingCost = 10000;

// const saving = monthlySavings(myIncome, NaN);
// console.log(saving);