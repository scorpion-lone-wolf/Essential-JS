// ----------------------------------------------------------------Primitive---------------------------------------------------------------

console.log("--------------------------------number----------------------------------------------------");
// 1. Number
let num1 = 123;
let num2 = Number(321);
let num3 = 345.876;
console.log("num1: " + num1);
console.log("num2: " + num2);
console.log("num3: " + num3);
console.log(typeof num1); // "number"
console.log(typeof num3); // "number"
console.log(typeof num1 === typeof num2);

console.log("--------------------------------string----------------------------------------------------");

let name1 = "Rahul";
let name2 = String("Pursotam");
console.log(typeof name1);
console.log(typeof name2);
console.log(typeof name1 === typeof name2);

console.log("--------------------------------boolean----------------------------------------------------");

let isActive1 = true;
let isActive2 = Boolean(false);
console.log(typeof isActive1);
console.log(typeof isActive2);
console.log(typeof isActive1 === typeof isActive2);

console.log("--------------------------------undefined and null(object)----------------------------------------------------");
let u = undefined;
let n = null;
console.log(typeof u);
console.log(typeof n);

console.log("--------------------------------bigint----------------------------------------------------");

let bigNumber1 = 123498989898445387879789n;
let bigNumber2 = BigInt("123498989898445387879789");
console.log(typeof bigNumber1);
console.log(typeof bigNumber2);
console.log(typeof bigNumber1 === typeof bigNumber2);

// ---------------------------------------------------------- Object types -------------------------------------------------------->
console.log("-------------------------------- Array types --------------------------------------------------------");
let arr1 = [1, 2, 3, 4, 5, 6];
console.log(typeof arr1); // 'object'
console.log(arr1 instanceof Array);

console.log("-------------------------------- Map types --------------------------------------------------------");

let map1 = new Map();
console.log(typeof map1); // 'object'
console.log(map1 instanceof Map);
