// Number Object
console.log("--------------------------------Number Objects--------------------------------");
const num = new Number(123.3456);
console.log(`num is of type ${typeof (num)} and with value ${num}`);

// Boolean Object
console.log("--------------------------------Boolean Objects--------------------------------");
// falsy value
console.log("Falsy values");
console.log(Boolean(false));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));

console.log("truthy values");
console.log(Boolean(true));
console.log(Boolean("hello"));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(1.23));
console.log(Boolean([]));
console.log(Boolean({}));

// String Objects
console.log("-------------------------String Objects------------------------");
const str1 = new String("Hello World");
console.log(typeof str1 === "string");// false -> It will be object
const str2 = String("Hello World");
console.log(typeof str2 === "string");// true -> It will be 'string

// Array Objects
console.log("-------------------------Array Objects------------------------>");
const arr1 = Array.from({ 0: 'apple', 1: 'banana', 2: 'cherry', length: 3 });
console.log(typeof arr1);  // 'object'
console.log(arr1);
const arr2 = [1, 2, 3];
console.log(typeof arr2); // 'object'
// creating a 5 size array with undefined values
const arr3 = new Array(5);
console.log(arr3);
