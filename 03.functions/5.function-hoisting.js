
console.log("-------------------------------- function declaration hoisting--------------------------------");
func1();
function func1() {
  console.log("I will be hoisted to the top of my scope");
}

func1();

console.log("-------------- function expression --------------------------------");
// doesn't hoist to the top of their scope


// func2(); //  ❌ Cannot access 'func2' before initialization

const func2 = function () {
  console.log("I will not be hoisted");
};

func2();

console.log("-------------------------------- arrow fn --------------------------------");


// func3(); ❌ Cannot access 'func3' before initialization

const func3 = () => {
  console.log("I m an arrow function");
};

func3();
