// anonymous fn define
console.log("-------------------------------- anonymous fn creation--------------------------------");
const anonymousFn1 = () => {
  console.log("I m anonymous function1");
};

anonymousFn1();

console.log("-------------------------------- anonymous fn with multiple param , defualt value--------------------------------");

const anonymousFn2 = (a, b, c = 1) => {
  return a + b + c;
};

console.log(anonymousFn2(2, 3));
console.log(anonymousFn2(2, 3, 3));

