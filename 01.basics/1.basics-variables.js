console.log("Hello world!");
console.log("--------------------------------variables types--------------------------------");
// We have 3 types of variables in js => var, let and const

var varibale1 = "I m variable with var";
let varibale2 = "I m variable with let keyword";
const varibale3 = "I m variable with const keyword";

console.log(varibale1, "\n", varibale2, "\n", varibale3);


console.log("--------------------------------Scope of variables --------------------------------");
// var are function scoped , let and const are block scoped
// var can be redecalred and re-assigned in the same scope , this is not true for let(can be re-assigned though) and const
function changeValue(val) {
  {
    console.log("Trying to log before initialization of var ", sumFactor); // undefined
    var sumFactor = 5;
    let subFactor = 2;
    console.log("The sumFactor inside {} is " + sumFactor);
    console.log("The subFactor inside {} is " + subFactor);
  }
  console.log("The sumFactor outside {} is " + sumFactor);
  // console.log("The subFactor outside {} is " + subFactor); // This will throw an error as it is outside the scope
}
changeValue(10);
