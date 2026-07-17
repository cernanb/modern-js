import { add, add2 } from "./calc-modules/add.js";
import { multiply } from "./calc-modules/multiply.js";
import { subtract } from "./calc-modules/subtract.js";
import { divide } from "./calc-modules/divide.js";

const result1 = add(10, 40, 60, 100, 200, 400);
console.log(result1);

const result2 = subtract(10, 5);
console.log(result2);

const result3 = divide(20, 4);
console.log(result3);

const result4 = multiply(50, 10);
console.log(result4);

const result5 = add2(50);
console.log(result5);
