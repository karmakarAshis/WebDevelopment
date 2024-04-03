/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 66;
let ticketFare = 800;
if (age < 10) {
    console.log("ticket fare Free!");
} else if (age >= 10 && age <= 24) {
    console.log("ticket fare Tk", ticketFare * .50);
} else if (age >= 60) {
    console.log("ticket fare TK", ticketFare * .85);
} else {
    console.log("Regular Fare TK", ticketFare);
}