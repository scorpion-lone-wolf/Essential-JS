console.log("---------------------------------------------------------------- Creation of objects ---------------------------------------------------------------->");

// using object constructor
const object1 = new Object({
  name: 'rahul',
  age: 25
});

// using object literals
const object2 = new Object({
  name: 'pursotam',
  age: 26
});

// using constructor function (Kind of think as class)
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello from constructor function ; ", this.name, " : ", this.age);
  };
}

// using Object.create(), which create an object with custom prototype

const object4 = Object.create(object2);



console.log("object1 is : ", object1);
console.log("object2 is : ", object2);
const object3 = new Person("Undertaker", 55);
console.log("object3 is : ", object3, ": calling fn greet");
object3.greet();
console.log("object4 is : ", object4, "and looks into object2 and get ", object4.name, "and its prototype is :", object4.__proto__ == object2);


console.log("---------------------------------------------------------accessing,updating, deleting --------------------------------------------------------------------->");
console.log("Accessing name from object3 : ", object3.name);

// changing the name value from object3 to Kane
object3.name = "Kane";
console.log("Accessing name from object3 after updating: ", object3.name);

// deleting the name property from object3
delete object3.name;
console.log("trying to access name from object3 ", object3.name, "as object3 is now:", object3);



console.log("-------------------------------------------------------property existing test --------------------------------------------------------------------->");

console.log("Does object2 have a property 'name' :", "name" in object2);
console.log("Does object2 have a property 'age' :", "age" in object2);

// but object4 has no property 'name' and has a property 'age. Is's prototype (i.e object2 has)
for (const key in object4) {
  console.log(key);
}
for (const key in Object.keys(object4)) {
  console.log("I dont have any property so i won't run");
  console.log(key);
}

