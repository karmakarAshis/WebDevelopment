/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/
let sum=0;
for (let i = 61; i <= 100; i++) {
    if (i % 2 === 0)
        sum += i;
}
console.log('odd-',sum);
// sum=0;
// for (let i = 78; i <= 90; i++) {
//     if (i % 2 == 0)
//         sum += i;
// }
// console.log('even-',sum);