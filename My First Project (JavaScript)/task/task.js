const input = require('sync-input');

const bubblegum = 202;
const toffee = 118;
const iceCream = 2250;
const milkChocolate = 1680;
const doughnut = 1075;
const pancake = 80;

const income = bubblegum + toffee + iceCream + milkChocolate + doughnut + pancake;

console.log("Earned amount:");
console.log(`Bubblegum: $${bubblegum}`);
console.log(`Toffee: $${toffee}`);
console.log(`Ice cream: $${iceCream}`);
console.log(`Milk chocolate: $${milkChocolate}`);
console.log(`Doughnut: $${doughnut}`);
console.log(`Pancake: $${pancake}`);
console.log(`Income: $${income}`);

console.log("Staff expenses:");
const staffExpenses = Number(input());
console.log("Other expenses:");
const otherExpenses = Number(input());
const netIncome = income - staffExpenses - otherExpenses;
console.log(`Net income: $${netIncome}`);