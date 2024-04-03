function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "invalid number";
    }
    const ticketPrice = 120;
    const securityManSalary = 500;
    const staffLuanch = 50;
    const staffQuantity = 8;
    const result = (ticketSale * ticketPrice) - (securityManSalary + (staffQuantity * staffLuanch));
    return result;

}
// console.log(calculateMoney(-120));
