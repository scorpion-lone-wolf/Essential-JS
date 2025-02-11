console.log("-------------------------------- 'for' loop--------------------------------");
// Normal for loop
for (let i = 0; i <= 5; i++) {
  console.log("from normal for loop : ", i);
}

console.log("-------------------------------- 'for-in' loop--------------------------------");
arr = [1, 2, 3, 4, 5, 6];

let newProto = Object.create(Object.getPrototypeOf(arr));
newProto["7"] = 8;

Object.setPrototypeOf(arr, newProto);

for (let key in arr) {
  console.log("for in loop", key);
}

console.log("-------------------------------- 'for-of loop--------------------------------");

for (let val of arr) {
  console.log("for of loop", val);
}

console.log("--------------------------------label name for loop-------------------------------");

outerLoop: for (let i = 0; i < 5; ++i) {

  innerLoop: for (let j = 0; j < 5; ++j) {
    console.log(`values of i=${i} and j=${j}`);
    if (j == 2) break outerLoop;
  }
}
