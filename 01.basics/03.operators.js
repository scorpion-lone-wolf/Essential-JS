
console.log("------------------------------nullish coalescing operator------------------------\n");
// nullish coalescing operator ??
console.log(true ?? "hello"); // true
console.log(false ?? "hello"); // false
console.log(null ?? "hello"); // hello
console.log(undefined ?? "hello"); // hello

console.log("-------------------------------- typeof operator--------------------------------\n");
const num = 123;
const str = "string";
const bool = true;
console.log("num is of type ", typeof (num)); // number
console.log("str is of type ", typeof (str)); // "string"
console.log("bool is of type ", typeof (bool)); // boolean



console.log("---------------------nullish assignment operator--------------------------------\n");

// ??= only assign when value is either undefined or null
let initialValue1 = null;
let initialValue2 = "something";
initialValue1 ??= "newInitialValue1";
initialValue2 ??= "newInitialValue2";
console.log("initialValue1 ", initialValue1); // newInitialValue1
console.log("initialValue2 ", initialValue2); // something



console.log("-------------------------------- delete operator--------------------------------\n");

const obj = {
  name: "rahul",
  age: 25
};
console.log("accessing age before delete operator", obj.age); // 25
delete obj.age;
console.log("accessing age after delete operator", obj.age); // undefined


console.log("--------------------------------spread operator----------------------------------\n");
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr2 = [...arr1];
const arr3 = arr1;
console.log(arr1 === arr2);// false
console.log(arr1 === arr3);// true


console.log("-------------------------generator function* and yield keyword------------------\n");
// generator function*
function* generateNumber() {
  for (let i = 1; i < 100; ++i) {
    yield i; // yield keyword
  }
}

const generator = generateNumber();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
setTimeout(() => { console.log(generator.next()); }, 2000);


